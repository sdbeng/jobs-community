import PostForm from "@/components/PostForm";
import UserInformation from "@/components/UserInformation";
import { SignedIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="grid grid-cols-8 mt-5 sm:px-5">      
      <section className="md:inline md:col-span-2 hidden">        
        {/* UserInformation -avatar left panel*/}
        <UserInformation />
      </section>

      <section className="col-span-full md:col-span-6 xl:col-span-4 xl:max-w-xl mx-auto w-full ">
        <SignedIn>
        {/* PostForm center */}
        {/* refactor: DOn't render PostForm here, add a new server component, add(use server) and pull user i.e. PostHome, then render the PostForm in there & pass in `user` as props */}
        <PostForm />
        </SignedIn>
        {/* PostFeed right side */}
      </section>

      <section className="hidden xl:inline justify-center col-span-2 ">
        {/* Widget- right side  */}
      </section>
      
    </div>
  );
}
