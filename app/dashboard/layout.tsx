import React, { ReactNode } from 'react'
import { AuthContextProvider } from "@/context/AuthContext";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AuthContextProvider>
      <main className='w-[100vw]'>
        
        {children}
      </main>
    </AuthContextProvider>
  )
}

export default DashboardLayout