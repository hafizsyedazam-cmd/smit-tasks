import Image from 'next/image'
import React from 'react'

const suggestionsData = [
    {
        id: 1,
        username: 'سردارنی',
        subtext: 'Suggested for you',
        avatar: '/php.png' // Apni image ka path yahan rakhein
    },
    {
        id: 2,
        username: 'Nabeerah Shahid',
        subtext: 'Suggested for you',
        avatar: '/php.png'
    },
    {
        id: 3,
        username: 'kajal _ ll _2040',
        subtext: 'Suggested for you',
        avatar: '/php.png'
    },
    {
        id: 4,
        username: '🕊️',
        subtext: 'Suggested for you',
        avatar: '/php.png'
    },
    {
        id: 5,
        username: 'mayu 🎀',
        subtext: 'Suggested for you',
        avatar: '/php.png'
    }
]

function Suggestions() {
    return (
        <div className='w-80 px-4 py-8 flex flex-col gap-6 text-white'>
            {/* Current User Profile Header */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <div className='w-12 h-12 rounded-full overflow-hidden relative'>
                        <Image 
                            src='/php.png' 
                            alt='Profile' 
                            fill 
                            className='object-cover'
                        />
                    </div>
                    <div className='flex flex-col text-sm'>
                        <span className='font-semibold'>star__lit__heart</span>
                        <span className='text-gray-400 text-xs'>StarLitHeart</span>
                    </div>
                </div>
                <button className='text-blue-500 text-xs font-semibold hover:text-white'>
                    Switch
                </button>
            </div>

            {/* Title Row */}
            <div className='flex justify-between items-center text-sm font-semibold'>
                <span className='text-gray-400'>Suggested for you</span>
                <button className='text-xs font-semibold hover:text-gray-400'>
                    See all
                </button>
            </div>

            {/* Suggestions List */}
            <div className='flex flex-col gap-4'>
                {suggestionsData.map((user) => (
                    <div key={user.id} className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <div className='w-11 h-11 rounded-full overflow-hidden relative'>
                                <Image 
                                    src={user.avatar} 
                                    alt={user.username} 
                                    fill 
                                    className='object-cover'
                                />
                            </div>
                            <div className='flex flex-col text-sm'>
                                <span className='font-semibold'>{user.username}</span>
                                <span className='text-gray-400 text-xs'>{user.subtext}</span>
                            </div>
                        </div>
                        <button className='text-blue-500 text-xs font-semibold hover:text-white'>
                            Follow
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Suggestions