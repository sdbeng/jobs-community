'use client'
import React from 'react'
import { useUser } from '@clerk/nextjs';
import { Avatar, AvatarImage } from './ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';

export default function PostForm() {
    const {user} = useUser();

  return (
    <div>
        <form action="">
            <div className='flex items-center space-x-2'>
                <Avatar>
                    <AvatarImage src={user?.imageUrl} />
                    <AvatarFallback>
                        {user?.firstName?.charAt(0).toUpperCase()}
                        {user?.lastName?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
                <input 
                    type="text" 
                    name='postInput'
                    placeholder="start a new post"
                    className="flex-1 px-4 py-3 border rounded-full outline-none"
                />
                <input type='file' name='image' id='image' className='hidden'/>
                <label htmlFor='image' className='p-2 bg-blue-500 text-white rounded-full cursor-pointer'>
                    <svg
                        className="h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 13h4v-3h3V9h-5V6l-5 5 5 5v-3z" />
                    </svg>
                </label>
                <button
                    type='submit'
                    className='p-2 bg-blue-500 text-white rounded-full'>Post
                </button>
            </div>
        </form>
    </div>
  )
}
