import React, { ReactNode } from 'react'
import { AuthContextProvider } from "@/context/AuthContext";
import DashboardNav from './components/DashboardNav';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AuthContextProvider>
        <nav className="flex justify-between items-center relative top-10">
          <h2 className="text-4xl font-bold text-quivyPurple">Dashboard</h2>
          <DashboardNav />
        </nav>
      <main className='mt-10'>
        {children}
      </main>
    </AuthContextProvider>
  )
}

export default DashboardLayout