// components/DashboardStats.tsx
import React, { JSX } from "react";
import { FaWheelchair, FaClipboardList, FaUsers, FaBriefcaseMedical } from "react-icons/fa";
import { GiMedicalDrip } from "react-icons/gi";
import { PiAmbulanceBold } from "react-icons/pi";

type Stat = {
  label: string;
  value: number;
  icon: JSX.Element;
};

const stats: Stat[] = [
  { label: "Patients", value: 553, icon: <FaWheelchair className="text-blue-500" /> },
  { label: "Avg. costs", value: 52634, icon: <FaClipboardList className="text-green-500" /> },
  { label: "Staff Members", value: 112, icon: <FaUsers className="text-purple-500" /> },
  { label: "Vehicles", value: 16, icon: <PiAmbulanceBold className="text-yellow-500" /> },
  { label: "Appointment", value: 220, icon: <FaBriefcaseMedical className="text-pink-500" /> },
  { label: "Operations", value: 10, icon: <GiMedicalDrip className="text-red-500" /> },
];

const DashboardStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex items-center gap-4 bg-white dark:bg-dark shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
        >
          <div className="text-3xl">{stat.icon}</div>
          <div>
            <div className="text-xl font-semibold text-gray-800 dark:text-gray-200">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;