import { Button } from "@/components/ui/button";
import UserInformation from "@/components/UserInformation";
import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid">
      {/* <h2>Jobs Community home</h2> */}
      <section>        
        {/* UserInformation left panel*/}
        <UserInformation />
      </section>

      <section className="col-span-full md:col-span-6 xl:col-span-4 mx-auto w-full ">
        <SignedIn>
        {/* PostForm center */}
        </SignedIn>
        {/* PostFeed right side */}
      </section>

      <section className="hidden xl:inline justify-center col-span-2 ">
        {/* Widget- right side  */}
      </section>
      
    </div>
  );
}
