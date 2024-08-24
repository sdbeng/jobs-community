import { currentUser } from "@clerk/nextjs/server";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { PostData } from "@/app/types/postType";

async function UserInformation({posts}: {posts: PostData[]}) {
    const user = await currentUser();
    const firstName = user?.firstName as string;
    const lastName = user?.lastName as string;
    const imageUrl = user?.imageUrl as string;
    // console.log('user obj===',user);

    const userPosts = posts?.filter((post) => post.authorId === user?.id);

  return (
    <div className="flex flex-col justify-center items-center bg-white mr-6 rounded-lg border py-4">
      {/* User Information */}
      <Avatar className="h-16 w-16 mb-5">
        {user?.id ? (
            <AvatarImage src={imageUrl} />
        ) : (
            <AvatarImage src="https://github.com/shadcn.png" />
        )}
        <AvatarFallback>
            {firstName?.charAt(0).toUpperCase()}
            {lastName?.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      {/* SignedIn */}
      <SignedIn>
        <div className="text-center">
            <h2 className="text-lg font-semibold">{firstName} {lastName}</h2>
            <p className="text-sm text-gray-600">{user?.emailAddresses[0].emailAddress}</p>
        </div>
      </SignedIn>

      {/* SignedOut */}
      <SignedOut>
        <div className="text-center space-y-2">
            <h2 className="text-lg font-semibold">Hi Guest. You are not signed in.</h2>
            <Button asChild className="bg-[#0B63C4] text-white">
            <SignInButton>Sign in</SignInButton>
          </Button>
        </div>
      </SignedOut>

      {/* post, comments */}
      <hr className="my-4 w-full border-gray-300"/>
      <div className="flex justify-between w-full px-4 text-sm">
        <p className="font-semibold text-gray-400">Posts</p>
        <p className="text-blue-400">{userPosts.length}</p>
      </div>

      <div className="flex justify-between w-full px-4 text-sm">
        <p className="font-semibold text-gray-400">Comments</p>
        <p className="text-blue-400">{0}</p>
      </div>
      
    </div>
  );
}
export default UserInformation;