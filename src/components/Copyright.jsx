import React from 'react'

function Copyright() {
  return (
    <div className='bg-black text-slate-400 flex px-10 py-5 justify-evenly'>
        <h2 className='cursor-pointer text-slate-400 hover:text-teal-400'>© {new Date().getFullYear()} erazonetech.com All rights reserved.</h2>
        <p className='cursor-pointer text-slate-400 hover:text-teal-400'>Terms & Conditions </p>
        <p className='cursor-pointer text-slate-400 hover:text-teal-400'>Privacy Pocicy</p>
    </div>
  )
}

export default Copyright