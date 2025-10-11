'use client'
import Link from 'next/link'
import React from 'react'
import Logo from './icons/Logo'
import { useAppSelector } from '@/redux/hooks'

function Sidebar() {
        const {isOpen} = useAppSelector(state=>state.sidebar)
    
    return (
        <aside className={`${isOpen?'w-full max-w-[300px] py-5 px-8 ':'w-0 max-w-0'}  transition-all duration-300 fixed top-22 z-50 bg-white h-screen border
         lg:sticky lg:top-0 lg:left-0 lg:border-r border-gray-200 overflow-y-auto`}>
           <div>
            <Link href='/'>
            <Logo color='#333232'/>
            </Link>
           </div>
        </aside>
    )
}

export default Sidebar