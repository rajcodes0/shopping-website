import React from 'react'
import Navbar from "./Navbar"
import Footer from './Footer'
import { Outlet } from 'react-router'
import { Toaster } from 'react-hot-toast'

function Layout() {
  return (
   <div>
     <Toaster
  position="top-right"
  toastOptions={{
    success: {
      duration: 2000,
      style: {
        background: '#000',
        color: '#fff',
        borderRadius: '12px',
        padding: '12px 16px',
        fontSize: '14px',
        fontWeight: '500',
      },
      iconTheme: {
        primary: '#22c55e',   
        secondary: '#000',
      },
    },
    error: {
      duration: 3000,
      style: {
        background: '#000',
        color: '#fff',
        borderRadius: '12px',
        padding: '12px 16px',
        fontSize: '14px',
        fontWeight: '500',
      },
      iconTheme: {
        primary: '#ef4444',  //
        secondary: '#000',
      },
    },
  }}
/>
    <Navbar/>
    <Outlet/>
    <Footer/>
   </div>
   
  )
}

export default Layout
