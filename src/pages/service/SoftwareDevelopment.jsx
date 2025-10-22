import React, { useEffect } from 'react'
import {CodeXml, Mail, Link, CircleCheckBig, Check} from 'lucide-react'
import { motion } from 'framer-motion';


const techStacks = [
    {
        id:1,
        title:'Language',
        tech:[
            {
                id:1,
                title:'Java',
            },
              {
                id:2,
                title:'C#',
            },
              {
                id:3,
                title:'Python',
            },
              {
                id:4,
                title:'JavaScript',
            },
              {
                id:5,
                title:'TypeScript',
            },
              {
                id:6,
                title:'CSS',
            },
              {
                id:7,
                title:'HTML',
            },
        ]
    },
     {
        id:2,
        title:'Framework',
        tech:[
            {
                id:1,
                title:'Node JS',
            },
              {
                id:2,
                title:'Flask',
            },
              {
                id:3,
                title:'Angular',
            },
              {
                id:4,
                title:'Spring',
            },
              {
                id:5,
                title:'React JS',
            },
        ]
    },
     {
        id:3,
        title:'Database',
        tech:[
            {
                id:1,
                title:'MySQL',
            },
              {
                id:2,
                title:'PostgreSQL',
            },
              {
                id:3,
                title:'Firebase',
            },
              {
                id:4,
                title:'SQLite',
            },
              {
                id:5,
                title:'MongoDB',
            },
             
        ]
    },
     {
        id:4,
        title:'Mobile',
        tech:[
            {
                id:1,
                title:'Android (Java)',
            },
              {
                id:2,
                title:'React Native',
            }
        ]
    },
    {
        id:5,
        title:'Tools',
        tech:[
            {
                id:1,
                title:'Material UI',
            },
              {
                id:2,
                title:'Redux',
            },
              {
                id:3,
                title:'Git',
            },
              {
                id:4,
                title:'Jira',
            },
              {
                id:5,
                title:'Microservices',
            },
            {
                id:6,
                title:'NGRX'
            },
            {
                id:7,
                title:'GitHub'
            }
             
        ]
    },
    {
        id:6,
        title:'Infrastructure',
        tech:[
            {
                id:1,
                title:'Docker',
            },
              {
                id:2,
                title:'Goolge Cloude',
            },
              {
                id:3,
                title:'AWS',
            },
              {
                id:4,
                title:'Railway',
            }, 
        ]
    },
    {
        id:7,
        title:'UIUX',
        tech:[
            {
                id:1,
                title:'Adobe XD',
            },
              {
                id:2,
                title:'Figma',
            },     
        ]
    },
]

