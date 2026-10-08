import Nav from '@/components/navbar/Nav'
import Post from '@/components/post/Post'
import Stories from '@/components/stories/Stories'
import Suggestions from '@/components/suggestions/Suggestions'
import React from 'react'

function page() {
  return (
    <div className='bg-black text-white min-h-screen'>
      <Nav />
      
      {/* Perfect Instagram Layout Container */}
      <div className='max-w-[935px] mx-auto px-4 pt-6 grid grid-cols-1 lg:grid-cols-3 gap-8'>
        
        {/* Left Column: Feed (Stories + 5 Posts) */}
        <div className='lg:col-span-2 max-w-[470px] w-full mx-auto'>
          <Stories />
          <Post />
        </div>

        {/* Right Column: Suggestions Sidebar */}
        <div className='hidden lg:block w-[320px]'>
          <div className='sticky top-6'>
            <Suggestions />
          </div>
        </div>

      </div>
    </div>
  )
}

export default page