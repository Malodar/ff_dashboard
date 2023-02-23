import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between items-center w-full h-16 px-2 2xl:px-16 shadow-md bg-[#ecf0f3] text-gray-700'>
      <h3 className='text-bold'>Tax Calculator</h3>
      <div>
        <ul className='hidden md:flex'>
          <Link to='/'>
            <li className='ml-10 text-sm uppercase hover:border-b border-gray-700'>Home</li>
          </Link>
          <Link to='/contacts'>
            <li className='ml-10 text-sm uppercase hover:border-b border-gray-700'>Contacts</li>
          </Link>
          <Link to='/profile'>
            <li className='ml-10 text-sm uppercase hover:border-b border-gray-700'>Profile</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar