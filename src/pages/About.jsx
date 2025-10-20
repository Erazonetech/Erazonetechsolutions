import {motion} from 'framer-motion'
import { useEffect } from 'react'
import {Coffee, Factory, Film, Goal, GraduationCap, Hammer, Heart, House, Landmark, Telescope} from 'lucide-react'
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
    <motion.div variants={variants} initial="initial" whileInView="animate" className='mb-[20rem] m-20 mt-20 text-black abt'>

        <div className=''>

            <div className='flex justify-center'>
                <h2 className='font-semibold text-4xl bg-gradient-to-r from-blue-300 to-red-400 p-5 rounded-lg mb-16'><span className='text-5xl '>Welcome to Erazontech,</span> <br/>where innovation meets excellence</h2>
            </div>
      
        <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
               <div className='hover:scale-105 hover:shadow-md hover:shadow-orange-600 py-4 px-6 transition-all shadow-md shadow-orange-500'>
                <p className='text-xl'>
                    ERAZONE technology solutions is a forward-thinking IT company dedicated to delivering innovative and customized technology solutions to businesses and organizations.
                    With a strong focus on: 
                    </p>
                    <ul className='list-disc list-inside mt-2 text-lg'>
                        <li>Software development(Web, Mobile, and Desktop Applications), 
                        </li>
                        <li>System integration, and digital transformation, </li>
                        <li>IT Consulting and Strategy Development,</li>
                        <li>Artificial Intelligence and Machine Learning Solutions,</li>
                    </ul>
            </div>

            <div className='hover:scale-105 hover:shadow-md hover:shadow-orange-600 py-4 px-6  transition-all shadow-md shadow-orange-500'>
                <p className='text-xl'>ERAZONE empowers its clients to achieve operational efficiency, scalability, and enhanced user experiences. The company prides itself on its commitment to excellence, customer-centric approach, and its ability to adapt to the evolving technological landscape. </p>
            </div>

              <div className='hover:scale-105 hover:shadow-md hover:shadow-orange-600 py-4 px-6  transition-all shadow-md shadow-orange-500'>
                <p className='text-xl'>Beyond its commercial endeavors, ERAZONE is deeply committed to social responsibility. The company believes in leveraging its expertise to make a positive impact on society, particularly in under served communities. By offering pro Bono services and volunteering its resources, ERAZONE aims to bridge the digital divide and contribute to the betterment of healthcare, education, community development and other critical sectors. </p>
            </div>
            
        </div>
        </div>
        <div>
          
          <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 my-20 '>

            <div className='flex items-center gap-10 bg-gray-100 p-5 text-lg rounded-lg mission'>
                <div className=''>
                    <h2 className='text-xl font-semibold mb-4'>Our Mission</h2>
                    <Goal color='#f97316' size={80}/>
                </div>
                <p className='w-[70%]'>At Erazone Technology Solutions, our mission is to design, develop, and deliver high-impact digital services that drive business growth. We are committed to combining creativity, technology, and strategy to provide our clients with cutting-edge web, software, and marketing solutions that meet their evolving needs.</p>
            </div>

            <div className='flex items-center gap-10 bg-gray-100 p-5 text-lg rounded-lg vission'>
                <div className=''>
                    <h2 className='text-xl font-semibold mb-4'>Our Vision</h2>
                    <Telescope color='#f97316' size={80}/>
                </div>
                <p className='w-[70%]'>To be a globally recognized digital agency known for excellence in innovation, integrity, and impactful solutions.</p>
            </div>

            <div className='flex items-center gap-10 bg-gray-100 p-5 text-lg rounded-lg goal'>
                <div className=''>
                    <h2 className='text-xl font-semibold mb-4'>Our Goal</h2>
                    <Goal color='#f97316' size={80}/>
                </div>
                <p className='w-[70%]'>Delivering forward-thinking technology that produces outstanding results for our clients. Investing in our team's knowledge and skills to fuel innovation and excellence. Earning long-term partnerships through transparent communication and a commitment to shared success. Growing our business in a way that is both profitable and socially responsible.</p>
            </div>
          </div>
            
            <div className='flex flex-col items-center justify-center my-20 indu'>
                <h2  className='font-semibold text-4xl text-orange-600 mb-10'>Industries of Erazonetech</h2>
                <p className='text-xl text-center'>Atom Code specializes in designing and developing custom systems for various industries. We deliver innovative and efficient software solutions tailored to each sector's unique needs.</p>
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
            <div className='flex flex-col w-[80%] shadow-md shadow-slate-200 p-5 hover:scale-105 transition-all m-auto items-center justify-center my-20 team-m'>
                <h2 className='font-semibold text-4xl text-orange-600 mb-10'>Team Members</h2>
                <p className='text-xl tracking-wide'>Our development team at Erazonetech is a group of highly skilled and passionate professionals dedicated to delivering innovative and reliable software solutions. With expertise across various technologies and platforms, we collaborate closely with clients to understand their needs and turn their ideas into functional, scalable applications. Whether it's web development, mobile apps, or complex systems, our team ensures top-quality, efficient, and secure results, helping businesses stay ahead in the fast-paced digital world.</p>
            </div>

            <div className='flex justify-center gap-10 members'>
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