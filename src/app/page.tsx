'use client'
import { useRouter } from "next/navigation"
import { useEffect } from "react"

function Home() {
  const route = useRouter()
  useEffect(()=>{
    route.push('/dashboard')
  },[route])
  return (
    <div>
      
    </div>
  )
}

export default Home