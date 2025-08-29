import React, { useState } from 'react'
import { Icons } from './Icons'

function Tools() {

const [activeIndex, setActiveIndex] = useState(null)
  return (
    <div className='m-20 mt-5  rounded-lg shadow-sm shadow-black'>
        <h1 className="text-black text-5xl font-oswald font-medium m-[5rem] text-center pt-10">Technologies that we use.</h1>
        <div className='grid grid-cols-6 gap-5 mx-20 pb-10'>
          {Icons.map((item)=>{
            return <div onClick={() => setActiveIndex(item.id)} key={item.id} className={`flex justify-center items-center rounded-lg ${activeIndex == item.id ? "border-cyan-400": "border-gray-700"} hover:tool-box h-[120px] w-[120px] bg-white shadow-sm shadow-orange-500 cursor-pointer`}>
               <img  className=' h-[80px] w-[80px]' src= {item.img} alt={item.title}/>
            </div>
          })}
        </div>
    </div>
  )
}

export default Tools