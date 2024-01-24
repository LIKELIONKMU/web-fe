import React from 'react'
import NavBar from './NavBar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default MainLayout
