import { Suspense } from 'react'
import UserPage from '../../components/UserPage'

export default function Page() {
  return (
    <Suspense>
      <UserPage />
    </Suspense>
  )
}
