import { Button } from "@/components/ui/button";
import UserInformation from "@/components/UserInformation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid">
      {/* <h2>Jobs Community home</h2> */}
      <section>        
        {/* UserInformation left panel*/}
        <UserInformation />
      </section>

      <section>  
        {/* PostForm center */}
      </section>
      <section>        
        {/* PostFeed right side */}
      </section>
      
    </div>
  );
}
