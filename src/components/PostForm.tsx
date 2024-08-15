'use client'
import React, { useRef, useState } from 'react'
import { useUser } from '@clerk/nextjs';
import { Avatar, AvatarImage } from './ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';
import { Button } from './ui/button';
import { ImageIcon, XIcon } from 'lucide-react';
import Image from 'next/image';

export default function PostForm() {
    const ref = useRef<HTMLFormElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const {user} = useUser();

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => setPreview(URL.createObjectURL(file));
        reader.readAsDataURL(file);
    }

  return (
    <div className='mb-2'>
        <form ref={ref} action="" className='p-3 bg-white rounded-lg'>
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
                    placeholder="start a new post..."
                    className="flex-1 px-4 py-3 border rounded-full outline-none"
                    />
                <input 
                    type='file'
                    ref={fileInputRef}
                    name='image'
                    id='image'
                    accept='image/*'
                    className='hidden'
                    onChange={handleImageChange}
                />
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
                    // hidden
                    className='p-2 bg-blue-500 text-white rounded-full'
                    >Post
                </button>
            </div>
            {/* Preview conditional check up here */}
            {preview && (
                <div className='mt-2'>
                    <Image src={preview} alt="preview" className='w-full h-60 object-cover rounded-lg' width={250} height={250} />
                </div>
            )}

            <div className='flex justify-end mt-2 space-x-2'>
                <Button 
                    type='button'
                    onClick={() => fileInputRef.current?.click()}>
                    <ImageIcon className='mr-2' size={16} color="currentColor" />
                    {preview ? 'Change' : 'Add image'}
                </Button>

                {/* add a remove button */}
                {preview && (<Button
                    type="button"
                    onClick={() => setPreview(null)}
                    variant="outline"
                    className="ml-2"
                    >
                    <XIcon className="mr-2" size={16} color="currentColor" />
                    Remove image
                </Button>)}
            </div>
        </form>
        <hr className="mt-2 border-gray-300" />
    </div>
  )
}
