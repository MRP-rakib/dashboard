
import Link from 'next/link';
import React from 'react'
interface CheckboxType {
    label: string;
    name?: string;
    type?: string;
    value: string;
    placeholder?: string;
    className?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function FormCheckBox({label,name,type,value,onChange}:CheckboxType) {
    return (
        <div className="flex items-center space-x-2 sm:space-x-3">
            <input 
                type={type} 
                name={name} 
                value={value} 
                onChange={onChange} 
                className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer" 
            />
            
            <label className="flex items-center gap-1 sm:gap-2 text-gray-700 select-none">
                <p className="text-xs sm:text-sm">I Accept</p>
                <Link href='/' className="hover:opacity-90 transition-opacity">
                    <p className='text-xs sm:text-sm text-blue-500 font-semibold hover:text-blue-600'>{label}</p>
                </Link>
            </label>
        </div>
    )
}

export default FormCheckBox