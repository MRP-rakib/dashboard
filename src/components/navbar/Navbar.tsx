'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleSidebar } from '@/redux/sidebarSlice';
import Container from '@/utils/Container'
import { IoIosMenu } from "react-icons/io";
import { CiDark } from "react-icons/ci";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import Image from 'next/image';
import { useEffect} from 'react';
import { toggleTheme } from '@/redux/darkmodeSlice';
import { CiLight } from "react-icons/ci";
function Navbar() {
    const dispatch = useAppDispatch()
     const {dark} = useAppSelector(state=>state.darkmode)

     useEffect(()=>{
        if(dark){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
     },[dark])

    return (
        <nav className='sticky top-0 left-0 w-full py-4 border-b border-gray-200 dark:border-gray-600 z-50 bg-white dark:bg-[#161C2D]'>
            <Container>
                <div className='flex items-center justify-between'>
                    <button onClick={() => dispatch(toggleSidebar())} className='text-[18px] text-primary hover:text-white
                    bg-[#EBF0FD] dark:bg-[#1F2F48] hover:bg-[#396CF0] flex items-center justify-center w-8 h-8 rounded-full
                     transition-colors duration-300 cursor-pointer'><IoIosMenu />
                    </button>
                    <div className='flex items-center gap-4 lg:gap-6'>
                        <span onClick={()=>dispatch(toggleTheme())} className='text-[18px] text-primary hover:text-white
                    bg-[#EBF0FD] dark:bg-[#1F2F48] hover:bg-[#396CF0] flex items-center justify-center w-7.5 h-7.5 lg:w-9  lg:h-9 rounded-full
                     transition-colors duration-300 cursor-pointer'>{dark?(<CiLight />):(<CiDark />)}
                        </span>
                        <span className='text-[18px] text-primary hover:text-white
                    bg-[#EBF0FD] dark:bg-[#1F2F48] hover:bg-[#396CF0] flex items-center justify-center w-7.5 h-7.5 lg:w-9  lg:h-9 rounded-full
                     transition-colors duration-300 cursor-pointer'><IoChatbubblesOutline />
                        </span>
                        <span className='text-[18px] text-primary hover:text-white
                    bg-[#EBF0FD] dark:bg-[#1F2F48] hover:bg-[#396CF0] flex items-center justify-center w-7.5 h-7.5 lg:w-9  lg:h-9 rounded-full
                     transition-colors duration-300 cursor-pointer'><MdOutlineEmail />
                        </span>
                        <span className='text-[18px] text-primary hover:text-white
                    bg-[#EBF0FD] dark:bg-[#1F2F48] hover:bg-[#396CF0] flex items-center justify-center w-7.5 h-7.5 lg:w-9  lg:h-9 rounded-full
                     transition-colors duration-300 cursor-pointer overflow-hidden'>
                        <Image src='/profile.jpg' width={36} height={36} alt='profile'/>
                        </span>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar