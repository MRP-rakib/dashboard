"use client"
import Container from '@/utils/Container'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Camera, Trash, Edit2, Key } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import FormInput from '@/utils/FormInput'
import { toast, ToastContainer } from 'react-toastify'
import { changepasswordThunk, clearUserMessage } from '@/redux/feature/auth/changepasswordSlice'
import { userType } from '@/types/userType'
import { clearUserInfo, updateUser } from '@/redux/feature/auth/userDetailsChangeSlice'
import { deleteAccount } from '@/redux/feature/auth/deleteAccountSlice'
import Cookies from "js-cookie";
import API from '@/api/api'

function ProfileView() {
    const { user } = useAppSelector(state => state.profile)
    const changepassword = useAppSelector(state => state.changepassword)
    const changeUserInfo = useAppSelector(state => state.changeUserInfo)
    const deleteUser = useAppSelector(state=>state.deleteAccount)
    const [dlt, setDlt] = useState<boolean>(false)
    const [isMatch, setIsMatch] = useState(true)
    const dispatch = useAppDispatch()
    const [editMode, setEditMode] = useState(false)
    const [dltPass,setDltPass] = useState<string>('')
    const token = localStorage.getItem('token')
    const [form, setForm] = useState<userType>({
        firstname: '',
        lastname: '',
        email: '',
        bio: '',
        age: 0,
        gender: ''

    })
    const [changepass, setChangePass] = useState({
        password: '',
        newpassword: '',
        confirmpassword: ''
    })

    const handelchangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setChangePass(prev => ({ ...prev, [name]: value }))
    }
    const handelUserInfo = () => {
        dispatch(updateUser({
            firstname: form.firstname,
            lastname: form.lastname,
            email: form.email,
            bio: form.bio,
            age: form.age,
            gender: form.gender,
            _id: user?._id
        }))
    }
    useEffect(() => {
        if (changeUserInfo.message) {
            toast.success(changeUserInfo.message)
            window.location.reload()
        }

        if (changeUserInfo.error) {
            toast.error(changeUserInfo.error)
            dispatch(clearUserInfo())
        }

    }, [changeUserInfo.message, changeUserInfo.error, dispatch])

    useEffect(() => {
        if (changeUserInfo.message) toast.success(changeUserInfo.message)
        if (changeUserInfo.error) toast.error(changeUserInfo.error)

    }, [changeUserInfo.message, changeUserInfo.error])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: name === 'age' ? Number(value) : value }))
    }

    const handelchange = () => {
        if (isMatch) return toast.error('New password & Confirm Password is not matching ')

        dispatch(changepasswordThunk({
            password: changepass.password,
            newpassword: changepass.newpassword,
            _id: user._id
        }))

    }

    useEffect(() => {
        setIsMatch(changepass.newpassword !== changepass.confirmpassword)
    }, [changepass.newpassword, changepass.confirmpassword])

    useEffect(() => {
        if (changepassword.message) {
            toast.success(changepassword.message)
            setChangePass({
                password: '',
                newpassword: '',
                confirmpassword: ''
            })
        }
        if (changepassword.error) {
            toast.error(changepassword.error)
            dispatch(clearUserMessage())
        }
    }, [changepassword.message, changepassword.error, dispatch])

 const handelDelete = ()=>{
    dispatch(deleteAccount({_id:user._id,password:dltPass}))
 }
 useEffect(()=>{
  if(deleteUser.message){
    Cookies.remove('accessToken',{path:'/'})
    Cookies.remove('refreshToken',{path:'/'})
    localStorage.removeItem('token')
    window.location.href = '/signin'
  }
 },[deleteUser,dispatch])

 const handleAvatarAutoUpload = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    alert("Only image files allowed");
    return;
  }

  const formData = new FormData();
  formData.append("image", file);
  try {
    const res = await API({endpoint:`auth/admin/upload-image/${user._id}`,option:{
        method:'PUT',
        credentials:'include',
        headers:{
                 'authorization': `Bearer ${token}`
                },
        body:formData
    }
    
}
)
if(res?.message){
    window.location.reload();
}
    
  } catch (error) {
    alert("Image upload failed");
    throw error
  } finally {
    e.target.value = "";
  }
};

