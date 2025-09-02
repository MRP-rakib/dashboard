import { Suspense } from 'react'
import UserPage from '../../components/UserPage'

export default function Page() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center text-4xl h-[100vh]">Loading...</div>}>
      <UserPage />
    </Suspense>
  )
}
