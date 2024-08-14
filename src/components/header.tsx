import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Briefcase, HomeIcon, MessagesSquare, SearchIcon, UsersIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Header = () => {
  return (
    <div className='flex'>
        {/* Image logo */}
        <Image src='/jc_logo.png' alt='jobs communitylogo' width={40} height={40} className='rounded-lg '/>
        <div className='flex-1 '>
            {/* search form */}
            <form className='flex items-center space-x-1 bg-gray-100 p-2 rounded-md flex-1 mx-2 max-w-96 '>
                <SearchIcon className='h-4 text-gray-600 '/>
                <input type='text' placeholder='Search for jobs' className='bg-transparent outline-none flex-1'/>
            </form>
        </div>
        <div className='flex items-center space-x-4 px-6'>
            {/* icons w/ Links */}
            <Link href='/' className='icon'>
            <HomeIcon className='h-6 text-gray-600 cursor-pointer'/>
            <p>Home</p>
            </Link>
            <Link href='/' className='icon hidden md:flex '>
            <UsersIcon className='h-6 text-gray-600 cursor-pointer'/>
            <p>Network</p>
            </Link>
            <Link href='/' className='icon hidden md:flex'>
            <Briefcase className='h-6 text-gray-600 cursor-pointer'/>
            <p>Jobs</p>
            </Link>
            <Link href="" className="icon">
            <MessagesSquare className="h-5" />
            <p>Messaging</p>
            </Link>

            <SignedIn>
            <UserButton />
            </SignedIn>

            <SignedOut>
            <Button asChild >
                <SignInButton />
            </Button>
            </SignedOut>
        </div>
    </div>
  )
}

export default Header