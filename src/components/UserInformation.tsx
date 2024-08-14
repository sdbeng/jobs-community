import { currentUser } from "@clerk/nextjs/server";
import { Avatar, AvatarImage } from "./ui/avatar";
import { SignedIn } from "@clerk/nextjs";

async function UserInformation() {
    const user = await currentUser();
    const firstName = user?.firstName as string;
    const lastName = user?.lastName as string;
    const imageUrl = user?.imageUrl as string;


  return (
    <div className="flex flex-col justify-center items-center bg-white mr-6 rounded-lg border py-4">
      {/* User Information */}
      <Avatar className="">
        {user?.id ? (
            <AvatarImage src={imageUrl} />
        ) : (
            <AvatarImage src="https://github.com/shadcn.png" />
        )}
      </Avatar>

      {/* SignedIn */}
      <SignedIn>
        <div className="text-center">
            <h2 className="text-lg font-semibold">{firstName} {lastName}</h2>
            <p className="text-sm text-gray-600">{"usr@xmail.net"}</p>
        </div>
      </SignedIn>
      
    </div>
  );
}
export default UserInformation;