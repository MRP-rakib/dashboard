'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'


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

interface DataListProps {
  users: User[]
}

function DataList({ users }: DataListProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const usersPerPage = 5
  const router = useRouter()

  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)
  const totalPages = Math.ceil(users.length / usersPerPage)


  const handleRowClick = (userId: number) => {
    router.push(`/user?id=${userId}`)
  }

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-[14px] lg:text-base">
              <th className="py-2 px-4 text-nowrap font-semibold">Name</th>
              <th className="py-2 px-4 text-nowrap font-semibold">Email</th>
              <th className="py-2 px-4 text-nowrap font-semibold">Phone</th>
              <th className="py-2 px-4 text-nowrap font-semibold">Company</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer transition-colors text-[14px] lg:text-base"
                onClick={() => handleRowClick(user.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleRowClick(user.id)
                  }
                }}
              >
                <td className="py-3 px-4 text-nowrap">
                  {user.name}
                  <p className="text-gray-500 text-sm">@{user.username}</p>
                </td>
                <td className="py-3 px-4 text-nowrap">{user.email}</td>
                <td className="py-3 px-4 text-nowrap">{user.phone}</td>
                <td className="py-3 px-4 text-nowrap">{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-2 text-gray-600 text-[14px] lg:text-base">
        Showing {indexOfFirstUser + 1}–{Math.min(indexOfLastUser, users.length)} of {users.length} users
      </p>

      <div className="flex justify-end mt-4 gap-2">
        <button
          className="py-2 px-4 bg-gray-300 rounded disabled:opacity-50 hover:bg-gray-400 transition-colors text-[14px] lg:text-base"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded disabled:opacity-50 hover:bg-blue-600 transition-colors text-[14px] lg:text-base"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default DataList