// import React from 'react'
import { Link } from 'react-router-dom'
import {Clock, Facebook, Instagram, Linkedin, LocationEdit, Mail, Phone} from 'lucide-react'



function Footer() {
  return (
    <div className='overflow-hidden flex p-10 bg-[#2f1829] items-start footer'>
      <div className='footer-p w-[40%] text-gray-200'>
        <img className='h-[150px] w-[250px]' src="/logo-design.png" alt="footer-logo" />
        <p className=' -mt-10 tracking-wide'>Welcome to ERAZONE, where innovation meets excellence. Since our inception, we have been crafting tailored software solutions designed to empower businesses and enrich lives. Our passionate team of experts is committed to delivering transformative digital experiences that inspire growth and success. At ERAZONE, we believe in shaping the future through technology, one innovative idea at a time.</p>
      </div>

      <div className='footer-div-1 px-10 mt-10'>
        <h2 className='text-white text-xl mb-5'>Quick Access</h2>
        <div className='flex flex-col text-gray-200 gap-5'>
          <Link className='hover:text-orange-700' to='/'>Home</Link>
          <Link className='hover:text-orange-700' to='/services/custom-software-development'>Custom-Software-Development</Link>
          <Link className='hover:text-orange-700' to='/technologies'>Technologies</Link>
          <Link className='hover:text-orange-700' to='/portfolios'>Portfolios</Link>
          <Link className='hover:text-orange-700' to='/about'>About</Link>

        </div>
      </div>

      <div  className='flex flex-col gap-2 px-10 mt-10 '>
          <h1 className='text-white text-xl mb-5'>Contacts</h1>
          <div >
            <h1 className='flex items-center text-white gap-2'> <Phone size={25}/><span className='text-lg font-semibold'>Phone</span></h1>
            <p>+251 45 01 08 57</p>
          </div>
          <div>
            <h1 className='flex items-center text-white gap-2'><Mail size={25}/> <span className='text-lg font-semibold'>Email</span></h1>
            <p>contact@erazonetech.com</p>
          </div>
          <div>
            <h1 className='flex items-center text-white gap-2'><Clock size={25}/><span className='text-lg font-semibold'> Working hours</span></h1>
            <p>Monday to Saturday 8am - 5pm</p>
          </div>
           <div>
            <h1 className='flex items-center text-white gap-2'><LocationEdit size={25}/><span className='text-lg font-semibold'> Our Address</span></h1>
            <p ><strong className='font-semibold'>Head Office</strong> :AddisAbeba, Ethiopia</p>
            <p><strong className='font-semibold'>Operating Locations</strong>: Wolaita Sodo</p>
          </div>
          <div className='flex gap-5 text-orange-600'>
            <Instagram className='cursor-pointer hover:scale-50'/>
            <Linkedin className='cursor-pointer hover:scale-50'/>
            <Facebook className='cursor-pointer hover:scale-50'/>
          </div>
      </div>
    </div>
  )
}

export default Footer