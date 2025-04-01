import React, { ReactNode } from 'react'



const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (  
    <main className='mt-10'>
      <h2 className="text-quivyPurple font-bold text-4xl absolute top-5 left-5">Dashboard</h2>
        {children}
      </main>
  )
}

export default DashboardLayout