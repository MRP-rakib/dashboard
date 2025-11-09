'use client'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

const data = [
  { name: 'Cardiology', value: 65 },
  { name: 'Neurology', value: 55 },
  { name: 'Pediatrics', value: 49 },
  { name: 'Orthopedics', value: 45 },
  { name: 'General Medicine', value: 35 }
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

const PatientByDepartment = () => {
  const [selectedPeriod] = useState('Today');
  const totalPatients = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="w-full h-full bg-white dark:bg-dark rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold dark:text-white">Patients by Department</h2>
        <select 
          value={selectedPeriod}
          className="px-2 py-1 border rounded bg-white dark:text-white dark:bg-dark border-slate-600"
        >
          <option value="Today">Today</option>
          <option value="Yesterday">Yesterday</option>
          <option value="Last Week">Last Week</option>
          <option value="Last Month">Last Month</option>
        </select>
      </div>
      
      <div className="relative" style={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
 
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold dark:text-white">{totalPatients}</span>
          <span className="text-sm text-gray-400">Total</span>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {data.map((entry, index) => (
          <div key={entry.name} className="flex items-center">
            <div 
              className="w-3 h-3 rounded-full mr-2" 
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span className="text-sm text-gray-300">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientByDepartment;
