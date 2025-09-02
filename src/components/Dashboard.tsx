'use client'

import Container from '../ui/Container'
import React, { useEffect, useState } from 'react'
import DataList from './DataList'

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

function Dashboard() {
  const [users, setUsers] = useState<User[]>([])
  const [searchInput, setSearchInput] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data: User[] = await res.json()
        setUsers(data)
      } catch (error) {
        console.error('Failed to fetch users:', error)
      }
    }

    fetchUsers()
  }, [])


  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  )

 
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch(searchInput) 
  }

  return (
    <div className='bg-[#F3F4F6] h-[100vh] py-[50px]'>
      <Container>
        <div className='bg-white w-full rounded-2xl p-6'>
          <h1 className='text-[18px] lg:text-2xl font-bold'>User Management</h1>

          <form
            className='flex md:flex-row flex-col items-center gap-4 my-6'
            onSubmit={handleSearch}
          >
            <input
              type="search"
              placeholder="Search by name or email"
              className='border outline-blue-500 border-[rgba(0,0,0,0.2)] w-full py-2 px-4 rounded-xl'
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              type="submit"
              className='py-2 px-5 bg-blue-500 text-white rounded-xl lg:text-[18px] text-base'
            >
              Search
            </button>
          </form>

          <DataList users={filteredUsers} />
        </div>
      </Container>
    </div>
  )
}

export default Dashboard
