import React from 'react'
import { Settings, LogOut } from "lucide-react";
import Image from 'next/image';
interface profileProps{
    profile:boolean
}
function profile({profile}:profileProps) {
  return (
    <div className={`${!profile&&'hidden'} absolute top-14 -left-[200px] w-64 bg-white shadow-lg rounded-xl border border-gray-100 overflow-hidden`}>
      {/* Profile Header */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-200">
        <Image
          src="/profile.jpg"
          alt="User avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h2 className="text-sm font-semibold text-gray-800">CALVIN CARLO</h2>
          <p className="text-xs text-blue-500 font-medium uppercase tracking-wide">
            Orthopedic
          </p>
        </div>
      </div>

      {/* Menu Items */}
      <ul className="p-2">
        {/* <li className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer text-sm text-gray-700">
          <LayoutDashboard size={16} />
          Dashboard
        </li> */}
        <li className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer text-sm text-gray-700">
          <Settings size={16} />
          Profile Settings
        </li>
        <li className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer text-sm text-gray-700">
          <LogOut size={16} />
          Logout
        </li>
      </ul>
    </div>
  )
}

export default profile