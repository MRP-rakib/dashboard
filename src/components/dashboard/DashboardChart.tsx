import React from 'react'
import { PatientVisitByGender } from '../charts/PatientVisitByGender'
import PatientByDepartment from '../charts/PatientByDepartment'

function DashboardChart() {
  return (
    <div className='flex items-center gap-7.5 flex-col lg:flex-row pt-6'>
        <PatientVisitByGender/>
        <PatientByDepartment/>
    </div>
  )
}

export default DashboardChart