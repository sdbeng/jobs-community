
'use server';
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
// import { PostData } from "../types/postType";
import { revalidatePath } from "next/cache";

const deletePostAction = async (postId: number): Promise<{
    dataMessage?: string | null;
    error?: string;
}> => {
    const {userId} = await auth();

    console.log('user from currentUser===',userId);

    if (!userId) {
        throw new Error('User not found!');
    }

    // interface DeletePostRequestBody {
    //     postId: PostData;
    //     userId: string;
    // }

    
    try {
        await db.post.delete({
            where: {
                id: postId,
                authorId: userId,
            },
        });

        revalidatePath('/');
        return { dataMessage: 'Post deleted successfully' };
    } catch (error) {
        console.error('Error deleting post:', error);
        return { error: 'An error occurred while deleting post!!' };
    }

}

export default deletePostAction;