function SoftwareDevelopment({isHome,setIsHome}) {
 useEffect(()=>{
    setIsHome(false)
 },[setIsHome])

  return (
    <div className='mt-40 mx-10 mb-20 font-serif'>
        <div className='flex justify-between xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-[10%] home-service'>
           <div className='mb-5'>
             <h1 className='text-5xl pb-5 text-gray-900'>Custom Software Development</h1>
            <p className='text-xl text-gray-700'>Custom software development focuses on creating tailor-made solutions that meet the unique needs of a business. It involves designing, developing, and deploying software applications specifically built to solve specific challenges. By leveraging custom-built solutions, businesses can improve efficiency, scalability, and overall performance.</p>
           </div>
           {/* <div className='shadow-red-200'>
           </div> */}
           <img className='bg-[#afaaaa] transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-orange-800 rounded-2xl h-[350px]' src="/custom-softwared.png" alt="custom software" />
        </div>

        <div>
            <h1 className='text-2xl py-20 text-gray-950'>Choosing Erazone as a Custom Software Development Partner</h1>
            <div className='bg-[#131212] p-5 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 rounded-lg transition-all duration-200 shadow-sm shadow-orange-800'>
                <div className='flex gap-5'>
                    <div className='border-orange-500 border-e hover:border-x  p-2 rounded-full h-[80px]'>
                    <CircleCheckBig size={60} className='h-[100%]' />
                    </div>
                    <div className='text-white'>
                        <h2 className='text-2xl font-semibold pb-5'>5+ Years as a Custom Software Development Company</h2>
                        <p className='tracking-[0.05rem] font-semibold text-gray-300' >With over 5 years of experience, we specialize in delivering tailored software solutions. Our expertise ensures that businesses achieve seamless, innovative, and efficient digital transformations.</p>
                    </div>
                </div>

                <div className='flex gap-5'>
                    <div className='border-orange-500 border-e hover:border-x  p-2 rounded-full h-[80px]'>
                    <CodeXml size={60} className='h-[100%]' />
                    </div>
                    <div className='text-white'>
                        <h2 className='text-2xl font-semibold pb-5'>High-Level of Technical Competency</h2>
                        <p className='tracking-[0.05rem] font-semibold text-gray-300'>Our team possesses exceptional technical expertise, ensuring top-quality software solutions. We leverage advanced tools and methodologies to deliver innovative and reliable results.</p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='border-orange-500 border-e hover:border-x  p-2 rounded-full h-[80px]'>
                    <Link size={60} className='h-[100%]' />
                    </div>
                    <div className='text-white'>
                        <h2 className='text-2xl font-semibold pb-5'>Partnerships That Last an Average of 3+ Years</h2>
                        <p className='tracking-[0.05rem] font-semibold text-gray-300'>We build long-lasting relationships, with partnerships typically lasting over 3 years. Our commitment to quality and customer satisfaction ensures enduring collaborations and mutual growth.</p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='border-orange-500 border-e hover:border-x  p-2 rounded-full h-[80px]'>
                    <Mail size={60} className='h-[100%]'  />
                    </div>
                    <div className='text-white'>
                        <h2 className='text-2xl font-semibold pb-5'>20+ Successful Projects in Different Industries</h2>
                        <p className='tracking-[0.05rem] font-semibold text-gray-300'>We have successfully delivered over 20 projects across diverse industries. Our experience ensures tailored solutions that meet the unique challenges of each sector.</p>
                    </div>
                </div>
            </div>

        </div>

         <div className='mt-20'>
            <h1 className='text-2xl py-10 text-gray-900'>Industries We Create Software For</h1>
            <div className='grid xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5'>

                 <div className='relative overflow-hidden flex gap-5 p-5  bg-[#c7c4c4] transition-all duration-200 shadow-sm shadow-orange-800 rounded-lg before:absolute before:inset-0 before:bg-orange-800 before:transform before:origin-bottom before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:ease-in-out cursor-pointer'>
                        <div className=' relative z-10 '>
                        <h2 className='text-2xl font-semibold pb-5 text-gray-900'>Education</h2>
                        <p className='tracking-[0.05rem] font-semibold text-gray-800' >We create software solutions that enhance learning experiences and streamline educational management for institutions of all sizes.</p>
                    </div>
                 </div>

                <div className='relative overflow-hidden flex gap-5 p-5  bg-[#c7c4c4] transition-all duration-200 shadow-sm shadow-orange-800 rounded-lg before:absolute before:inset-0 before:bg-orange-800 before:transform before:origin-bottom before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:ease-in-out cursor-pointer'>
                    <div className=' relative z-10 '>
                      <h2 className='text-2xl font-semibold pb-5 text-gray-900'>Healthcare</h2>
                      <p className='tracking-[0.05rem] font-semibold text-gray-800'>
                         Our software helps healthcare providers optimize patient care, improve efficiency, and meet evolving regulatory requirements</p>
                    </div>
                </div>
                <div className='relative overflow-hidden flex gap-5 p-5  bg-[#c7c4c4] transition-all duration-200 shadow-sm shadow-orange-800 rounded-lg before:absolute before:inset-0 before:bg-orange-800 before:transform before:origin-bottom before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:ease-in-out cursor-pointer'>
                    <div className=' relative z-10 '>
                        <h2 className='text-2xl font-semibold pb-5 text-gray-900'>Banking</h2>
                        <p className='tracking-[0.05rem] font-semibold text-gray-800'>We design secure and scalable banking solutions that streamline financial transactions, improve customer experience, and ensure compliance.</p>
                    </div>
                </div>
                <div className='relative overflow-hidden flex gap-5 p-5  bg-[#c7c4c4] transition-all duration-200 shadow-sm shadow-orange-800 rounded-lg before:absolute before:inset-0 before:bg-orange-800 before:transform before:origin-bottom before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:ease-in-out cursor-pointer'>
                    <div className='relative z-10 '>
                        <h2 className='text-2xl font-semibold pb-5 text-gray-900'>Manufacturing</h2>
                        <p className='tracking-[0.05rem] font-semibold text-gray-800'>Our software drives operational efficiency in manufacturing, enabling smarter production processes and real-time data management.</p>
                    </div>
                </div>
                <div className='relative overflow-hidden flex gap-5 p-5  bg-[#c7c4c4] transition-all duration-200 shadow-sm shadow-orange-800 rounded-lg before:absolute before:inset-0 before:bg-orange-800 before:transform before:origin-bottom before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:ease-in-out cursor-pointer'>
                    <div className='relative z-10 '>
                        <h2 className='text-2xl font-semibold pb-5 text-gray-900'>Real Estate</h2>
                        <p className='tracking-[0.05rem] font-semibold text-gray-800'>We deliver innovative software solutions for real estate management, streamlining property sales, rentals, and client relationships</p>
                    </div>
                </div>
                <div className='relative overflow-hidden flex gap-5 p-5  bg-[#c7c4c4] transition-all duration-200 shadow-sm shadow-orange-800 rounded-lg before:absolute before:inset-0 before:bg-orange-800 before:transform before:origin-bottom before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:ease-in-out cursor-pointer'>
                    <div className='relative z-10 '>
                        <h2 className='text-2xl font-semibold pb-5 text-gray-900'>Entertainment</h2>
                        <p className='tracking-[0.05rem] font-semibold text-gray-800'>We create software that enhances content delivery, user engagement, and the overall entertainment experience for media companies and platforms</p>
                    </div>
                </div>
                <div className='relative overflow-hidden flex gap-5 p-5  bg-[#c7c4c4] transition-all duration-200 shadow-sm shadow-orange-800 rounded-lg before:absolute before:inset-0 before:bg-orange-800 before:transform before:origin-bottom before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:ease-in-out cursor-pointer'>
                    <div className='relative z-10 '>
                        <h2 className='text-2xl font-semibold pb-5 text-gray-900'>Construction</h2>
                        <p className='tracking-[0.05rem] font-semibold text-gray-800'>Our software solutions optimize project management, budgeting, and resource allocation in the construction industry, improving project outcomes</p>
                    </div>
                </div>
                <div className='relative overflow-hidden flex gap-5 p-5  bg-[#c7c4c4] transition-all duration-200 shadow-sm shadow-orange-800 rounded-lg before:absolute before:inset-0 before:bg-orange-800 before:transform before:origin-bottom before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:ease-in-out cursor-pointer'>
                    <div className='relative z-10 '>
                        <h2 className='text-2xl font-semibold pb-5 text-gray-900'>Food & Beverage</h2>
                        <p className='tracking-[0.05rem] font-semibold text-gray-800'>We provide software solutions that enhance supply chain management, streamline ordering processes, and improve customer experience in the food and beverage industry.</p>
                    </div>
                </div>
            </div>

        </div>
        <div className='py-20'>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-semibold text-gray-900 text-center mb-16"
                viewport={{ once: true }}
            >
                Our tech stack
            </motion.h1>
            <div className="space-y-12">
                {techStacks.map((stack, index) => (
            <motion.div
                key={stack.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center justify-between gap-10"
            >
                {/* Left side: Title card */}
                <motion.div
                initial={{ scale: 0.9, rotate: -5 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-white h-40 flex items-center justify-center p-10 w-[20%] shadow-sm shadow-orange-800 rounded-2xl cursor-pointer stack-title"
                >
                <h2 className="text-2xl text-black font-bold">{stack.title}</h2>
                </motion.div>

                {/* Right side: Tech list */}
                <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                viewport={{ once: true }}
                className="bg-white h-40 flex items-start p-6 w-[80%] stack-list shadow-sm shadow-orange-800 rounded-2xl text-black overflow-hidden"
                >
                <motion.ul
                    className="grid grid-cols-3 gap-5 w-full "
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2,
                        },
                    },
                    }}
                    viewport={{ once: true }}
                >
                    {stack.tech.map((technology, techIndex) => (
                    <motion.li
                        key={`${stack.id}-${techIndex}`} // Unique key for each li
                        variants={{
                        hidden: { opacity: 0, y: 20, scale: 0.8 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                            type: 'spring',
                            stiffness: 300,
                            damping: 20,
                            },
                        },
                        }}
                        whileHover={{ 
                        scale: 1.05, 
                        x: 5,
                        transition: { duration: 0.2 },
                        color: '#f97316' // Orange hover for text
                        }}
                        className="flex items-center gap-2 text-xl font-medium"
                    >
                        <Check size={20} className="text-orange-700 flex-shrink-0" />
                        <span>{technology.title}</span>
                    </motion.li>
                    ))}
                </motion.ul>
                </motion.div>
            </motion.div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default SoftwareDevelopment