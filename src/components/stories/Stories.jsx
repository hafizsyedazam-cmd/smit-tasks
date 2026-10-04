import { stories } from '@/lib/stories'
import Image from 'next/image'
import React from 'react'

function Stories() {
    return (
        <div className='flex p-10 gap-5'>
            <div className='flex flex-col items-center'>
                <div className=' p-1 rounded-full border-4 border-amber-900'>
                    <Image src='/php.png' height={80} width={80} />
                </div>
                <div>
                    <p>your stories</p>
                </div>
            </div>

            {
                stories.map((item) => (
                    <div className='flex flex-col items-center' key={item.id}>
                        <div className=' p-1 rounded-full border-4 border-amber-900'>
                            <Image src={item.profileImage} className='rounded-full' height={80} width={80}  />
                        </div>
                        <div>
                            <p>{item.username}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Stories