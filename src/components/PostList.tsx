import { Post } from '@prisma/client';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { formatDistanceToNow } from 'date-fns';

interface PostWithAuthor extends Post {
    author: {
        imageUrl: string | null;
        name: string | null;
    };
}

interface PostListProps {
    posts: PostWithAuthor[];
}

export default function PostList({ posts }: PostListProps) {
    if (posts.length === 0) {
        return (
            <div className="text-center py-10 text-gray-500">
                No posts yet. Create your first post above!
            </div>
        );
    }

    return (
        <div className="space-y-4 mt-6">
            {posts.map((post) => (
                <div 
                    key={post.id} 
                    className="bg-white p-4 rounded-lg shadow-sm border border-slate-100"
                >
                    <div className="flex items-center space-x-3 mb-4">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src={post.author.imageUrl || undefined} />
                            <AvatarFallback>
                                {post.author.name?.charAt(0) || '?'}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-medium">{post.author.name}</p>
                            <p className="text-sm text-gray-500">
                                {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-700">{post.text}</p>
                </div>
            ))}
        </div>
    );
} 