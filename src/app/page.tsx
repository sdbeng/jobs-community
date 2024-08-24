import PostFeed from "@/components/PostFeed";
import PostForm from "@/components/PostForm";
import UserInformation from "@/components/UserInformation";
import { SignedIn } from "@clerk/nextjs";
import getPosts from "./actions/getPosts";

export default async function Home() {
  const posts = await getPosts();

  if(!posts) {
    console.log('no posts fetched:');
    return <p className="text-red-100 ">issue fetching posts </p>
  }else{
    console.log('posts fetched success:',posts);
  }

  return (
    <div className="grid grid-cols-8 mt-5 sm:px-5">      
      <section className="md:inline md:col-span-2 hidden">        
        {/* UserInformation -avatar left panel*/}
        <UserInformation />
      </section>

      <section className="col-span-full md:col-span-6 xl:col-span-4 xl:max-w-xl mx-auto w-full ">
        <SignedIn>
        {/* PostForm center */}        
        <PostForm />
        <PostFeed posts={posts}/>
        </SignedIn>
        {/* PostFeed right side */}
      </section>

      <section className="hidden xl:inline justify-center col-span-2 ">
        {/* Widget- right side  */}
      </section>
      
    </div>
  );
}
