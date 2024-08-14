import { currentUser } from "@clerk/nextjs/server";
import { Avatar, AvatarImage } from "./ui/avatar";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

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

      {/* SignedOut */}
      <SignedOut>
        <div className="text-center">
            <h2 className="text-lg font-semibold">Guest. You are not signed in.</h2>
            <Button asChild className="bg-[#0B63C4] text-white">
            <SignInButton>Sign in</SignInButton>
          </Button>
        </div>
      </SignedOut>

      {/* post, comments */}
      <hr className="my-4 w-full border-gray-300"/>
      <div className="flex justify-between w-full px-4 text-sm">
        <p className="font-semibold text-gray-400">Posts</p>
        <p className="text-blue-400">{0}</p>
      </div>

      <div className="flex justify-between w-full px-4 text-sm">
        <p className="font-semibold text-gray-400">Comments</p>
        <p className="text-blue-400">{0}</p>
      </div>
      
    </div>
  );
}
export default UserInformation;