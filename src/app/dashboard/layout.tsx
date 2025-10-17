import Navbar from "@/components/navbar/Navbar"
import Sidebar from "@/components/navbar/Sidebar"
import { ReactNode } from "react"

interface componentsProps{
    children:ReactNode
}
function layout({children}:componentsProps) {
  return (
    <div className="flex items-start">
        <Sidebar />
          <div className="flex-1">
            <Navbar />
            {children}
          </div>
    </div>
  )
}

export default layout