import DashboardChart from '@/components/dashboard/DashboardChart'
import DashboardStats from '@/components/dashboard/DashboardState'
import Container from '@/utils/Container'
import React from 'react'

function Dashboard() {
  return (
    <div className='bg-[#F8F9FA] dark:bg-[#1F2D3D] py-6'>
        <Container>
            <DashboardStats/>
            <DashboardChart/>
        </Container>
    </div>
  )
}

export default Dashboard