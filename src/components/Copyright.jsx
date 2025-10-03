import React from 'react'

function Copyright() {
  return (
    <div className='bg-black text-white flex px-10 py-5 justify-evenly'>
        <h2 className='cursor-pointer hover:text-orange-700'>© {new Date().getFullYear()} erazonetech.com All rights reserved.</h2>
        <p className='cursor-pointer hover:text-orange-700'>Terms & Conditions </p>
        <p className='cursor-pointer hover:text-orange-700'>Privacy Pocicy</p>
    </div>
  )
}

export default Copyright