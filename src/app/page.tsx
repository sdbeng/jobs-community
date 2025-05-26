/* eslint-disable react/no-unescaped-entities */
import { getPosts, getPublicPosts } from './actions/getPosts';
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from 'next/link';

export default async function Home() {
    const { data: privatePosts, error: privateError } = await getPosts();
    const { data: publicPosts } = await getPublicPosts(5); // Get 5 public posts

    return (
        <main className="max-w-3xl mx-auto p-4">
            <SignedOut>
                <section className="text-center py-12 space-y-6">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Welcome to My Developer Portfolio
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Hi! I'm Serg, a Full Stack Developer specializing in AI-powered applications. 
                        This is a demo of my social posting platform built with Next.js 15, TypeScript, 
                        and integrated with advanced AI features.
                    </p>
                    {<div className="flex gap-4 justify-center">
                        <Button asChild className='bg-purple-300 hover:bg-gray-200 text-slate-700 px-4 py-2 rounded-md'>

                            {/* div-wrap SignInButton avoids runtime error */}
                            <div>
                                <SignInButton />
                            </div>
                        </Button>
                        <a 
                            href="https://cal.com/sergdb24"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            Schedule call
                        </a>
                    </div>}
                    
                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                            Technical Highlights
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
                            <div className="p-4 bg-white rounded-lg shadow-sm">
                                <h3 className="font-medium">Modern 2025 Stack</h3>
                                <p className="text-sm text-gray-600">Next.js 15, TypeScript, Prisma, PostgreSQL</p>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-sm">
                                <h3 className="font-medium">Authentication</h3>
                                <p className="text-sm text-gray-600">Secure auth with Clerk. Auth setup, Middleware private routes configuration.</p>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-sm">
                                <h3 className="font-medium">AI Integration</h3>
                                <p className="text-sm text-gray-600">Ai Agents - Content analysis & recommendations</p>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-sm">
                                <h3 className="font-medium">Real Time Trading</h3>
                                <p className="text-sm text-gray-600">Real-time Signals market movement alerts MVP</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                            Public Posts
                        </h2>
                        <PostList posts={publicPosts || []} />
                    </div>
                </section>
            </SignedOut>

            <SignedIn>
                <PostForm />
                {privateError ? (
                    <p className="text-red-500 text-center">{privateError}</p>
                ) : (
                    <PostList posts={privatePosts || []} />
                )}
            </SignedIn>
        </main>
    );
}