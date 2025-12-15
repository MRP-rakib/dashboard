'use client'
import Link from 'next/link'
import { useAppSelector } from '@/redux/hooks'
import Image from 'next/image'
import { MdOutlineDashboard } from "react-icons/md";
import { CiMedicalCross } from "react-icons/ci";
import { usePathname } from 'next/navigation';
import { IoPersonOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdApps } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { LiaPagerSolid } from "react-icons/lia";


function Sidebar() {
        const {isOpen} = useAppSelector(state=>state.sidebar)
        const {dark} = useAppSelector(state=>state.darkmode)
        const pathName = usePathname()
    
    return (
        <aside className={`${isOpen?'border-r w-full max-w-[250px]  md:max-w-[300px] ':'w-0 max-w-0'}  transition-all duration-300 fixed top-16 z-50
         bg-white dark:bg-[#161C2D] h-screen
         lg:sticky lg:top-0 left-0  border-gray-200 dark:border-gray-600 overflow-y-auto`}>
          <div className=''>
             <div className='py-6 pl-6 lg:border-b lg:border-gray-200 dark:border-gray-600'>
            <Link href='/'>
            {dark?(
                <Image src='/image/logo-light.png' width={110} height={60} alt='logo' className=' object-fill' />
            ):(
                <Image src='/image/logo-dark.png' width={110} height={60} alt='logo'  className=' object-fill'/>
            )}
            </Link>
           </div>
           <ul className='flex flex-col gap-7.5 py-6 pl-6'>
              <li>
                <Link href='/dashboard'>
              <span className={`${pathName === '/dashboard'&& 'text-primary dark:text-white'} 
              flex items-center gap-2 text-[14px] lg:text-[16px] dark:text-gray-300 dark:hover:text-white font-medium
                  `}>
                <MdOutlineDashboard /> <p>Dashboard</p></span>
              </Link>
              </li>
              <li>
                <Link href='/dashboard/appointment'>
              <span className={`${pathName === '/dashboard/appointment'&& 'text-primary dark:text-white'} 
              flex items-center gap-2 text-[14px] lg:text-[16px] dark:text-gray-300 dark:hover:text-white font-medium
                  `}>
                <CiMedicalCross /> <p>Appointment</p></span>
              </Link>
              </li>
              <li>
                <Link href='/dashboard/doctors'>
              <span className={`${pathName === '/dashboard/doctors'&& 'text-primary dark:text-white'} 
              flex items-center gap-2 text-[14px] lg:text-[16px] dark:text-gray-300 dark:hover:text-white font-medium
                  `}>
               <IoPersonOutline /> <p>Doctors</p></span>
              </Link>
              </li>
              <li>
                <Link href='/dashboard/patients'>
              <span className={`${pathName === '/dashboard/patients'&& 'text-primary dark:text-white'} 
              flex items-center gap-2 text-[14px] lg:text-[16px] dark:text-gray-300 dark:hover:text-white font-medium
                  `}>
               <IoPersonAddOutline /> <p>Patients</p></span>
              </Link>
              </li>
              <li>
                <Link href='/dashboard/patients'>
              <span className={`${pathName === '/dashboard/patients'&& 'text-primary dark:text-white'} 
              flex items-center gap-2 text-[14px] lg:text-[16px] dark:text-gray-300 dark:hover:text-white font-medium
                  `}>
               <MdApps /> <p>APP</p></span>
              </Link>
              </li>
              <li>
                <Link href='/dashboard/patients'>
              <span className={`${pathName === '/dashboard/patients'&& 'text-primary dark:text-white'} 
              flex items-center gap-2 text-[14px] lg:text-[16px] dark:text-gray-300 dark:hover:text-white font-medium
                  `}>
               <CiShoppingCart /> <p>Phermacy</p></span>
              </Link>
              </li>
              <li>
                <Link href='https://shreethemes.in/doctris/layouts/landing/index-two.html' target='_blank'>
              <span className={` 
              flex items-center gap-2 text-[14px] lg:text-[16px] dark:text-gray-300 dark:hover:text-white font-medium
                  `}>
               <LiaPagerSolid /> <p>Landing Page</p></span>
              </Link>
              </li>
           </ul>
          </div>
        </aside>
    )
}

export default Sidebar