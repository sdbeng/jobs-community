import { getPosts } from './actions/getPosts';
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';

export default async function Home() {
    const { data: posts, error } = await getPosts();

    return (
        <main className="max-w-2xl mx-auto p-4">
            <PostForm />
            {error ? (
                <p className="text-red-500 text-center">{error}</p>
            ) : (
                <PostList posts={posts || []} />
            )}
        </main>
    );
}