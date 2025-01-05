'use server'

import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';

export async function getPosts() {
    try {
        const { userId } = await auth();
        
        if (!userId) {
            return { error: 'Unauthorized' };
        }

        const posts = await db.post.findMany({
            where: {
                authorId: userId, // Only fetch posts for the current user
            },
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                author: {
                    select: {
                        imageUrl: true,
                        name: true,
                    }
                }
            }
        });

        return { data: posts };
    } catch (error) {
        console.error('Error fetching posts:', error);
        return { error: 'Failed to fetch posts' };
    }
}