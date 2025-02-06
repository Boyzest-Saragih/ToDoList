import React from 'react'

const DefaultLayout = ({children}) => {
  return (
    <div className='flex flex-col items-center min-h-[100vh] text-white bg-gray-950'>
      {children}
    </div>
  )
}

export default DefaultLayout