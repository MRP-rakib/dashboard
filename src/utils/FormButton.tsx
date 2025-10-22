import { BtnProps } from '@/types/btnPropsType'
import React from 'react'

function FormButton({ btnName, loading }: BtnProps) {
    return (
        <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-medium 
            rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer
             focus:ring-blue-500"
        >
           {loading?"Registering...":btnName}
            
        </button>
    )
}

export default FormButton