import { BrainCircuit, BugOff, UsersRound } from 'lucide-react'
import React, { useEffect } from 'react'

function TechnicalSupport({setIsHome}) {

 useEffect(()=>{
    setIsHome(false)
  },[setIsHome])

  return (
    <div className='mt-40 mx-10  0 mb-20 font-serif'>
       <div className='flex justify-between xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-[10%] home-service'>
           <div className='mb-10'>
             <h1 className='text-5xl pb-5 text-gray-900 mt-10'>Technical Support</h1>
            <p className='text-xl text-gray-700 mt-'>Our dedicated technical support team is here to assist you with any issues, ensuring seamless solutions 24/7. Count on us for reliable, expert guidance whenever you need it.</p>
           </div>
           {/* <div className='shadow-red-200'>
           </div> */}
           <img className='bg-[#afaaaa] transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-orange-800 rounded-2xl h-[350px]' src="/support.jpg" alt="Mobile dev" />
        </div>

          <div className='mt-20'>
            <div className='flex flex-col justify-center items-center mb-10'>
            <h1 className='font-semibold text-5xl text-black '>Problem? Solved.</h1>
            <p className='text-gray-800 text-xl pt-2 text-center'>At Erazone, we value your time, which is why our dedicated support team goes above and beyond to resolve your issues swiftly and efficiently, ensuring your projects stay on track.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-5'>
                <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <UsersRound  size={40} className='text-orange-500' />
                    <h2 className='py-5 text-2xl font-semibold'>Extended Teams</h2>
                    <p className='tracking-wide'>At Erazone, our support team acts as an extension of your own, always available to ensure your business operations run smoothly and without interruption.</p>
                </div>
                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <BrainCircuit  size={40} className='text-orange-500' />
                    <h2 className='py-5 text-2xl font-semibold'>24/7 Monitoring</h2>
                    <p className='tracking-wide'>At Erazone, your systems are monitored in real-time 24/7/365, giving you access to over 16 different metrics directly from the convenience of your dashboard.</p>
                </div>

                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <BugOff  size={40} className='text-orange-500' />
                    <h2 className='py-5 text-2xl font-semibold'>Quick Problem Resolution</h2>
                    <p className='tracking-wide'>With an average response time of just 90 seconds and an industry-leading 95% CSAT, AtomCode ensures your issues are resolved swiftly, preventing any disruption to your business.</p>
                </div>
            

                
            </div>
        </div>
    </div>
  )
}

export default TechnicalSupport