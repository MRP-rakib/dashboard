'use client'
import Link from 'next/link'
import React from 'react'
import { useAppSelector } from '@/redux/hooks'
import Image from 'next/image'

function Sidebar() {
        const {isOpen} = useAppSelector(state=>state.sidebar)
        const {dark} = useAppSelector(state=>state.darkmode)
    
    return (
        <aside className={`${isOpen?'lg:border-r w-full max-w-[250px]  md:max-w-[300px] ':'w-0 max-w-0'}  transition-all duration-300 fixed top-16 z-50
         bg-white dark:bg-[#161C2D] h-screen
         lg:sticky lg:top-0 left-0  border-gray-200 dark:border-gray-600 overflow-y-auto`}>
           <div className='py-6 pl-6 lg:border-b lg:border-gray-200 dark:border-gray-600'>
            <Link href='/'>
            {dark?(
                <Image src='/logo-light.png' width={110} height={60} alt='logo'/>
            ):(
                <Image src='/logo-dark.png' width={110} height={60} alt='logo'/>
            )}
            </Link>
           </div>
        </aside>
    )
}

export default Sidebar