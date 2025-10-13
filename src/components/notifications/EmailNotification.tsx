import Image from 'next/image'
import React from 'react'
interface emailProps {
    emailNoti:boolean
}
function EmailNotification({emailNoti}:emailProps) {
  return (
    <div className={`${!emailNoti&&'hidden'} absolute w-64 overflow-hidden top-14 -right-4 md:right-0 shadow-2xl rounded-md bg-white dark:bg-dark divide-y divide-gray-200 dark:divide-gray-600 z-20`}>
        <div className='flex items-center gap-2 py-2 px-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white transition-colors duration-300'>
            <Image src='/profile.jpg' width={32} height={32} alt='profile' className=' rounded-full object-center'/>
            <span className='flex items-center gap-1 flex-wrap'>
                <p className='text-[14px]'>You have new Email from <span className=' font-semibold'>Rakib hossain</span></p>
                <p className='text-[12px] text-[rgba(0,0,0,0.3)] dark:text-gray-100'>1 hours ago</p>
            </span>
        </div>
        <div className='flex items-center gap-2 py-2 px-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white transition-colors duration-300'>
            <Image src='/profile.jpg' width={32} height={32} alt='profile' className=' rounded-full object-center'/>
            <span className='flex items-center gap-1 flex-wrap'>
                <p className='text-[14px]'>You have new Email from <span className=' font-semibold'>Rakib hossain</span></p>
                <p className='text-[12px] text-[rgba(0,0,0,0.3)] dark:text-gray-100'>1 hours ago</p>
            </span>
        </div>
        
       
    </div>
  )
}

export default EmailNotification