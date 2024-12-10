import React from 'react'

export const Layout = ({ children }) => {
  return (
    <div className='flex items-center justify-center h-screen w-screen bg-gray-800'>
        {children}
    </div>
  )
}
