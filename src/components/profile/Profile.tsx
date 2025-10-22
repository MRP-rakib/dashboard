'use client'
import React, { useEffect } from 'react'
import { Settings, LogOut } from "lucide-react";
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchProfile, logout } from '@/redux/feature/auth/profileSlice';
import Link from 'next/link';

interface profileProps{
    profile:boolean,
    
}
function Profile({profile}:profileProps) {
   const dispatch = useAppDispatch()
   const {user} = useAppSelector(state=>state.profile)   
   
   useEffect(()=>{
     dispatch(fetchProfile())
   },[dispatch])

   return (
    <div 
      className={`${!profile && 'hidden'} 
        absolute top-14 right-4 sm:right-6 lg:-left-[200px] 
        w-[280px] sm:w-[320px] lg:w-[300px]
        bg-white/95 dark:bg-dark/95
        shadow-lg hover:shadow-xl
        rounded-xl border border-gray-200/50 dark:border-gray-700/50 
        overflow-hidden
        transform transition-all duration-200
        backdrop-blur-sm
      `}
    >
      {/* Profile Header */}
      <div className="flex items-center gap-4 p-4 sm:p-5 border-b border-gray-200/80 dark:border-gray-700/80">
        <div className="relative">
          <Image
            src="/profile.jpg"
            alt="User avatar"
            width={48}
            height={48}
            className="rounded-full ring-2 ring-blue-500/20 dark:ring-blue-400/20"
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
        </div>
        <div className="flex-1">
          <h2 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white capitalize">
            {user?.firstname} {user?.lastname}
          </h2>
          <p className="text-xs sm:text-sm text-blue-500 dark:text-blue-400 font-medium">
            {user?.role || 'User'}
          </p>
        </div>
      </div>

      {/* Menu Items */}
      <ul className="p-2 sm:p-3 space-y-1">
        <li className="flex items-center gap-3 px-3 py-2.5 rounded-lg
          hover:bg-gray-100 dark:hover:bg-gray-800 
          cursor-pointer text-sm text-gray-700 dark:text-gray-200
          transition-colors duration-200">
          <Link href='*'>
          <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400" />
          <span className="font-medium">Profile Settings</span>
          </Link>
        </li>
        <li 
          onClick={() => dispatch(logout())} 
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg
            hover:bg-red-50 dark:hover:bg-red-900/20
            cursor-pointer text-sm text-red-600 dark:text-red-400
            transition-colors duration-200"
        >
          <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-medium">Logout</span>
        </li>
      </ul>
    </div>
  );
  
}

export default Profile