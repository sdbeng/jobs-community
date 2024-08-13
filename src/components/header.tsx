import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex'>
        {/* Image logo */}
        <Image src='/jc_logo.png' alt='jobs communitylogo' width={40} height={40} className='rounded-lg '/>
        <div>
            {/* search form */}
        </div>
        <div>
            {/* icons w/ Links */}
        </div>
    </div>
  )
}

export default Header