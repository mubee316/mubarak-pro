import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/app/components/Header'

const AppLayout = () => {
    return (
      <div>
          <main className="min-h-screen container">
              <Header />
              <Outlet/>       
       </main>
  <div className="p-10 text-center bg-blue-300 mt-[30rem]">
       made by mubarak olalekan
      
      </div>    
      </div>
    )
  }

export default AppLayout