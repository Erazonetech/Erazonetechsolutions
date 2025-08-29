import { Braces, CodeXml, Cog, Layers, ShieldCheck, Wrench } from 'lucide-react'
import React, { useEffect } from 'react'

function WebDevelopment({setIsHome}) {

 useEffect(()=>{
    setIsHome(false)
 },[setIsHome])

  return (
    <div className='pt-40 px-20 pb-20 bg-slate-50'>
        <div className='flex justify-between'>
            <div className='max-w-[55%] mt-10 bg-inherit'>
                <h2 className='text-4xl font-semibold pb-5 text-gray-700 '>Web Development</h2>
                <p className='text-xl text-gray-600'>Our Agile experts can create bespoke applications, platforms and products to meet the requirements of your business or new venture.</p>
            </div>
            <img className='bg-[#0e0e0e] transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-black rounded-2xl w-[35%] h-[300px]' src="/web-dev.jpeg" alt="web-dev" />
        </div>

        
        <div className='mt-10'>
            <div className='flex justify-center '>
            <h1 className='font-semibold text-5xl text-black mb-10'>What We Do</h1>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <Layers size={40} className='text-orange-500' />
                    <h2 className='py-5 text-2xl font-semibold'>Full Stack Development</h2>
                    <p className='tracking-wide'>Use of basic frontend prototyping to high performing backend by committed group of developers utilizing latest technologies.</p>
                </div>
                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <Braces size={40} className='text-orange-500' />
                    <h2 className='py-5 text-2xl font-semibold'>Backend Code</h2>
                    <p className='tracking-wide'>Spring Boot backend with MySQL stores services data, processes contacts, sends emails, and exposes REST APIs for web development services.</p>
                </div>
                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <CodeXml size={40} className='text-orange-500' />
                    <h2 className='py-5 text-2xl font-semibold'>Frontend Code</h2>
                    <p className='tracking-wide'>React.js frontend with responsive design, dynamic service listings, interactive contact forms, and API integration for Erazonetech's web development services.</p>
                </div>
                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <ShieldCheck size={40} className='text-orange-500' />
                    <h2 className='py-5 text-2xl font-semibold'>QA Testing</h2>
                    <p className='tracking-wide'>Guaranteeing high quality standard by performing rigorous testing and complete QA analysis.</p>
                </div>
                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <Cog size={40} className='text-orange-500' />
                    <h2 className='py-5 text-2xl font-semibold'>QA Testing and Maintenance</h2>
                    <p className='tracking-wide'>Maintenance and management of your app and its features with specified SLAs to reduce downtime.</p>
                </div>
                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <Wrench size={40} className='text-orange-500' />
                    <h2 className='py-5 text-2xl font-semibold'>Rescue Missions</h2>
                    <p className='tracking-wide'>A project that requires a quick fix and recovery will be provided with trained development team and given support.</p>
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

export default WebDevelopment