"use client"
import Container from '@/utils/Container'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Camera, Trash, Edit2, Key } from 'lucide-react'
import { useAppSelector } from '@/redux/hooks'
import FormInput from '@/utils/FormInput'

function ProfileView() {
    const { user } = useAppSelector(state => state.profile)
    const [editMode, setEditMode] = useState(false)
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: ''
    })

    useEffect(() => {
        if (user) setForm({ firstname: user?.firstname || '', lastname: user?.lastname || '', email: user?.email || '' })
    }, [user,form])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const avatarSrc = ((user as unknown) as { avatar?: string })?.avatar || '/image/profile.jpg'

    return (
        <div className="py-6">
            <Container>

                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800  dark:text-gray-200 ">Profile</h1>
                    <div className="text-sm text-gray-500 dark:text-gray-200">Manage your profile information</div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left: Avatar & actions */}
                    <div className="lg:col-span-1 bg-white/60 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700 rounded-lg p-5 shadow-sm">
                        <div className="flex flex-col items-center text-center">
                            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-md">
                                <Image src={avatarSrc} alt="avatar" fill sizes="(max-width: 768px) 128px, 192px" className="object-cover" />
                            </div>
                            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-gray-100 capitalize">{user?.firstname} {user?.lastname}</h2>
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 mt-1 uppercase tracking-wide">{user?.role || 'User'}</p>

                            <div className="mt-5 w-full space-y-2">
                                <label className="flex items-center justify-center gap-2 cursor-pointer w-full px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600">
                                    <Camera className="w-4 h-4" />
                                    <span className="text-sm">Change Avatar</span>
                                    {/* hidden file input (visual only) */}
                                    <input aria-hidden type="file" accept="image/*" className="hidden" />
                                </label>

                                <button className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <Trash className="w-4 h-4 text-red-500 dark:text-red-400" />
                                    <span className="text-xs sm:text-sm">Delete Avatar</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Details and actions */}
                    <div className="lg:col-span-2 bg-white/60 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-700 rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">Profile details</h3>
                            <button onClick={() => setEditMode(prev => !prev)} className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm text-gray-800 dark:text-gray-100">
                                <Edit2 className="w-4 h-4" />
                                <span>{editMode ? 'Cancel' : 'Edit'}</span>
                            </button>
                        </div>

                        <form className="grid grid-cols-1 sm:grid-cols-2  gap-4">
                            <FormInput label="First Name" type="text" placeholder="First name" name="firstname" value={form?.firstname} onChange={handleChange} readOnly={!editMode} />
                            <FormInput label="Last Name" type="text" placeholder="Last name" name="lastname" value={form?.lastname} onChange={handleChange} readOnly={!editMode} />
                            <div className="sm:col-span-2">
                                <FormInput label="Email" type="email" placeholder="you@example.com" name="email" value={form?.email} onChange={handleChange} className="" readOnly={!editMode} />
                            </div>

                            <div className="sm:col-span-2 flex items-center justify-end gap-3 mt-2">
                                <button type="button" disabled={!editMode} className="px-4 py-2 bg-green-600 text-white rounded-md text-sm disabled:opacity-60 disabled:cursor-not-allowed">Save changes</button>
                            </div>
                        </form>

                        <hr className="my-6 border-gray-100 dark:border-gray-700" />

                        <div>
                            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Change password</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <input type="password" placeholder="Current password" className="sm:col-span-3 w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100" disabled />
                                <input type="password" placeholder="New password" className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100" disabled />
                                <input type="password" placeholder="Confirm new password" className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100" disabled />
                            </div>
                            <div className="mt-3 flex justify-end">
                                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md text-sm">
                                    <Key className="w-4 h-4" />
                                    Change password
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 border-t pt-4">
                            <h4 className="text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">Danger zone</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-300 mb-3">Deleting your profile is permanent. This action cannot be undone.</p>
                            <div className="flex items-center justify-end">
                                <button className="px-4 py-2 bg-red-600 dark:bg-red-500 text-white rounded-md text-sm">Delete profile</button>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default ProfileView