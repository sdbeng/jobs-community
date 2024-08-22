'use server'

import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

interface PostData {
    text: string;
}

interface PostResult {
    data?: PostData;
    error?: string;
}

export default async function addPost(formData: FormData): Promise<PostResult | undefined> {
    const textValue = formData.get('text') as string;

    if (!textValue || textValue === '') {
        return { error: 'Please fill in text field.' };
    }

    const { userId } = auth();

    if (!userId) {
        return { error: 'User was not found' };
    }

    try {
        const postData: PostData = await db.post.create({
            data: {
                text: textValue,
                authorId: userId,
            },
        });
        revalidatePath('/');
        return { data: postData };
    } catch (error) {
        return { error: 'An error occurred while adding post' };
    }
}