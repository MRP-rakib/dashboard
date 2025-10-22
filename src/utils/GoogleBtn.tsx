import React from 'react'
import { BtnProps } from '@/types/btnPropsType'
function GoogleBtn({btnName}:BtnProps) {
    return (
        <button className="w-1/2 py-2 px-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ml-2">
            {btnName}
        </button>
    )
}

export default GoogleBtn