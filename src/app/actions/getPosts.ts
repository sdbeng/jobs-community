//In order to create the getAllPosts function, you need to import the db object from the lib/db.ts file and use the db.post.findMany method to retrieve all posts from the database. The getAllPosts function should return an array of PostData objects. The following code snippet demonstrates how to implement the getAllPosts function:
'use server';

import { db } from '@/lib/db';
import { PostData, User } from '@/app/types/postType';
import { auth, currentUser } from '@clerk/nextjs/server';

const getPosts = async (): Promise<PostData[] | undefined> => {
  const { userId } = auth();
  console.log('====================================');
  console.log('userId', userId);
  console.log('currentUser', currentUser);
  console.log('====================================');

  // if (!userId) {
  //   return {error: 'User not found'};
  // }

  try {
    const posts = await db.post.findMany({
      // where: {author: {userId}},
      orderBy: {createdAt: 'desc'},
      include: {
        // Include the author object with the imageUrl field
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            imageUrl: true,
            },
        },
    },
    });

    // Ensure the data matches the PostData type
    const formattedPosts: PostData[] = posts.map((post) => ({
      id: post.id,
      text: post.text,
      authorId: post.authorId,
      createdAt: post.createdAt,
      author: {
        id: post.author.id,
        name: post.author.name ?? '',//Provide default value for name when it is null
        email: post.author.email,
        imageUrl: post.author.imageUrl ?? null,
      },
    }));

    return formattedPosts ;
    
  } catch (error) {
    console.error('getPosts Error getting posts:', error);    
  }

}
export default getPosts;