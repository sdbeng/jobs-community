import { Button } from "./ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Guest() {
    return (
        <div className="flex flex-col justify-center items-center bg-white p-8 rounded-lg border shadow-sm max-w-md mx-auto">
            <Avatar className="h-16 w-16 mb-4">
                <AvatarImage src="/default-user-avatar.svg" alt="Guest" />
                <AvatarFallback>G</AvatarFallback>
            </Avatar>
            
            <SignedOut>
                <h2 className="text-xl font-semibold mb-3">Welcome to Jobs Community!</h2>
                <p className="text-gray-600 text-center mb-4">
                    Join our community to access exclusive job opportunities and connect with employers.
                </p>
                <Button className="w-full bg-purple-300 text-slate-700 px-4 py-2 rounded-md">Sign In</Button>
            </SignedOut>
        </div>
    )
}