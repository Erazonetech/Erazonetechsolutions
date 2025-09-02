import React, { useEffect } from 'react'
import {CodeXml, Mail, Link, CircleCheckBig, Check} from 'lucide-react'

function SoftwareDevelopment({isHome,setIsHome}) {


 useEffect(()=>{
    setIsHome(false)
 },[setIsHome])

  return (
    <div className='mt-40 mx-10 mb-20'>
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
        <div>
            <h1 className='text-3xl font-semibold py-20 text-gray-900'>Our tech stack</h1>
            <div>
              <div className='flex items-center justify-between gap-10 pb-10 '>
                <div className='bg-[#ffffff] h-40 flex items-center justify-center p-10 w-[20%] shadow-sm shadow-orange-800 rounded-2xl'>
                <h1 className='text-2xl text-black'>Language</h1>
                </div>
                  <div className='bg-[#ffffff] h-40 flex items-start p-6 w-[80%] shadow-sm shadow-orange-800 rounded-2xl gap-[20%] text-black'>
                    <ul>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700 '/> <span className='text-xl'>Java</span></li>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>C#</span> </li>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>Python</span></li>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>JavaScript</span></li>
                    </ul>
                    <ul className=''>
                        
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>TypeScript</span></li>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>CSS</span></li>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>HTML</span></li>
                    </ul>
                  </div>
                
                </div>

                <div className='flex items-center justify-between gap-10 pb-10 text-black'>
                <div className='bg-[#ffffff] h-40 flex items-center justify-center p-10 w-[20%] shadow-sm shadow-orange-800 rounded-2xl '>
                <h1 className='text-2xl'>Framework</h1>
                </div>
                  <div className='bg-[#ffffff] h-40 flex items-start p-6 w-[80%] shadow-sm shadow-orange-800 rounded-2xl gap-[20%]'>
                    <ul>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700 '/> <span className='text-xl'>Node JS</span></li>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>Flask</span> </li>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>Angular</span></li>
                    </ul>
                    <ul className=''>  
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>Spring</span></li>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>React JS</span></li>                     
                    </ul>
                  </div>
                </div>

                 <div className='flex items-center justify-between gap-10 pb-10 text-black'>
                <div className='bg-[#ffffff] h-40 flex items-center justify-center p-10 w-[20%] shadow-sm shadow-orange-800 rounded-2xl'>
                <h1 className='text-2xl'>Database</h1>
                </div>
                  <div className='bg-[#ffffff] h-40 flex items-start p-6 w-[80%] shadow-sm shadow-orange-800 rounded-2xl gap-[20%]'>
                    <ul>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700 '/> <span className='text-xl'>MySQL</span></li>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>PostgreSQL</span> </li>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>Firebase</span></li>
                    </ul>
                    <ul className=''> 
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>SQLite</span></li>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>MongoDB</span></li>
                    </ul>
                  </div>
                
                </div>

                 <div className='flex items-center justify-between gap-10 pb-10 text-black'>
                <div className='bg-[#ffffff] h-40 flex items-center justify-center p-10 w-[20%] shadow-sm shadow-orange-800 rounded-2xl'>
                <h1 className='text-2xl'>Mobile</h1>
                </div>
                  <div className='bg-[#ffffff] h-40 flex items-start p-6 w-[80%] shadow-sm shadow-orange-800 rounded-2xl gap-[20%]'>
                    <ul>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700 '/> <span className='text-xl'>Android (Java)</span></li>                    
                    </ul>
                    <ul className=''>                     
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>React Native</span></li>                    
                    </ul>
                  </div>
                
                </div>

                 <div className='flex items-center justify-between gap-10 pb-10 text-black'>
                <div className='bg-[#ffffff] h-40 flex items-center justify-center p-10 w-[20%] shadow-sm shadow-orange-800 rounded-2xl'>
                <h1 className='text-2xl'>Tools</h1>
                </div>
                  <div className='bg-[#ffffff] h-40 flex items-start p-6 w-[80%] shadow-sm shadow-orange-800 rounded-2xl gap-[20%]'>
                    <ul>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700 '/> <span className='text-xl'>Material UI</span></li>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>Redux</span> </li>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>Git</span></li>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>Jira</span></li>
                    </ul>
                    <ul className=''>
                        
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>Microservices</span></li>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>NGRX</span></li>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>GitHub</span></li>
                    </ul>
                  </div>
                
                </div>

                  <div className='flex items-center justify-between gap-10 pb-10 text-black'>
                <div className='bg-[#ffffff] h-40 flex items-center justify-center p-10 w-[20%] shadow-sm shadow-orange-800 rounded-2xl'>
                <h1 className='text-2xl'>Infrastructure</h1>
                </div>
                  <div className='bg-[#ffffff] h-40 flex items-start p-6 w-[80%] shadow-sm shadow-orange-800 rounded-2xl gap-[20%]'>
                    <ul>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700 '/> <span className='text-xl'>Docker</span></li>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>Goolge Cloude</span> </li>
                    </ul>
                    <ul className=''>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>AWS</span></li>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>Railway</span></li>
                    </ul>
                  </div>
                
                </div>

                  <div className='flex items-center justify-between gap-10 pb-10 text-black'>
                <div className='bg-[#ffffff] h-40 flex items-center justify-center p-10 w-[20%] shadow-sm shadow-orange-800 rounded-2xl'>
                <h1 className='text-2xl'>UIUX</h1>
                </div>
                  <div className='bg-[#ffffff] h-40 flex items-start p-6 w-[80%] shadow-sm shadow-orange-800 rounded-2xl gap-[20%]'>
                    <ul>
                        <li className='flex gap-1'><Check size={20} className='text-orange-700 '/> <span className='text-xl'>Adobe XD</span></li>
                    </ul>
                    <ul className=''>
                        
                        <li className='flex gap-1'><Check size={20} className='text-orange-700'/> <span className='text-xl'>Figma</span></li>
                    </ul>
                  </div>
                
                </div>

            </div>
        </div>
    </div>
  )
}

export default SoftwareDevelopment