import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Sidebar() {
    return (
        <aside className='w-full max-w-[300px] absolute top-22 z-50 bg-white h-screen border lg:sticky lg:top-0 lg:left-0 py-5 px-8 lg:border-r border-gray-200'>
           <div>
            <Link href='/'>
            <Image src='/svg/logo.svg' width={120} height={80} alt='logo'/></Link>
           </div>
        </aside>
    )
}

export default Sidebar