'use server'

import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

interface PostData {
    text: string;
    authorId: string;
    author: {
        imageUrl?: string | null;
    };
}

export default async function addPost(formData: FormData): Promise<{ data?: PostData; error?: string}> {
    const text = formData.get('text') as string;    

    if (!text || text.trim() === '') {
        return { error: 'Please write something to post.' };
    }

    const { userId } = await auth();

    if (!userId) {
        return { error: 'Please sign in to post.' };
    }

    try {
        const postData: PostData = await db.post.create({
            data: {
                text: text.trim(),
                authorId: userId,
            },
            include: {
                author: {
                    select: {
                        imageUrl: true,
                    },
                },
            },
        });

        revalidatePath('/');
        return { data: postData };
    } catch (error) {
        console.error('Error adding post:', error);
        return { error: 'Failed to add post. Please try again.' };
    }
}