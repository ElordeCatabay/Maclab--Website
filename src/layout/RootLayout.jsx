import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Menu from '../components/Menu'

export default function RootLayout() {
  const [isOpen, setIsOpen] = useState('')

  return (
    <>
      <header>
        <NavBar setIsOpen={setIsOpen} />
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
