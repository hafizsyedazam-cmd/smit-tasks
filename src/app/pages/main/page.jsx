import Nav from '@/components/navbar/Nav'
import Post from '@/components/post/Post'
import Stories from '@/components/stories/Stories'
import React from 'react'

function page() {
  return (
    <div>
        < Nav />
        <div className='max-w-245'>
            < Stories />
            < Post />
        </div>
    </div>
  )
}

export default page