import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Portfolios({setIsHome}) {

    useEffect(()=>{
        setIsHome(false)
    },[setIsHome])
  return (
    <div className='mt-40 mx-20 mb-20  text-black'>
        <div className='grid lg:grid-cols-2 xl:grid-cols-2 gap-20 md:grid-cols-1 sm:grid-cols-1'>
            <div >
                <h2 className='text-5xl font-semibold tracking-wide mb-5'>Projects that we co-created with our clients</h2>
                <p className='text-xl tracking-wide'>We developed 100 + projects for businesses in more than 10+ industries. Whether you’re looking for inspiration or considering us as your partner, these case studies highlight the quality and dedication we bring to every project.</p>
            </div>
            <img className='lg:w-[80%] xl:lg:w-[80%] sm:lg:w-[80%] md:lg:w-[80%] rounded-lg' src="/projects.png" alt="projects" />
        </div>

        <div className='my-10 mt-20 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10'>
            <div className=' bg-white shadow-md shadow-slate-300  group relative transition duration-300 overflow-hidden'>
                <div className='transition duration-0 px-10 pt-10 pb-20'>
                    <h2 className='text-xl pb-5 font-semibold'>Stock management system </h2>
                    <img className='h-[100%] rounded-3xl' src="/projects.png" alt="" />
                </div>

                <div  className='absolute top-10 left-0 hidden group-hover:block group-hover:opacity-100 transform  transition-all duration-1000 ease-in-out backdrop-blur-md h-[100%] px-10'>
                    <div className='flex gap-5 mb-5'>
                        <div>
                            <h2 className='text-xl font-semibold'>Timeline</h2>
                            <p className='text-xl'>3 months</p>
                        </div>
                        <div>
                            <h1  className='text-xl font-semibold'>Technologies</h1>
                            <p className='text-md'>React, JavaScript, Firebase,Bootstrap, CSS3</p>
                        </div>
                    </div>
                    <div className='mb-5 text-lg'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa delectus minus! Ipsa molestiae voluptatibus praesentium numquam repellat veniam itaque.</p>
                    </div>
                    <Link to={'/'} className='bg-orange-600 rounded-l-full rounded-r-full text-white py-4 px-5'>Watch product video</Link>
                </div>
            </div>

            <div className=' bg-white shadow-md shadow-slate-300  group relative transition duration-300 overflow-hidden'>
                <div className='transition duration-0 px-10 pt-10 pb-20'>
                    <h2 className='text-xl pb-5 font-semibold'>Stock management system </h2>
                    <img className='h-[100%] rounded-3xl' src="/projects.png" alt="" />
                </div>

                <div  className='absolute top-10 left-0 hidden group-hover:block group-hover:opacity-100 transform  transition-all duration-1000 ease-in-out backdrop-blur-md h-[100%] px-10'>
                    <div className='flex gap-5 mb-5'>
                        <div>
                            <h2 className='text-xl font-semibold'>Timeline</h2>
                            <p className='text-xl'>3 months</p>
                        </div>
                        <div>
                            <h1  className='text-xl font-semibold'>Technologies</h1>
                            <p className='text-md'>React, JavaScript, Firebase,Bootstrap, CSS3</p>
                        </div>
                    </div>
                    <div className='mb-5 text-lg'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa delectus minus! Ipsa molestiae voluptatibus praesentium numquam repellat veniam itaque.</p>
                    </div>
                    <Link to={'/'} className='bg-orange-600 rounded-l-full rounded-r-full text-white py-4 px-5'>Watch product video</Link>
                </div>
            </div>

          <div className=' bg-white shadow-md shadow-slate-300  group relative transition duration-300 overflow-hidden'>
                <div className='transition duration-0 px-10 pt-10 pb-20'>
                    <h2 className='text-xl pb-5 font-semibold'>Stock management system </h2>
                    <img className='h-[100%] rounded-3xl' src="/projects.png" alt="" />
                </div>

                <div  className='absolute top-10 left-0 hidden group-hover:block group-hover:opacity-100 transform  transition-all duration-1000 ease-in-out backdrop-blur-md h-[100%] px-10'>
                    <div className='flex gap-5 mb-5'>
                        <div>
                            <h2 className='text-xl font-semibold'>Timeline</h2>
                            <p className='text-xl'>3 months</p>
                        </div>
                        <div>
                            <h1  className='text-xl font-semibold'>Technologies</h1>
                            <p className='text-md'>React, JavaScript, Firebase,Bootstrap, CSS3</p>
                        </div>
                    </div>
                    <div className='mb-5 text-lg'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa delectus minus! Ipsa molestiae voluptatibus praesentium numquam repellat veniam itaque.</p>
                    </div>
                    <Link to={'/'} className='bg-orange-600 rounded-l-full rounded-r-full text-white py-4 px-5'>Watch product video</Link>
                </div>
            </div>

            <div className=' bg-white shadow-md shadow-slate-300  group relative transition duration-300 overflow-hidden'>
                <div className='transition duration-0 px-10 pt-10 pb-20'>
                    <h2 className='text-xl pb-5 font-semibold'>Stock management system </h2>
                    <img className='h-[100%] rounded-3xl' src="/projects.png" alt="" />
                </div>

                <div  className='absolute top-10 left-0 hidden group-hover:block group-hover:opacity-100 transform  transition-all duration-1000 ease-in-out backdrop-blur-md h-[100%] px-10'>
                    <div className='flex gap-5 mb-5'>
                        <div>
                            <h2 className='text-xl font-semibold'>Timeline</h2>
                            <p className='text-xl'>3 months</p>
                        </div>
                        <div>
                            <h1  className='text-xl font-semibold'>Technologies</h1>
                            <p className='text-md'>React, JavaScript, Firebase,Bootstrap, CSS3</p>
                        </div>
                    </div>
                    <div className='mb-5 text-lg'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa delectus minus! Ipsa molestiae voluptatibus praesentium numquam repellat veniam itaque.</p>
                    </div>
                    <Link to={'/'} className='bg-orange-600 rounded-l-full rounded-r-full text-white py-4 px-5'>Watch product video</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolios