import React from 'react'
interface ContainerProps {
    children:React.ReactNode
}
function Container({children}:ContainerProps) {
  return (
    <div className={`px-6 md:px-8 lg:px-16 max-w-7xl mx-auto`}>
        {children}
    </div>
  )
}

export default Container