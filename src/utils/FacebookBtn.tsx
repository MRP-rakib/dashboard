import React from 'react'
import { BtnProps } from '@/types/btnPropsType'
function FacebookBtn({btnName}:BtnProps) {
  return (
    
            <button className="w-1/2 py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              {btnName}
            </button>
           
          
  )
}

export default FacebookBtn