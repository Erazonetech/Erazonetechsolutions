import {  Expand, Shapes, ShieldCheck, Smartphone, Table2, Wrench } from 'lucide-react'
import React, { useEffect } from 'react'

function MobileDev({setIsHome}) {



  useEffect(()=>{
     setIsHome(false)
  },[setIsHome])



  return (
    
    <div className='mt-40 mx-20 mb-20'>
         <div className='flex justify-between'>
           <div className='max-w-[50%]'>
             <h1 className='text-5xl pb-5 text-gray-900 mt-10'>Mobile Development</h1>
            <p className='text-xl text-gray-700 mt-5'>We deliver more than just apps. We deliver experiences. Our fast, responsive and highly scalable mobile app development will help you get ahead of the curve in no time!</p>
           </div>
           {/* <div className='shadow-red-200'>
           </div> */}
           <img className='bg-[#afaaaa] transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-orange-800 rounded-2xl w-[40%] h-[350px]' src="/mobile-dev.png" alt="Mobile dev" />
        </div>

        <div className='mt-20'>
            <div className='flex flex-col justify-center items-center mb-10'>
            <h1 className='font-semibold text-5xl text-black '>Mobile App Development Services</h1>
            <p className='text-gray-800 text-lg pt-2'>Erazone provides you with innovative app solutions with enrich experiences</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-5'>
          
                <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg flex'>
                    <div className='w-[35%]'>
                        <img className='w-28 h-24 rounded-e-xl' src="/android.jpeg" alt="android" />
                        <h2 className='text-xl font-semibold'>Android App Development</h2>
                    </div>
                   <ul className='flex flex-col gap-4'>
                    <li className='text-lg'><button className=' h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>Android Mobile App Development</span></li>
                     <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>Android Tablet App Development</span></li>
                    <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>Android Wear App Development</span></li>
                    <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>Android TV App Development</span></li>
                   </ul>
                </div>

                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg flex'>
                    <div className='w-[35%]'>
                        <img className='w-28 h-24 rounded-l-xl' src="/ios.jpeg" alt="android" />
                        <h2 className='text-xl font-semibold'>IOS App Development</h2>
                    </div>
                   <ul className='flex flex-col gap-4'>
                    <li className='text-lg'><button className=' h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'> iPhone App Development</span></li>
                     <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'> iPad App Development</span></li>
                    <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>Apple Watch App Development</span></li>
                   </ul>
                </div>
            </div>
        </div>

          <div className='mt-10'>
            <div className='flex flex-col items-center justify-center mb-10'>
            <h1 className='font-semibold text-5xl text-black mb-2'>What We Do</h1>
            <p className='text-black text-xl'>World Class Mobile Apps That Are Featured In App Stores With High Ratings</p>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <Smartphone  size={40} className='text-orange-500' />
                    <h2 className='py-5 text-2xl font-semibold'>Complete Mobile App Development</h2>
                    <p className='tracking-wide'>From start to design, development, support and maintenance, we provide End to End development.</p>
                </div>
                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <Table2  size={40} className='text-orange-500' />
                    <h2 className='py-5 text-2xl font-semibold'>Extensive UI, Practical UX</h2>
                    <p className='tracking-wide'>Enriching client’s User Experience by offering uncomplicated, creative yet focused User Interface.</p>
                </div>
                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <ShieldCheck size={40} className='text-orange-500' />
                    <h2 className='py-5 text-2xl font-semibold'>Security and Privacy</h2>
                    <p className='tracking-wide'>Satisfying clients by ensuring that all work is done under Non-Disclosure Agreements, prioritizing client confidentiality.</p>
                </div>

                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <Expand size={40} className='text-orange-500' />
                    <h2 className='py-5 text-2xl font-semibold'>Room For Expandability</h2>
                    <p className='tracking-wide'>With dynamic trends and changes in technology, scalability is absolutely a must for apps.</p>
                </div>

                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <Shapes size={40} className='text-orange-500' />
                    <h2 className='py-5 text-2xl font-semibold'>Agile Working Pattern</h2>
                    <p className='tracking-wide'>An agile working pattern and delivery method is adopted to guarantee prompt delivery and make room for any changes.</p>
                </div>
                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <Wrench size={40} className='text-orange-500' />
                    <h2 className='py-5 text-2xl font-semibold'>Support and Rescue Missions</h2>
                    <p className='tracking-wide'>Maintenance and support of your application and additional facility of rescuing any pre-existing projects that have not been delivered yet.</p>
                </div>
            </div>
        </div>

         <div className='mt-20'>
            <div className='flex flex-col justify-center items-center mb-10'>
            <h1 className='font-semibold text-5xl text-black '>How we do it</h1>
            <p className='text-gray-800 text-lg pt-2'>Simple to comprehend, we follow the standard procedure</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 sm:grid-cols-2 gap-5'>
          
                <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <h2 className='py-5 text-2xl font-semibold'>Discovery</h2>
                   <ul className='flex flex-col gap-4'>
                    <li className='text-lg'><button className=' h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>Discovery Workshop</span></li>
                     <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>Goal Setting</span></li>
                    <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'> Prototyping</span></li>
                    <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>Project Plan</span></li>
                   </ul>
                </div>
                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <h2 className='py-5 text-2xl font-semibold'>Execution</h2>
                   <ul className='flex flex-col gap-4'>
                    <li className='text-lg'><button className=' h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>Architecture and Design</span></li>
                     <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'> Backend Development</span></li>
                    <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>APIs & Integrations</span></li>           
                   </ul>
                </div>
                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <h2 className='py-5 text-2xl font-semibold'>QA Testing</h2>
                   <ul className='flex flex-col gap-4'>
                    <li className='text-lg'><button className=' h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>Go Live</span></li>
                     <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'> Project Launch</span></li>
                    <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>  User Feedback</span></li>
                    <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>Monitoring</span></li>
                     <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>Operational Testing</span></li>
                   </ul>
                </div>
                     <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <h2 className='py-5 text-2xl font-semibold'>Support</h2>
                   <ul className='flex flex-col gap-4'>
                    <li className='text-lg'><button className=' h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'> SLA Support</span></li>
                     <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'> Operational support</span></li>
                    <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'> On-going Support</span></li>
                    <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>Feedback Integration</span></li>
                   </ul>
                </div>
            </div>
        </div>
    </div>

  )
}

export default MobileDev