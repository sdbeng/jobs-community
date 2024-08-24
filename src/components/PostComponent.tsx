"use client"

import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge, Trash2 } from "lucide-react";
import Image from "next/image";
import { PostData } from "@/app/types/postType";
import { Button } from "./ui/button";
import deletePostAction from "@/app/actions/deletePostAction";
import { toast } from "react-toastify";

interface PostComponentProps {
    post: PostData;
}

const PostComponent: React.FC<PostComponentProps> = ({ post }) => {
    const {user} = useUser();
    const isAuthor = user?.id === post.author.id?.toString();

    return (
        <div className="p-3 bg-white rounded-lg border">
            <div className="flex space-x-2 p-4">
                <div>
                <Avatar>
                    <AvatarImage src={post.author.imageUrl || '/default-user-avatar.svg'} alt={post.author.name} />
                    <AvatarFallback>
                        {post.author.name.charAt(0).toUpperCase()}
                        
                    </AvatarFallback>
                </Avatar>
                </div>
                <div className="flex justify-between flex-1">
                    <div className="font-semibold">
                        <p className="text-lg font-semibold">{post.author.name}{" "}</p>
                        {isAuthor && (<Badge className="ml-2">Author</Badge>)}
                    </div>
                    <p className="text-xs text-gray-400">
                        @{post.author.name}
                        {post.author.name}-{post.author.id.toString().slice(-4)}
                    </p>
                    {/* will install ReactTimeago lib later */}
                    <p className="text-sm text-gray-600">{post.createdAt.toDateString()}</p>
                </div>
                {/* trash btn whith an onClick callback to delete post */}
                {/* {isAuthor && ( */}
                    <Button 
                    variant="outline"
                    onClick={() => {
                        const promise = deletePostAction(post.id);
                        toast.promise(promise, {
                            success: 'Post deleted successfully',
                            error: 'An error occurred while deleting post!!'
                        });
                    }}
                    >                        
                        <Trash2 />                        
                    </Button>
                {/* )} */}
            </div>
           
            <div>
                <p className="px-4 pb-2 mt-2">{post.text}</p>
                {/* {if image is iploaded place it here */}
                
                    {/* <Image 
                    src={post.author.imageUrl}
                    alt="post image"
                    //  className="w-full mx-auto"                    
                    width={250} height={450}
                    /> */}
                
            </div>
            {/* will render post options component in later branch */}
        </div>
    );
}

export default PostComponent;