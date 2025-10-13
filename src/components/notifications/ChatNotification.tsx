import Image from 'next/image'
import React from 'react'
interface chatProps{
    chatNoti:boolean
}
function ChatNotification({chatNoti}:chatProps) {
  return (
    <div className={`${!chatNoti&&'hidden'} absolute w-[280px] top-14 -left-[200px] shadow-2xl rounded-md bg-white divide-y divide-gray-200 z-20`}>
            <div className='flex items-center gap-2 py-2 px-2 cursor-pointer hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-300'>
                <Image src='/profile.jpg' width={32} height={32} alt='profile' className=' rounded-full object-center'/>
                <span className='flex items-center gap-1 flex-wrap'>
                    <p className='text-[14px]'>You have new Massage from <span className=' font-semibold'>Rakib hossain</span></p>
                    <p className='text-[12px] text-[rgba(0,0,0,0.3)]'>1 hours ago</p>
                </span>
            </div>
            <div className='flex items-center gap-2 py-2 px-2 cursor-pointer hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-300'>
                <Image src='/profile.jpg' width={32} height={32} alt='profile' className=' rounded-full object-center'/>
                <span className='flex items-center gap-1 flex-wrap'>
                    <p className='text-[14px]'>You have new Massage from <span className=' font-semibold'>Rakib hossain</span></p>
                    <p className='text-[12px] text-[rgba(0,0,0,0.3)]'>1 hours ago</p>
                </span>
            </div>
            
            
        </div>
  )
}

export default ChatNotification