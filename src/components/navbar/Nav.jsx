import Image from 'next/image'
import React from 'react'

function Nav() {
    return (
        <div className='flex justify-between items-center px-10 pb-3 pt-4 border-b border-gray-800 bg-black text-white sticky top-0 z-50'>
            {/* Logo */}
            <div>
                <Image src='/Logo (1).png' alt='logo' height={29} width={103} className='invert brightness-200' />
            </div>

            {/* Search Input */}
            <div>
                <input 
                    type="text" 
                    className='bg-[#262626] border border-gray-700 text-white text-sm rounded-md px-3 py-1.5 focus:outline-none placeholder:text-gray-400 placeholder:text-center w-64' 
                    placeholder='Search' 
                />
            </div>

            {/* Navigation Icons */}
            <div className='flex gap-5 items-center'>
                <div className='cursor-pointer hover:opacity-70 transition'>
                    <Image src='/Home-fill.png' alt='home' height={22} width={22} className='invert' />
                </div>
                <div className='cursor-pointer hover:opacity-70 transition'>
                    <Image src='/Messenger.png' alt='messenger' height={22} width={22} className='invert' />
                </div>
                <div className='cursor-pointer hover:opacity-70 transition'>
                    <Image src='/NewPosts.png' alt='new post' height={22} width={22} className='invert' />
                </div>
                <div className='cursor-pointer hover:opacity-70 transition'>
                    <Image src='/FindPeople.png' alt='explore' height={22} width={22} className='invert' />
                </div>
                <div className='cursor-pointer hover:opacity-70 transition'>
                    <Image src='/Lİke.png' alt='notifications' height={22} width={22} className='invert' />
                </div>
                <div className='cursor-pointer hover:opacity-70 transition rounded-full overflow-hidden border border-gray-700'>
                    <Image src='/Profile.png' alt='profile' height={24} width={24} className='object-cover' />
                </div>
            </div>
        </div>
    )
}

export default Nav