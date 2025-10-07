import React, { ReactHTMLElement } from 'react'
interface ContainerProps {
    children:React.ReactNode
}
function Container({children}:ContainerProps) {
  return (
    <div className={`px-4 md:px-6 lg:px-10 max-w-7xl`}>
        {children}
    </div>
  )
}

export default Container