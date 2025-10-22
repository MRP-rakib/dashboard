import React from 'react'
import { FormInputType } from '@/types/formInputType'
function FormInput({label,type,placeholder,name,value,onChange,className}:FormInputType) {
  return (
   
            <div className="w-full">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">{label} *</label>
              <input
                type={type}
                className={`${className} w-full px-3 sm:px-4 py-2 sm:py-2.5 
                  text-sm sm:text-base
                  border border-gray-300 
                  rounded-md shadow-sm
                  placeholder:text-gray-400 placeholder:text-xs sm:placeholder:text-sm
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  hover:border-blue-400 transition-colors
                  disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200
                  invalid:border-red-500 invalid:ring-red-500`}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                
              />
            </div>
           
  )
}

export default FormInput