'use client'
import { login } from '@/redux/feature/auth/loginSlice';
import { clearMessage } from '@/redux/feature/auth/signupSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { authType } from '@/types/authTypes';
import FacebookBtn from '@/utils/FacebookBtn';
import FormButton from '@/utils/FormButton';
import FormInput from '@/utils/FormInput';
import GoogleBtn from '@/utils/GoogleBtn';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

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
  dispatch(login({
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <span className="text-2xl font-bold text-blue-600"> Doctris</span>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form className="space-y-4" onSubmit={handelSubmit}>
          <div className='flex flex-col gap-4'>
           
            <FormInput onChange={handelChange} type='gamil' placeholder='email' value={formData.email} name='email' label='Gmail' />
            <FormInput onChange={handelChange} type='password' placeholder='password' value={formData.password} name='password' label='Password' />
          </div>
          {error && (
            <p className={`${error && "text-red-500"}`}>{error}</p>
          )}
          {message && (
            <p className={`${message && "text-green-500"}`}>{message}</p>
          )}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" name='remembar' checked={checked} onChange={(e)=>setChecked(e.target.checked)} className="h-4 w-4 text-blue-600
               focus:ring-blue-500 border-gray-300 rounded" />
              <label className="ml-2 text-sm text-gray-700">Remember me</label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>
          <FormButton btnName='Login' loading={loading} />
          <div className="text-center">Or</div>
          <div className="flex justify-between">
            <FacebookBtn btnName='Facebook' />
            <GoogleBtn btnName='Google' />
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;