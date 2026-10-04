import Image from 'next/image'
import React from 'react'

function Post() {
    return (
        <div className='p-10'>
            <div >
                <div className='flex justify-between'>
                    <div className='flex flex-raw items-center gap-4'>
                        <div className=' p-1 rounded-full border-3 border-amber-900'>
                            <Image src='/php.png' height={40} width={40} />
                        </div>
                        <div>
                            <p>your stories</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src='/More.png' height={20} width={20} />
                </div>
            </div>
            <div>
                <Image src='/1.png' height={614} width={614} />
            </div>
        </div>
    )
}

export default Post