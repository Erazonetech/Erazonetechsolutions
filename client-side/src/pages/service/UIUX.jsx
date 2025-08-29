import { AppWindow, Code, Frame, ListChecks, MonitorCheck, Route } from 'lucide-react'
import React, { useEffect } from 'react'

function UIUX({setIsHome}) {

  useEffect(()=>{
    setIsHome(false)
  },[setIsHome])

  return (
    <div className='pt-40 px-20 pb-20 bg-slate-50'>
         <div className='flex justify-between'>
           <div className='max-w-[50%]'>
             <h1 className='text-5xl pb-5 text-gray-900 mt-10'>Mobile Development</h1>
            <p className='text-xl text-gray-700 mt-5'>We deliver more than just apps. We deliver experiences. Our fast, responsive and highly scalable mobile app development will help you get ahead of the curve in no time!</p>
           </div>
           <img className='bg-[#afaaaa] transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-orange-800 rounded-2xl w-[40%] h-[350px]' src="/ui-ux.webp" alt="Mobile dev" />
        </div>
          <div className='mt-10'>
            <div className='flex flex-col items-center justify-center mb-10'>
            <h1 className='font-semibold text-5xl text-black mb-2'>What We Do</h1>
            <p className='text-black text-xl'>Exceptional UI/UX Designs That Enhance User Engagement and Deliver Seamless Experiences Across Platforms.</p>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <Route  size={40} className='text-orange-500' />
                    <h2 className='py-5 text-2xl font-semibold'>User Journey Mapping</h2>
                    <p className='tracking-wide'>Creating detailed user personas from in-depth research to craft a comprehensive user journey map.</p>
                </div>
                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <Frame  size={40} className='text-orange-500' />
                    <h2 className='py-5 text-2xl font-semibold'>Rapid Prototyping</h2>
                    <p className='tracking-wide'>Transforming your concepts into interactive prototypes and refining them with feedback-driven wireframes to minimize errors.</p>
                </div>
                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <AppWindow size={40} className='text-orange-500' />
                    <h2 className='py-5 text-2xl font-semibold'>UX Design</h2>
                    <p className='tracking-wide'>Providing cutting-edge technology to create immersive user experiences while addressing both current and future challenges.</p>
                </div>

                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <MonitorCheck size={40} className='text-orange-500' />
                    <h2 className='py-5 text-2xl font-semibold'>UI Design</h2>
                    <p className='tracking-wide'>Enhancing user interaction by simplifying complex designs and delivering an intuitive and user-friendly interface.</p>
                </div>

                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <Code size={40} className='text-orange-500' />
                    <h2 className='py-5 text-2xl font-semibold'>Development</h2>
                    <p className='tracking-wide'>Collaborating between skilled designers and developers to create the highest quality products for our clients.</p>
                </div>
                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <ListChecks size={40} className='text-orange-500' />
                    <h2 className='py-5 text-2xl font-semibold'>Testing</h2>
                    <p className='tracking-wide'>Implementing improvements based on business needs through rigorous QA testing and data-driven insights.</p>
                </div>
            </div>
        </div>

         <div className='mt-20'>
            <div className='flex flex-col justify-center items-center mb-10'>
            <h1 className='font-semibold text-5xl text-black '>How we do it</h1>
            <p className='text-gray-800 text-xl pt-2 text-center'>Our expertise lies in creating user-centered UI/UX designs through in-depth research and collaboration. We deliver intuitive, visually appealing experiences that meet the needs of diverse industries.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-2 gap-5'>
          
                <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <h2 className='py-5 text-2xl font-semibold'>Discovery</h2>
                   <ul className='flex flex-col gap-4'>
                    <li className='text-lg'><button className=' h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'> Understanding your business and it’s pain points</span></li>
                     <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>Interviews & observations</span></li>
                    <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'> Functional requirements</span></li>
                   </ul>
                </div>
                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <h2 className='py-5 text-2xl font-semibold'>Wireframes</h2>
                   <ul className='flex flex-col gap-4'>
                    <li className='text-lg'><button className=' h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>Concept sketching</span></li>
                     <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>System/Process flow</span></li>
                    <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'> Information architecture</span></li>           
                   </ul>
                </div>
                  <div className='bg-white p-10  text-black shadow-sm shadow-gray-500 rounded-lg hover:shadow-lg'>
                    <h2 className='py-5 text-2xl font-semibold'>Build and Iterate</h2>
                   <ul className='flex flex-col gap-4'>
                    <li className='text-lg'><button className=' h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>Interaction design</span></li>
                     <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>High-fidelity mockups</span></li>
                    <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>Interactive prototypes</span></li>
                    <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>UI Style guide/brand identity</span></li>
                     <li className='text-lg'><button className='h-3 w-3 bg-orange-600 rounded-full'></button><span className='px-1'>Operational Testing</span></li>
                   </ul>
                </div>

            </div>
        </div>
    </div>
  )
}

export default UIUX