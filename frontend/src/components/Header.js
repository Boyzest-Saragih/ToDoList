import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between bg-gray-900 w-full py-2 px-8'>
      <div className='font-mono font-bold text-4xl'>
        TO DO LIST
      </div>

      <div className='font-mono font-semibold text-xl text-gray-400'>
        Create your list
      </div>

      <div className='flex items-center gap-3'>
        <div className='w-10 h-10 rounded-full bg-gray-700'>
          <img
            src="/api/placeholder/40/40"
            alt=""
            className='w-full h-full rounded-full object-cover'
          />
        </div>
        <span className='font-mono font-medium'>John Doe</span>
      </div>
    </div>
  )
}

export default Header