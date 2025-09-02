import React, { ReactNode } from 'react'
interface ContainerProps{
    children?: ReactNode
}
function Container({children}:ContainerProps) {
  return (
    <div className='lg:w-[90%] mx-auto '>{children}</div>
  )
}

export default Container