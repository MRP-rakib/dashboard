'use client'
import { signup } from '@/redux/feature/auth/signupSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { userType } from '@/types/userType';
import FacebookBtn from '@/utils/FacebookBtn';
import FormButton from '@/utils/FormButton';
import FormCheckBox from '@/utils/FormCheckBox';
import FormInput from '@/utils/FormInput';
import GoogleBtn from '@/utils/GoogleBtn';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const SignUpComponent = () => {
  const dispatch = useAppDispatch()
  const { message,error, loading } = useAppSelector(state => state.signup)
  const route = useRouter()
  const [ismatch,setIsmatch]= useState<boolean>(false)
  const [formData, setFormData] = useState<userType>({
    username:'',
    email:'',
    password:'',
    cppassword:''
  })
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev, [name]: value
    }))
  }
 
  useEffect(()=>{
    if(formData.password !==formData.cppassword){
      setIsmatch(true)
    }else{
      setIsmatch(false)
    }
  },[formData,ismatch])

  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(formData.password!==formData.cppassword){
      return
    }

    dispatch(signup({
      username: formData.username,
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
  route.push('/signin')
  // dispatch(clearMessage())
}
   },[message,route,dispatch])


  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
          <span className="text-xl md:text-2xl font-bold text-blue-600"> Doctris</span>
      <div className="w-full max-w-md p-4 sm:p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
        </div>
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form className="space-y-4" onSubmit={handelSubmit}>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col sm:flex-row items-center gap-4'>
              <FormInput onChange={handelChange} type='text' placeholder='username' value={formData.username} name='username' label='Username' />
            </div>
            <FormInput onChange={handelChange} type='email' placeholder='email' value={formData.email} name='email' label='Gmail' />
            <FormInput onChange={handelChange} type='password' placeholder='password' value={formData.password} name='password' label='Password' />
            <FormInput onChange={handelChange} className={`${ismatch&&'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500'}`} type='cppassword' placeholder='confirm password' value={formData.cppassword} name='cppassword' label='Confirm Password' />
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

          <FormCheckBox label='Terms And Condition' type='checkbox' name='term' value='' />
          <FormButton btnName='Register' loading={loading} />
          <div className="text-center">Or</div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <FacebookBtn btnName='Facebook' />
            <GoogleBtn btnName='Google' />
          </div>
          <p className="text-center text-sm md:text-base text-gray-600 mt-4">
            Already have an account? <Link href="/signin" className="text-blue-600 hover:underline">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpComponent;