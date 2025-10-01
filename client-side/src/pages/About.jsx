import {motion} from 'framer-motion'
import { useEffect } from 'react'
import {Coffee, Factory, Film, GraduationCap, Hammer, Heart, House, Landmark} from 'lucide-react'
// import Map from '../components/Map'
import ContactForm from '../components/contact/Contact'



const variants = {
    initial:{
        y:300,
        opacity:0
    },
    animate:{
        y:100,
        opacity:1,
        transition:{
            duration:0.5,
            // taggerChildren:0.1
        }
    }
}
function About({setIsHome}) {

    useEffect(()=>{
        setIsHome(false)
    },[setIsHome])

    
  return (
    <motion.div variants={variants} initial="initial" whileInView="animate" className='mb-[20rem] m-20 mt-20 text-black'>
        <div className=' flex flex-col items-center justify-center mb-10'>
           <h1 className='font-semibold text-4xl text-orange-600'>About</h1>
        </div>

        <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
            <div>
                <h2 className='font-semibold text-4xl'> Welcome to Erazontech, where innovation meets excellence</h2>
            </div>
            <div className='hover:scale-105 hover:shadow-md hover:shadow-orange-600 p-2 transition-all shadow-md shadow-orange-500'>
                <p className='text-xl'>At Erazontech, we are committed to offering the best price guaranteed for our services, ensuring that businesses receive exceptional value without compromising on quality. Our expert team also provides in-depth financial analysis, empowering you with data-driven insights to make informed decisions and drive your business's growth and profitability.</p>
            </div>
            <div className='hover:scale-105 hover:shadow-md hover:shadow-orange-600 p-2 transition-all shadow-md shadow-orange-500'>
                <p className='text-xl'>At Erazonetech, we are a dynamic team of tech enthusiasts and problem solvers committed to driving positive change through cutting-edge software solutions. Our passion lies in transforming ideas into reality, helping businesses thrive in the digital era.</p>
            </div>
        </div>
        <div>
            <div className='flex flex-col items-center justify-center my-20'>
                <h2  className='font-semibold text-4xl text-orange-600 mb-10'>Industries of Erazonetech</h2>
                <p className='text-xl'>Atom Code specializes in designing and developing custom systems for various industries. We deliver innovative and efficient software solutions tailored to each sector's unique needs.</p>
            </div>

            <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
                
                <div className='bg-white shadow-sm shadow-gray-500 flex flex-col items-center gap-5 p-5'>
                <div className='bg-orange-600 p-5 flex justify-center w-[50%] items-center rounded-md'>
                    <GraduationCap size={50} className='' />
                    </div>
                    <h2 className='text-xl font-sans'>Education</h2>
                </div>

                <div className='bg-white shadow-sm shadow-gray-500 flex flex-col items-center gap-5 p-5'>
                <div className='bg-orange-600 p-5 flex justify-center w-[50%] items-center rounded-md'>
                    <Heart size={50} className='' />
                    </div>
                    <h2 className='text-xl font-sans'>Healthcare</h2>
                </div>

                 <div className='bg-white shadow-sm shadow-gray-500 flex flex-col items-center gap-5 p-5'>
                <div className='bg-orange-600 p-5 flex justify-center w-[50%] items-center rounded-md'>
                    <Landmark size={50} className='' />
                    </div>
                    <h2 className='text-xl font-sans'>Banking</h2>
                </div>

                 <div className='bg-white shadow-sm shadow-gray-500 flex flex-col items-center gap-5 p-5'>
                <div className='bg-orange-600 p-5 flex justify-center w-[50%] items-center rounded-md'>
                    <Factory size={50} className='' />
                    </div>
                    <h2 className='text-xl font-sans'>Manufacturing</h2>
                </div>

                 <div className='bg-white shadow-sm shadow-gray-500 flex flex-col items-center gap-5 p-5'>
                <div className='bg-orange-600 p-5 flex justify-center w-[50%] items-center rounded-md'>
                    <House size={50} className='' />
                    </div>
                    <h2 className='text-xl font-sans'>Real Estate</h2>
                </div>

                   <div className='bg-white shadow-sm shadow-gray-500 flex flex-col items-center gap-5 p-5'>
                <div className='bg-orange-600 p-5 flex justify-center w-[50%] items-center rounded-md'>
                    <Film size={50} className='' />
                    </div>
                    <h2 className='text-xl font-sans'>Entertainment </h2>
                </div>

                 <div className='bg-white shadow-sm shadow-gray-500 flex flex-col items-center gap-5 p-5'>
                <div className='bg-orange-600 p-5 flex justify-center w-[50%] items-center rounded-md'>
                    <Hammer size={50} className='' />
                    </div>
                    <h2 className='text-xl font-sans'>Construction </h2>
                </div>

                 <div className='bg-white shadow-sm shadow-gray-500 flex flex-col items-center gap-5 p-5'>
                <div className='bg-orange-600 p-5 flex justify-center w-[50%] items-center rounded-md'>
                    <Coffee size={50} className='' />
                    </div>
                    <h2 className='text-xl font-sans'>Food & Beverage </h2>
                </div>
            </div>

        <div>
            <div className='flex flex-col w-[80%] shadow-md shadow-slate-200 p-5 hover:scale-105 transition-all m-auto items-center justify-center my-20'>
                <h2 className='font-semibold text-4xl text-orange-600 mb-10'>Team Members</h2>
                <p className='text-xl tracking-wide'>Our development team at Erazonetech is a group of highly skilled and passionate professionals dedicated to delivering innovative and reliable software solutions. With expertise across various technologies and platforms, we collaborate closely with clients to understand their needs and turn their ideas into functional, scalable applications. Whether it's web development, mobile apps, or complex systems, our team ensures top-quality, efficient, and secure results, helping businesses stay ahead in the fast-paced digital world.</p>
            </div>
            <div className='flex justify-center gap-10'>

                <div className='relative flex flex-col items-center group transition-all transform'>
                    <img src="/asfawu.JPG" alt="pp" className='rounded-t-2xl h-[300px] w-[220px] ' />
                    <div className='absolute top-[85%] left-5 bg-white shadow-md shadow-black w-[85%] rounded-md px-2 py-4 flex flex-col items-center'>
                        <h2 className='text-xl text-orange-600 mb-2'>Asfawossen Endale</h2>
                        <p className='italic text-lg mb-1'>CEO</p>
                        <p className='hidden group-hover:block group-hover:opacity-100 transform  transition-all duration-1000 ease-in-out'>Visionary with expertise in strategy team management, and driving company growth and success!</p>
                    </div>
                </div>

                  <div className='relative flex flex-col items-center group transition-all transform'>
                    <img src="nati.jpg" alt="pp" className='rounded-t-2xl h-[300px] w-[250px] ' />
                    <div className='absolute top-[85%] left-5 bg-white shadow-md shadow-black w-[85%] rounded-md px-2 py-4 flex flex-col items-center'>
                        <h2 className='text-xl text-orange-600 mb-2'>Natinael Bimer</h2>
                        <p className='italic text-lg mb-1'>Software Engineer</p>
                        <p className='hidden group-hover:block group-hover:opacity-100 transform  transition-all duration-1000 ease-in-out'>Skilled engineer focused on developing high-performance, sclable applications with clean, and efficient code!</p>
                    </div>
                </div>
                  <div className='relative flex flex-col items-center group transition-all transform'>
                    <img src="/aman.jpg" alt="pp" className='rounded-t-2xl h-[300px] w-[220px] ' />
                    <div className='absolute top-[85%] left-5 bg-white shadow-md shadow-black w-[85%] rounded-md px-2 py-4 flex flex-col items-center'>
                        <h2 className='text-xl text-orange-600 mb-2'>Amanuel Tamirat</h2>
                        <p className='italic text-lg mb-1'>Fullstack Developer</p>
                        <p className='hidden group-hover:block group-hover:opacity-100 transform  transition-all duration-1000 ease-in-out'>Experienced full-stack developer with expertise in building robust and scalable web applications!</p>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        <div>
            {/* <Map/> */}
            <ContactForm/>
        </div>
    </motion.div>
  )
}

export default About