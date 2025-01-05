'use client'
import React, { useRef } from 'react'
import { useUser } from '@clerk/nextjs';
import { Avatar, AvatarImage } from './ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';
import addPost from '@/app/actions/addPost';
import { toast } from 'react-toastify';

export default function PostForm() {
    const ref = useRef<HTMLFormElement>(null);
    const {user} = useUser();

    const handleAddPostAction = async(formData: FormData) => {
        try {
            const {data, error} = await addPost(formData) as { data: any, error: any };
            
            if(error) {
                console.error('error:', error);            
                toast.error(error);
            } else {                       
                toast.success('Post added successfully');
                ref.current?.reset();
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to add post');
        }
    }

    return (
        <div className='mb-4'>
            <form
             ref={ref}
             action={handleAddPostAction}
             className='p-4 bg-slate-50 rounded-lg shadow-sm border border-slate-100'>
                <div className='flex items-center gap-3'>
                    <Avatar className="h-10 w-10">
                        <AvatarImage src={user?.imageUrl} />
                        <AvatarFallback className="bg-slate-200">
                            {user?.firstName?.charAt(0).toUpperCase()}
                            {user?.lastName?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <div className='flex-1'>
                        <input 
                            type="text"
                            name='text'
                            placeholder="What's on your mind?"
                            className="w-full px-4 py-2 bg-white border border-slate-200 rounded-full outline-none focus:border-blue-400 transition-colors"
                        />
                    </div>
                    <button
                        type='submit'
                        className='px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors'
                    >
                        Post
                    </button>
                </div>
            </form>
            <hr className="mt-4 border-slate-200" />
        </div>
    )
}
