'use client'
import { clearMessage, signup } from '@/redux/feature/auth/signupSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { authType } from '@/types/authTypes';
import FacebookBtn from '@/utils/FacebookBtn';
import FormButton from '@/utils/FormButton';
import FormCheckBox from '@/utils/FormCheckBox';
import FormInput from '@/utils/FormInput';
import GoogleBtn from '@/utils/GoogleBtn';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const SignUpComponent = () => {
  const dispatch = useAppDispatch()
  const { message,error, loading } = useAppSelector(state => state.signup)
  const route = useRouter()
  const [formData, setFormData] = useState<authType>({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev, [name]: value
    }))
  }
  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(signup({
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      password: formData.password
    }))
    
     if(message){
       setFormData({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
      
    })
  
     }
}

 useEffect(()=>{
     if(message) {
  route.push('/login')
  dispatch(clearMessage())
}
   },[message,route,dispatch])


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <span className="text-2xl font-bold text-blue-600"> Doctris</span>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form className="space-y-4" onSubmit={handelSubmit}>
          <div className='flex flex-col gap-4'>
            <FormInput onChange={handelChange} type='text' placeholder='First Name' value={formData.firstname} name='firstname' label='First Name' />
            <FormInput onChange={handelChange} type='text' placeholder='Last Name' value={formData.lastname} name='lastname' label='Last Name' />
            <FormInput onChange={handelChange} type='gamil' placeholder='email' value={formData.email} name='email' label='Gmail' />
            <FormInput onChange={handelChange} type='password' placeholder='password' value={formData.password} name='password' label='Password' />
          </div>
          {error && (
            <p className={`${error && "text-red-500"}`}>{error}</p>
          )}
          {message && (
            <p className={`${message && "text-green-500"}`}>{message}</p>
          )}

          <FormCheckBox label='I Accept Terms And Condition' type='checkbox' name='term' value='' />
          <FormButton btnName='Register' loading={loading} />
          <div className="text-center">Or</div>
          <div className='flex gap-4'>
            <FacebookBtn btnName='Facebook' />
            <GoogleBtn btnName='Google' />
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account? <a href="#" className="text-blue-600 hover:underline">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpComponent;