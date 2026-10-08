import Image from 'next/image'
import React from 'react'
import { Heart, Send, Bookmark, MoreHorizontal, ChevronRight, CheckCircle2 } from 'lucide-react'
import { posts } from '@/lib/post'

function Post() {
  return (
    <div className='w-full space-y-6 mt-4'>
      {posts.map((post) => (
        <div key={post.id} className='w-full border-b border-gray-800 pb-4 text-white font-sans'>
          
          {/* Header */}
          <div className='flex justify-between items-center py-2 px-1'>
            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 rounded-full overflow-hidden relative border border-gray-700'>
                <Image src={post.userImage} alt={post.username} fill className='object-cover' />
              </div>
              <div className='flex flex-col text-xs leading-tight'>
                <div className='flex items-center gap-1 font-semibold'>
                  <span>{post.username}</span>
                  {post.isVerified && (
                    <CheckCircle2 className='w-3.5 h-3.5 text-blue-500 fill-blue-500 stroke-black' />
                  )}
                </div>
                {post.isAd && <span className='text-gray-400 text-[11px]'>Ad</span>}
              </div>
            </div>
            <button className='text-gray-300 hover:text-white'>
              <MoreHorizontal className='w-5 h-5' />
            </button>
          </div>

          {/* Main Post Image */}
          <div className='rounded-md overflow-hidden border border-gray-800 bg-[#121212] relative w-full aspect-square'>
            <Image src={post.postImage} alt='Post' fill className='object-cover' />
          </div>

          {/* Ad CTA Banner (Only for Ads) */}
          {post.isAd && (
            <div className='bg-[#182232] px-4 py-2.5 flex justify-between items-center cursor-pointer hover:bg-[#1f2d42] transition rounded-b-md'>
              <span className='text-sm font-semibold text-white'>Sign up</span>
              <ChevronRight className='w-4 h-4 text-gray-300' />
            </div>
          )}

          {/* Actions */}
          <div className='flex justify-between items-center pt-3 px-1'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-1.5 cursor-pointer'>
                <Heart className='w-6 h-6 hover:text-gray-400 transition' />
                <span className='text-xs font-semibold'>{post.likes}</span>
              </div>
              <Send className='w-6 h-6 cursor-pointer hover:text-gray-400 transition' />
            </div>
            <Bookmark className='w-6 h-6 cursor-pointer hover:text-gray-400 transition' />
          </div>

          {/* Caption */}
          <div className='px-1 pt-2 text-xs space-y-1 leading-snug'>
            <p>
              <span className='font-semibold mr-1.5'>{post.username}</span>
              <span className='text-gray-200'>{post.caption}</span>
            </p>
          </div>

        </div>
      ))}
    </div>
  )
}

export default Post