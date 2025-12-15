import React from 'react'
import { FormInputType } from '@/types/formInputType'
function FormInput({label,type,placeholder,name,value,onChange,className
  , readOnly}:FormInputType) {
  return (
   
            <div className="w-full text-gray-800 dark:text-gray-200">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 sm:mb-2">{label}</label>
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
                  invalid:border-red-500 invalid:ring-red-500
                  ${readOnly ? 'bg-gray-50 dark:bg-gray-800 cursor-not-allowed' : ''}`}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                readOnly={readOnly}
                
              />
            </div>
           
  )
}

export default FormInput