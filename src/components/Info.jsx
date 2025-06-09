import React from 'react'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <div className='absolute top-8 right-0.5 bg-gray-200 rounded-sm p-2 '>
        <Link to={"/profile"}>
          <div className='w-fit border-b-1 mb-1'>profile</div>
        </Link>
      
        <div className='w-fit border-b-1 mb-1'>log out</div>
        <div className='w-fit'>contact</div>
    </div>
  )
}

export default Info