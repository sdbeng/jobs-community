//write a Guest component that renders a welcome user message if user is not signed in
//and a sign in button if user is not signed in

import { Button } from "./ui/button";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Guest() {
    return (
        <div className="flex flex-col justify-center items-center bg-white mr-6 rounded-lg border py-4">
            <Avatar className="h-16 w-16 mb-5">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>
                    <p className="bg-gray-100 " >Welcome Guest. If you like to get a membership of Jobs Community, please sign up.</p>
                </AvatarFallback>
            </Avatar>
        </div>
    )
}