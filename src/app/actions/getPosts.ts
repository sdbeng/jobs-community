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

export async function getPublicPosts(limit: number = 5) {
    try {
        const posts = await db.post.findMany({
            where: {
                isPrivate: false, // Only fetch public posts
            },
            take: limit,
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
        console.error('Error fetching public posts:', error);
        return { error: 'Failed to fetch public posts' };
    }
}