import Image from 'next/image'
import React from 'react'

function Nav() {
    return (
        <div className='flex justify-between items-center px-10 pb-2 pt-5.5 border-b-[#DBDBDB] border-b-1'>
            <div>
                <Image src='/Logo (1).png' alt='logo' height={29} width={103} />
            </div>
            <div>
                <input type="text" className='border-1 px-2 border-[#DBDBDB] rounded-sm placeholder:text-center' placeholder='Search' />
            </div>
            <div className='flex gap-3.5'>
                <div>
                    <Image src='/Home-fill.png' alt='logo' height={22} width={22} />
                </div>
                <div>
                    <Image src='/Messenger.png' alt='logo' height={22} width={22} />
                </div>
                <div>
                    <Image src='/NewPosts.png' alt='logo' height={22} width={22} />
                </div>
                <div>
                    <Image src='/FindPeople.png' alt='logo' height={22} width={22} />
                </div>
                <div>
                    <Image src='/Lİke.png' alt='logo' height={22} width={22} />
                </div>
                <div>
                    <Image src='/Profile.png' alt='logo' height={22} width={22} />
                </div>
            </div>
        </div>
    )
}

export default Nav