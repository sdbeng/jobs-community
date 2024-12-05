import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Briefcase, HomeIcon, MessagesSquare, SearchIcon, UsersIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { checkUser } from '@/lib/checkUser'

const Header = async () => {
    const user = await checkUser();
        
  return (
    <div className='flex items-center justify-between p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
        {/* Image logo */}
        <div className='flex items-center space-x-4'>
            <Image src='/space_x.png' alt='jobs community logo' width={72} height={72} className='rounded-full' />
            <form className='flex items-center space-x-2 bg-gray-100 p-2 rounded-md'>
                <SearchIcon className='h-5 text-gray-600' />
                <input type='text' placeholder='Search for jobs' className='bg-transparent outline-none flex-1' />
            </form>
        </div>
        <div className='flex items-center space-x-6'>
            {/* icons w/ Links */}
            <Link href='/' className='flex flex-col items-center'>
                <HomeIcon className='h-6 text-gray-600 cursor-pointer' />
                <p className='text-sm'>Home</p>
            </Link>
            <Link href='/network' className='flex flex-col items-center hidden md:flex'>
                <UsersIcon className='h-6 text-gray-600 cursor-pointer' />
                <p className='text-sm'>Network</p>
            </Link>
            <Link href='/jobs' className='flex flex-col items-center hidden md:flex'>
                <Briefcase className='h-6 text-gray-600 cursor-pointer' />
                <p className='text-sm'>Jobs</p>
            </Link>
            <Link href='/chat' className='flex flex-col items-center'>
                <MessagesSquare className='h-6 text-gray-600 cursor-pointer' />
                <p className='text-sm'>Public Services</p>
            </Link>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <Button asChild>
                    <SignInButton />
                </Button>
            </SignedOut>
        </div>
    </div>
  )
}

export default Header