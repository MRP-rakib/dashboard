'use client'
import { clearMessage,signin } from '@/redux/feature/auth/signinSlice';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { authType } from '@/types/authTypes';
import Link from 'next/link';
import FacebookBtn from '@/utils/FacebookBtn';
import FormButton from '@/utils/FormButton';
import FormInput from '@/utils/FormInput';
import GoogleBtn from '@/utils/GoogleBtn';
import { useRouter } from 'next/navigation';
import  { ChangeEvent, useEffect, useState } from 'react';

const LoginComponent = () => {
  const dispatch = useAppDispatch()
  const {message,loading,error} = useAppSelector(state=>state.login)
    const route = useRouter()
  const [formData,setFormData] = useState<authType>({
    email:'',
    password:''
  })
  const [checked,setChecked] = useState<boolean>(false)

  const handelChange=(e:ChangeEvent<HTMLInputElement>)=>{
   const {name,value} =e.target
   setFormData(prev=>({
    ...prev,[name]:value
   }))
  }
const handelSubmit=(e:React.FormEvent)=>{
  e.preventDefault()
  dispatch(signin({
    email:formData.email,
    password:formData.password,
    remembar:checked
  }))
 
  if(message){
    setFormData({
    email:'',
    password:''
  })
  }

  
}
 useEffect(()=>{
     if(message) {
  route.push('/dashboard')
  dispatch(clearMessage())
}
   },[message,route,dispatch])

  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
          <span className="text-xl md:text-2xl font-bold text-blue-600">Doctris</span>
      <div className="w-full max-w-md p-4 sm:p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
        </div>
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">Login</h2>
        <form className="space-y-4" onSubmit={handelSubmit}>
          <div className='flex flex-col gap-4'>
           
            <FormInput 
              onChange={handelChange} 
              type='email' 
              placeholder='email' 
              value={formData.email} 
              name='email' 
              label='Gmail' 
            />
            <FormInput 
              onChange={handelChange} 
              type='password' 
              placeholder='password' 
              value={formData.password} 
              name='password' 
              label='Password' 
            />
          </div>
          {error && (
            <div className="flex items-center p-3 text-sm rounded-md bg-red-50 border border-red-200">
              <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
              </svg>
              <p className="text-red-700">{error}</p>
            </div>
          )}
          {message && (
            <div className="flex items-center p-3 text-sm rounded-md bg-green-50 border border-green-200">
              <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <p className="text-green-700">{message}</p>
            </div>
          )}
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                name='remembar' 
                checked={checked} 
                onChange={(e)=>setChecked(e.target.checked)} 
                className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer" 
              />
              <label className="text-xs sm:text-sm text-gray-700">Remember me</label>
            </div>
            <a href="#" className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors">
              Forgot password?
            </a>
          </div>
          <FormButton btnName='Login' loading={loading} />
          <div className="text-center text-sm text-gray-500">Or</div>
          <div className="flex flex-col sm:flex-row gap-4">
            <FacebookBtn btnName='Facebook' />
            <GoogleBtn btnName='Google' />
          </div>
          <p className="text-center text-xs sm:text-sm text-gray-600 mt-4">
            Don&#39;t have an account? <Link href="/signup" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;