const handleDeleteAvatar= async()=>{
     try {
        const res = await API({
            endpoint:`auth/admin/delete-image/${user._id}`,
            option:{
                method:'DELETE',
                credentials:'include',
                headers:{
                 'authorization': `Bearer ${token}`
                },
            }
        })
        if (res?.message){
            window.location.reload()
        }
     } catch (error) {
        throw error
     }
}

    const avatarSrc = user?.avatar?.url || '/image/profile.jpg'


    return (
        <div className="py-6">
            <Container>

                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800  dark:text-gray-200 ">Profile</h1>
                    <div className="text-sm text-gray-500 dark:text-gray-200">Manage your profile information</div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1 bg-white/60 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700 rounded-lg p-5 shadow-sm">
                        <div className="flex flex-col items-center text-center">
                            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-md">
                                <Image src={avatarSrc} alt="avatar" fill sizes="(max-width: 768px) 128px, 192px" className="object-cover" />
                            </div>
                            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-gray-100 capitalize">{user.firstname && user.lastname ? `${user.firstname} ${user.lastname}` : 'full name'}</h2>
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 mt-1 tracking-wide">@{user?.username || 'user'}</p>
                            <div className='flex items-center gap-5'>
                                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 mt-1 tracking-wide capitalize">age: {user?.age || 0}</p>
                                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 mt-1 tracking-wide capitalize">gender: {user?.gender || 'null'}</p>
                            </div>

                            <div className="mt-5 w-full space-y-2">
                                <label className="flex items-center justify-center gap-2 cursor-pointer w-full px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600">
                                    <Camera className="w-4 h-4" />
                                    <span className="text-sm">Change Avatar</span>
                                    <input aria-hidden onChange={handleAvatarAutoUpload} type="file" accept="image/*" className="hidden" />
                                </label>

                                <button onClick={handleDeleteAvatar} className="w-full flex items-center cursor-pointer justify-center gap-2 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <Trash className="w-4 h-4 text-red-500 dark:text-red-400" />
                                    <span className="text-xs sm:text-sm">Delete Avatar</span>
                                </button>
                            </div>
                            <div className='pt-5 text-start dark:text-white'>
                                {user?.bio}
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 bg-white/60 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-700 rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">Profile details</h3>
                            <button onClick={() => setEditMode(prev => !prev)} className="flex items-center cursor-pointer gap-2 px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm text-gray-800 dark:text-gray-100">
                                <Edit2 className="w-4 h-4" />
                                <span>{editMode ? 'Cancel' : 'Edit'}</span>
                            </button>
                        </div>

                        <form className="grid grid-cols-1 sm:grid-cols-2  gap-4">
                            <FormInput label="First Name" type="text" placeholder="First name" name="firstname" value={editMode ? form.firstname : user.firstname} onChange={handleChange} readOnly={!editMode} />
                            <FormInput label="Last Name" type="text" placeholder="Last name" name="lastname" value={editMode ? form.lastname : user.lastname} onChange={handleChange} readOnly={!editMode} />
                            <div className="sm:col-span-2">
                                <FormInput label="Email" type="email" placeholder="you@example.com" name="email" value={editMode ? form.email : user.email} onChange={handleChange} className="" readOnly={!editMode} />
                                {editMode &&
                                    <div className='mt-2'>
                                        <div className='flex items-center gap-4 mb-2'>
                                            <FormInput label="age" type="number" placeholder="enter your age" name="age" value={(editMode ? form.age ?? '' : user.age ?? '').toString()} onChange={handleChange} className="" readOnly={!editMode} />
                                            <FormInput label="gender" type="text" placeholder="enter your gender" name="gender" value={editMode ? form.gender : user.gender} onChange={handleChange} className="" readOnly={!editMode} />
                                        </div>
                                        <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 sm:mb-2">Bio</label>
                                        <textarea
                                            className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 
                                                        text-sm sm:text-base
                                                        border border-gray-300 
                                                        rounded-md shadow-sm
                                                        dark:text-white
                                                        placeholder:text-gray-400 placeholder:text-xs sm:placeholder:text-sm
                                                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                                        hover:border-blue-400 transition-colors
                                                        disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200
                                                        invalid:border-red-500 invalid:ring-red-500
                                                         resize-none`}
                                            rows={4}
                                            value={editMode ? form.bio : user.bio}
                                            onChange={handleChange}
                                            name="bio"
                                            placeholder="Enter your bio"
                                            readOnly={!editMode}
                                        />
                                    </div>

                                }
                            </div>
                        </form>
                        <div className="sm:col-span-2 flex items-center justify-end gap-3 mt-2">
                            <button type="button" onClick={handelUserInfo} disabled={!editMode} className="px-4 py-2 bg-green-600 text-white rounded-md text-sm disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed">Save changes</button>
                        </div>

                        <hr className="my-6 border-gray-100 dark:border-gray-700" />

                        <div>
                            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Change password</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <input type="password" name='password' onChange={handelchangePass} value={changepass.password} placeholder="Current password" className="sm:col-span-3 w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100" />
                                <input type="password" name='newpassword' onChange={handelchangePass} value={changepass.newpassword} placeholder="New password" className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100" />
                                <input type="password" name='confirmpassword' onChange={handelchangePass} value={changepass.confirmpassword} placeholder="Confirm new password" className={`w-full px-3 py-2 border rounded-md ${isMatch && 'border-red-500 dark:border-red-500 outline-red-500'} bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100`} />
                            </div>
                            <div className="mt-3 flex justify-end">
                                <button onClick={handelchange} className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md text-sm">
                                    <Key className="w-4 h-4" />
                                    Change password
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 border-t pt-4">
                            <h4 className="text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">Danger zone</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-300 mb-3">Deleting your profile is permanent. This action cannot be undone.</p>
                            <div className={`flex items-center ${dlt?' justify-between':'justify-end'} w-full gap-2`}>

                                {dlt ? (
                                    <div className='flex items-center gap-2 w-full'>
                                        <div className='w-full'>
                                            <input type="password" name='password' onChange={(e)=>setDltPass(e.target.value)} value={dltPass} placeholder="enter password" className="sm:col-span-3 w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100" />
                                        </div>
                                        <div className='w-full flex gap-2 items-center'>
                                            <button onClick={handelDelete} className="px-4 py-2 bg-red-600 dark:bg-red-500 text-white rounded-md text-sm cursor-pointer">Confirm</button>
                                            <button onClick={()=>setDlt(false)} className="px-4 py-2 bg-green-600 dark:bg-green-500 text-white rounded-md text-sm cursor-pointer">Cancel</button>
                                        </div>
                                    </div>
                                ) : (
                                    <button onClick={()=>setDlt(true)} className="px-4 py-2 bg-red-600 dark:bg-red-500 text-white rounded-md text-sm cursor-pointer">Delete profile</button>

                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </Container>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                theme="colored"
            />
        </div>
    )
}

export default ProfileView