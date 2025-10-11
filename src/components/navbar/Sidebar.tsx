
import Link from 'next/link'
import React from 'react'
import Logo from './icons/Logo'

function Sidebar() {
    return (
        <aside className='w-full max-w-[300px] absolute top-22 z-50 bg-white h-screen border lg:sticky lg:top-0 lg:left-0 py-5 px-8 lg:border-r border-gray-200'>
           <div>
            <Link href='/'>
            <Logo color='#333232'/>
            </Link>
           </div>
        </aside>
    )
}

export default Sidebar