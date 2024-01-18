'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  React.useEffect(() => {
    router.push('/About')
  }, [])
  return <h1>LikeLion x KMU ...</h1>
}
