import { BtnProps } from '@/types/btnPropsType'
import React from 'react'

function FormButton({ btnName, loading }: BtnProps) {
    return (
        <button
            type="submit"
            className="w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-blue-600 text-white text-sm sm:text-base font-medium 
            rounded-md hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            disabled:opacity-70 disabled:cursor-not-allowed
            shadow-sm hover:shadow-md active:shadow-inner"
            disabled={loading}
        >
            {loading ? (
                <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    <span>Processing...</span>
                </span>
            ) : (
                btnName
            )}
        </button>
    )
}

export default FormButton