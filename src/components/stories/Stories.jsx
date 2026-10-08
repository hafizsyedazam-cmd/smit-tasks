import { stories } from '@/lib/stories'
import Image from 'next/image'
import React from 'react'

function Stories() {
  return (
    <div className='flex gap-4 p-4 overflow-x-auto no-scrollbar max-w-full border-b border-gray-800 bg-black text-white'>
      {/* Your Story */}
      <div className='flex flex-col items-center shrink-0 cursor-pointer'>
        <div className='p-[2px] rounded-full border-2 border-amber-900'>
          <Image src='/php.png' height={56} width={56} alt='your story' className='rounded-full object-cover' />
        </div>
        <p className='text-xs mt-1 text-gray-300 w-16 truncate text-center'>your story</p>
      </div>

      {/* Dynamic Stories */}
      {stories?.map((item) => (
        <div className='flex flex-col items-center shrink-0 cursor-pointer' key={item.id}>
          <div className='p-[2px] rounded-full border-2 border-red-500'>
            <Image src={item.profileImage || '/php.png'} alt={item.username} height={56} width={56} className='rounded-full object-cover' />
          </div>
          <p className='text-xs mt-1 text-gray-300 w-16 truncate text-center'>{item.username}</p>
        </div>
      ))}
    </div>
  )
}

export default Stories