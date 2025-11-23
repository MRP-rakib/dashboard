'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

const data = [
  {
    month: 'Jan',
    Male: 300,
    Female: 450,
    Children: 200,
  },
  {
    month: 'Feb',
    Male: 500,
    Female: 200,
    Children: 450,
  },
  {
    month: 'Mar',
    Male: 600,
    Female: 350,
    Children: 800,
  },
  {
    month: 'Apr',
    Male: 550,
    Female: 400,
    Children: 900,
  },
  {
    month: 'May',
    Male: 500,
    Female: 450,
    Children: 850,
  },
  {
    month: 'Jun',
    Male: 600,
    Female: 350,
    Children: 950,
  },
  {
    month: 'Jul',
    Male: 550,
    Female: 450,
    Children: 900,
  },
  {
    month: 'Aug',
    Male: 650,
    Female: 400,
    Children: 850,
  },
  {
    month: 'Sep',
    Male: 600,
    Female: 500,
    Children: 900,
  },
  {
    month: 'Oct',
    Male: 550,
    Female: 450,
    Children: 850,
  },
  {
    month: 'Nov',
    Male: 500,
    Female: 400,
    Children: 800,
  },
  {
    month: 'Dec',
    Male: 450,
    Female: 350,
    Children: 750,
  },
];
export const PatientVisitByGender = () => {
  const [selectedYear] = useState('2020');

  return (
    <div className="w-[60%] h-full bg-white dark:bg-dark rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold dark:text-white">Patients visit by Gender</h2>
        <select 
          value={selectedYear}
          className="px-2 py-1 border rounded dark:bg-slate-700 dark:text-white dark:border-slate-600"
        >
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Male" fill="#3b82f6" />
          <Bar dataKey="Female" fill="#f59e0b" />
          <Bar dataKey="Children" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

 