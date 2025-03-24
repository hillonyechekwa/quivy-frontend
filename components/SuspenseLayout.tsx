import React, { Suspense } from 'react'
import PageSkeleton from './PageSkeleton'

interface SuspenseLayoutProps {
    children: React.ReactNode
}


const SuspenseLayout = ({children}: SuspenseLayoutProps) => {
  return (
      <Suspense fallback={<PageSkeleton />}>
          {children}
    </Suspense>
  )
}

export default SuspenseLayout