import React from 'react'
import { BtnProps } from '@/types/btnPropsType'
function FacebookBtn({btnName}:BtnProps) {
  return (
    <button 
      className="w-full sm:flex-1 py-2.5 sm:py-3 px-4 sm:px-6 
        bg-[#1877F2] hover:bg-[#0c64d8] active:bg-[#0a5bc4]
        text-white text-sm sm:text-base font-medium 
        rounded-md transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1877F2]
        shadow-sm hover:shadow-md active:shadow-inner
        flex items-center justify-center gap-2"
    >
      <svg 
        className="w-5 h-5 sm:w-6 sm:h-6" 
        fill="currentColor" 
        viewBox="0 0 24 24" 
        aria-hidden="true"
      >
        <path 
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        />
      </svg>
      <span className="whitespace-nowrap">{btnName}</span>
    </button>
  )
}

export default FacebookBtn