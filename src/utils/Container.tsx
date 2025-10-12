'use client'
import { useAppSelector } from '@/redux/hooks'
import React from 'react'
interface ContainerProps {
    children:React.ReactNode
}
function Container({children}:ContainerProps) {
  const {isOpen} =useAppSelector(state=>state.sidebar)
  return (
    <div className={`px-6 md:px-8 ${isOpen?'lg:px-16':'lg:px-6'} w-full mx-auto`}>
        {children}
    </div>
  )
}

export default Container