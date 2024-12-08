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
                <input type='text' placeholder='Search for projects' className='bg-transparent outline-none flex-1' />
            </form>
        </div>
        <div className='flex items-center space-x-6'>
            {/* icons w/ Links */}
            <Link href='/' className='flex flex-col items-center'>
                <HomeIcon className='h-6 text-white cursor-pointer' />
                <p className='text-sm text-white'>Home</p>
            </Link>
            <Link href='/dev' className='flex flex-col items-center md:flex'>
                <UsersIcon className='h-6 text-white cursor-pointer' />
                <p className='text-sm text-white'>Developers</p>
            </Link>
            <Link href='/projects' className='flex flex-col items-center md:flex'>
                <Briefcase className='h-6 text-white cursor-pointer' />
                <p className='text-sm text-white'>Projects</p>
            </Link>
            <Link href='/chat' className='flex flex-col items-center'>
                <MessagesSquare className='h-6 text-white cursor-pointer' />
                <p className='text-sm text-white'>Public Services</p>
            </Link>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <Button asChild className='bg-purple-300 text-slate-700 px-4 py-2 rounded-md'>

                    {/* div-wrap SignInButton avoids runtime error */}
                    <div>
                        <SignInButton />
                    </div>
                </Button>
            </SignedOut>
        </div>
    </div>
  )
}

export default Header