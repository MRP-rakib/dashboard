'use client'

import { use, useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Container from '@/ui/Container'


interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export default function UserPage() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const userId = searchParams.get('id')
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (userId) {
            async function fetchUser() {
                try {
                    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                    if (!response.ok) throw new Error('User not found')
                    const data = await response.json()
                    setUser(data)
                } catch (err) {
                    setError('Failed to fetch user details')
                } finally {
                    setLoading(false)
                }
            }
            fetchUser()
        } else {
            setError('No user ID provided')
            setLoading(false)
        }
    }, [userId])

    const handleBackClick = () => {
        try {
            router.push('/')
        } catch (err) {
            console.error('Router error:', err)
            window.location.href = '/'
        }
    }

    if (loading) return <div className='flex items-center justify-center text-4xl h-[100vh]'>Loading...</div>
    if (error) return <div>{error}</div>
    if (!user) return <div>No user found</div>

    return (
        <div className="bg-[#F3F4F6] h-[100vh] py-[50px]">
            <Container>
                <div className='bg-white w-full rounded-2xl p-6'>
                    <div className='flex items-center justify-between'>
                        <Link href="/" className='cursor-pointer'>
                            <button
                                className="mb-4 py-2 px-4 bg-[#F9FAFB] rounded hover:bg-[#F3F4F6] transition-colors"
                                onClick={handleBackClick}
                            >
                                Back to Users
                            </button>
                        </Link>
                        <h1 className='text-[18px] lg:text-2xl font-bold'>User Details</h1>
                    </div>
                    <div className='grid grid-cols-1 gap-7.5'>
                        <div className='grid grid-cols-2 gap-7.5 items-center justify-between'>
                            <div className='bg-[#F9FAFB] p-6'>
                                <h2 className='text-[20px] font-bold'>Personal Info</h2>
                                <div className='flex flex-col gap-4 pt-6 text-[14px] lg:text-base'>
                                    <span>
                                        <p>Name</p>
                                        <p>{user.name}</p>
                                    </span>
                                    <span>
                                        <p>Username</p>
                                        <p>{user.username}</p>
                                    </span>
                                    <span>
                                        <p>Email</p>
                                        <p>{user.email}</p>
                                    </span>
                                    <span>
                                        <p>Phone</p>
                                        <p>{user.phone}</p>
                                    </span>
                                    <span>
                                        <p>Website</p>
                                        <Link href={user.website} className='underline text-blue-500'>{user.website}</Link>
                                    </span>
                                </div>
                            </div>
                            <div className='bg-[#F9FAFB] p-6'>
                                <h2 className='text-[20px] font-bold'>Address</h2>
                                <div className='flex flex-col gap-4 pt-6 text-[14px] lg:text-base'>
                                    <span>
                                        <p>Street</p>
                                        <p>{user.address.street}</p>
                                    </span>
                                    <span>
                                        <p>Suite</p>
                                        <p>{user.address.suite}</p>
                                    </span>
                                    <span>
                                        <p>City</p>
                                        <p>{user.address.city}</p>
                                    </span>
                                    <span>
                                        <p>Zipcode</p>
                                        <p>{user.address.zipcode}</p>
                                    </span>
                                    <span>
                                        <p>Geo Location</p>
                                        <p>{user.address.geo.lat}, {user.address.geo.lng}</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#F9FAFB] p-6'>
                            <h2 className='text-[20px] font-bold'>Company</h2>
                            <div className='flex items-center justify-between pt-6 text-[14px] lg:text-base'>
                                    <span>
                                        <p>Company Name</p>
                                        <p>{user.company.name}</p>
                                    </span>
                                    <span>
                                        <p>Catch Phrase</p>
                                        <p>{user.company.catchPhrase}</p>
                                    </span>
                                    <span>
                                        <p>Business</p>
                                        <p>{user.company.bs}</p>
                                    </span>
                                   
                                </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}