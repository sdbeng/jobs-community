import Guest from "@/components/Guest";
import PostFeed from "@/components/PostFeed";
import PostForm from "@/components/PostForm";
import UserInformation from "@/components/UserInformation";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import getPosts from "@/app/actions/getPosts";

export default async function Home() {
    try {
        const posts = await getPosts();

        return (
            <div className="container mx-auto py-8">
                <SignedOut>
                    <Guest />
                </SignedOut>

                <SignedIn>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* User Information Sidebar */}
                        <div className="md:col-span-1">
                            <UserInformation posts={posts ?? []} />
                        </div>

                        {/* Main Content Area */}
                        <div className="md:col-span-3 space-y-6">
                            <PostForm />
                            <PostFeed posts={posts ?? []} />
                        </div>
                    </div>
                </SignedIn>
            </div>
        );
    } catch (error) {
        console.error('Error rendering Home page:', error);
        return (
            <div className="container mx-auto py-8">
                <h1 className="text-2xl font-bold mb-6">Error loading page</h1>
                <p className="text-gray-600">There was an error loading the page. Please try again later.</p>
            </div>
        );
    }
}