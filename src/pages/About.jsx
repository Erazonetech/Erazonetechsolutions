    // import {motion} from 'framer-motion'
    // import { useEffect } from 'react'
    // import {Coffee, Factory, Film, Goal, GraduationCap, Hammer, Heart, House, Landmark, Telescope} from 'lucide-react'
    // // import Map from '../components/Map'
    // import ContactForm from '../components/contact/Contact'



    // const variants = {
    //     initial:{
    //         y:300,
    //         opacity:0
    //     },
    //     animate:{
    //         y:100,
    //         opacity:1,
    //         transition:{
    //             duration:0.5,
    //             // taggerChildren:0.1
    //         }
    //     }
    // }
    // function About({setIsHome}) {

    //     useEffect(()=>{
    //         setIsHome(false)
    //     },[setIsHome])

        
    // return (
    //     <motion.div variants={variants} initial="initial" whileInView="animate" className='pb-[20rem] p-20 pt-20  abt  bg-slate-950 text-slate-100'>

    //         <div className=''>

    //             <div className='flex justify-center'>
    //                 <h2 className='font-semibold text-4xl bg-gradient-to-r from-blue-300 to-red-400 p-5 rounded-lg mb-16 font-serif'><span className='text-5xl '>Welcome to Erazontech,</span> <br/>where innovation meets excellence</h2>
    //             </div>
        
    //         <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
    //             <div className='hover:scale-105 hover:shadow-md hover:shadow-orange-600 py-4 px-6 transition-all shadow-md shadow-black'>
    //                 <p className='text-xl font-serif'>
    //                     <span className='text-orange-500'>ERAZONE</span> technology solutions is a forward-thinking IT company dedicated to delivering innovative and customized technology solutions to businesses and organizations.
    //                     With a strong focus on: 
    //                     </p>
    //                     <ul className='list-disc list-inside mt-2 text-lg font-serif'>
    //                         <li>Software development(Web, Mobile, and Desktop Applications), 
    //                         </li>
    //                         <li>System integration, and digital transformation, </li>
    //                         <li>IT Consulting and Strategy Development,</li>
    //                         <li>Artificial Intelligence and Machine Learning Solutions,</li>
    //                     </ul>
    //             </div>

    //             <div className='hover:scale-105 hover:shadow-md hover:shadow-orange-600 py-4 px-6  transition-all shadow-md shadow-black'>
    //                 <p className='text-xl font-serif'><span className='text-orange-500'>ERAZONE</span> empowers its clients to achieve operational efficiency, scalability, and enhanced user experiences. The company prides itself on its commitment to excellence, customer-centric approach, and its ability to adapt to the evolving technological landscape. </p>
    //             </div>

    //             <div className='hover:scale-105 hover:shadow-md hover:shadow-orange-600 py-4 px-6  transition-all shadow-md shadow-black'>
    //                 <p className='text-xl font-serif'>Beyond its commercial endeavors, <span className='text-orange-500'>ERAZONE</span> is deeply committed to social responsibility. The company believes in leveraging its expertise to make a positive impact on society, particularly in under served communities. By offering pro Bono services and volunteering its resources, ERAZONE aims to bridge the digital divide and contribute to the betterment of healthcare, education, community development and other critical sectors. </p>
    //             </div>
                
    //         </div>
    //         </div>
    //         <div>
            
    //         <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 my-20 '>

    //             <div className='flex items-center gap-10 bg-gray-100 p-5 text-lg rounded-lg mission'>
    //                 <div className=''>
    //                     <h2 className='text-xl font-semibold mb-4'>Our Mission</h2>
    //                     <Goal color='#f97316' size={80}/>
    //                 </div>
    //                 <p className='w-[70%] font-serif'>At Erazone Technology Solutions, our mission is to design, develop, and deliver high-impact digital services that drive business growth. We are committed to combining creativity, technology, and strategy to provide our clients with cutting-edge web, software, and marketing solutions that meet their evolving needs.</p>
    //             </div>

    //             <div className='flex items-center gap-10 bg-gray-100 p-5 text-lg rounded-lg vission'>
    //                 <div className=''>
    //                     <h2 className='text-xl font-semibold mb-4'>Our Vision</h2>
    //                     <Telescope color='#f97316' size={80}/>
    //                 </div>
    //                 <p className='w-[70%] font-serif'>To be a globally recognized digital agency known for excellence in innovation, integrity, and impactful solutions.</p>
    //             </div>

    //             <div className='flex items-center gap-10 bg-gray-100 p-5 text-lg rounded-lg goal'>
    //                 <div className=''>
    //                     <h2 className='text-xl font-semibold mb-4'>Our Goal</h2>
    //                     <Goal color='#f97316' size={80}/>
    //                 </div>
    //                 <p className='w-[70%] font-serif'>Delivering forward-thinking technology that produces outstanding results for our clients. Investing in our team's knowledge and skills to fuel innovation and excellence. Earning long-term partnerships through transparent communication and a commitment to shared success. Growing our business in a way that is both profitable and socially responsible.</p>
    //             </div>
    //         </div>
                
    //             <div className='flex flex-col items-center justify-center my-20 indu'>
    //                 <h2  className='font-semibold text-4xl text-orange-600 mb-10'>Industries of Erazonetech</h2>
    //                 <p className='text-xl text-center font-serif'>Atom Code specializes in designing and developing custom systems for various industries. We deliver innovative and efficient software solutions tailored to each sector's unique needs.</p>
    //             </div>

    //             <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
                    
    //                 <div className='bg-white shadow-sm shadow-gray-500 flex flex-col items-center gap-5 p-5'>
    //                 <div className='bg-orange-600 p-5 flex justify-center w-[50%] items-center rounded-md'>
    //                     <GraduationCap size={50} className='' />
    //                     </div>
    //                     <h2 className='text-xl font-sans'>Education</h2>
    //                 </div>

    //                 <div className='bg-white shadow-sm shadow-gray-500 flex flex-col items-center gap-5 p-5'>
    //                 <div className='bg-orange-600 p-5 flex justify-center w-[50%] items-center rounded-md'>
    //                     <Heart size={50} className='' />
    //                     </div>
    //                     <h2 className='text-xl font-sans'>Healthcare</h2>
    //                 </div>

    //                 <div className='bg-white shadow-sm shadow-gray-500 flex flex-col items-center gap-5 p-5'>
    //                 <div className='bg-orange-600 p-5 flex justify-center w-[50%] items-center rounded-md'>
    //                     <Landmark size={50} className='' />
    //                     </div>
    //                     <h2 className='text-xl font-sans'>Banking</h2>
    //                 </div>

    //                 <div className='bg-white shadow-sm shadow-gray-500 flex flex-col items-center gap-5 p-5'>
    //                 <div className='bg-orange-600 p-5 flex justify-center w-[50%] items-center rounded-md'>
    //                     <Factory size={50} className='' />
    //                     </div>
    //                     <h2 className='text-xl font-sans'>Manufacturing</h2>
    //                 </div>

    //                 <div className='bg-white shadow-sm shadow-gray-500 flex flex-col items-center gap-5 p-5'>
    //                 <div className='bg-orange-600 p-5 flex justify-center w-[50%] items-center rounded-md'>
    //                     <House size={50} className='' />
    //                     </div>
    //                     <h2 className='text-xl font-sans'>Real Estate</h2>
    //                 </div>

    //                 <div className='bg-white shadow-sm shadow-gray-500 flex flex-col items-center gap-5 p-5'>
    //                 <div className='bg-orange-600 p-5 flex justify-center w-[50%] items-center rounded-md'>
    //                     <Film size={50} className='' />
    //                     </div>
    //                     <h2 className='text-xl font-sans'>Entertainment </h2>
    //                 </div>

    //                 <div className='bg-white shadow-sm shadow-gray-500 flex flex-col items-center gap-5 p-5'>
    //                 <div className='bg-orange-600 p-5 flex justify-center w-[50%] items-center rounded-md'>
    //                     <Hammer size={50} className='' />
    //                     </div>
    //                     <h2 className='text-xl font-sans'>Construction </h2>
    //                 </div>

    //                 <div className='bg-white shadow-sm shadow-gray-500 flex flex-col items-center gap-5 p-5'>
    //                 <div className='bg-orange-600 p-5 flex justify-center w-[50%] items-center rounded-md'>
    //                     <Coffee size={50} className='' />
    //                     </div>
    //                     <h2 className='text-xl font-sans'>Food & Beverage </h2>
    //                 </div>
    //             </div>

    //         <div>
    //             <div className='flex flex-col w-[80%] shadow-md shadow-slate-200 p-5 hover:scale-105 transition-all m-auto items-center justify-center my-20 team-m'>
    //                 <h2 className='font-semibold text-4xl text-orange-600 mb-10'>Team Members</h2>
    //                 <p className='text-xl tracking-wide font-serif'>Our development team at Erazonetech is a group of highly skilled and passionate professionals dedicated to delivering innovative and reliable software solutions. With expertise across various technologies and platforms, we collaborate closely with clients to understand their needs and turn their ideas into functional, scalable applications. Whether it's web development, mobile apps, or complex systems, our team ensures top-quality, efficient, and secure results, helping businesses stay ahead in the fast-paced digital world.</p>
    //             </div>

    //             <div className='flex justify-center gap-10 members'>
    //                 <div className='relative flex flex-col items-center group transition-all transform'>
    //                     <img src="/asfawu.JPG" alt="pp" className='rounded-t-2xl h-[350px] w-[250px] ' />
    //                     <div className='absolute top-[85%] lg:left-0 xl:left-0 bg-white shadow-md shadow-black lg:w-[100%] xl:w-[100%] md:w-1/2 md:left-5 rounded-md px-2 py-4 flex flex-col items-center'>
    //                         <h2 className='text-xl text-orange-600 mb-2 font-serif'>Asfawossen Endale</h2>
    //                         <p className='italic text-lg mb-1 font-serif'>CEO</p>
    //                         <p className='hidden group-hover:block group-hover:opacity-100 transform  transition-all duration-1000 ease-in-out font-serif tracking-normal text-lg'>Visionary with expertise in strategy team management, and driving company growth and success!</p>
    //                     </div>
    //                 </div>

    //                 <div className='relative flex flex-col items-center group transition-all transform'>
    //                     <img src="nati.jpg" alt="pp" className='rounded-t-2xl h-[350px] w-[250px] ' />
    //                     <div className='absolute top-[85%] lg:left-0 xl:left-0 bg-white shadow-md shadow-black lg:w-[100%] xl:w-[100%] md:w-1/2 md:left-5 rounded-md px-2 py-4 flex flex-col items-center'>
    //                         <h2 className='text-xl text-orange-600 mb-2 font-serif'>Natinael Bimer</h2>
    //                         <p className='italic text-lg mb-1 font-serif'>Software Engineer</p>
    //                         <p className='hidden group-hover:block group-hover:opacity-100 transform  transition-all duration-1000 ease-in-out font-serif tracking-normal text-lg'>Skilled engineer focused on developing high-performance, sclable applications with clean, and efficient code!</p>
    //                     </div>
    //                 </div>
    //                 <div className='relative flex flex-col items-center group transition-all transform'>
    //                     <img src="/aman.jpg" alt="pp" className='rounded-t-2xl h-[350px] w-[250px] ' />
    //                     <div className='absolute top-[85%] lg:left-0 xl:left-0 bg-white shadow-md shadow-black lg:w-[100%] xl:w-[100%] md:w-1/2 md:left-5 rounded-md px-2 py-4 flex flex-col items-center'>
    //                         <h2 className='text-xl text-orange-600 mb-2 font-serif'>Amanuel Tamirat</h2>
    //                         <p className='italic text-lg mb-1 font-serif'>Fullstack Developer</p>
    //                         <p className='hidden group-hover:block group-hover:opacity-100 transform  transition-all duration-1000 ease-in-out font-serif tracking-normal text-lg'>Experienced full-stack developer with expertise in building robust and scalable web applications!</p>
    //                     </div>
    //                 </div>
                    
    //             </div>
    //         </div>
    //         </div>
    //         <div>
    //             {/* <Map/> */}
    //             <ContactForm/>
    //         </div>
    //     </motion.div>
    // )
    // }

    // export default About

    import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  Coffee,
  Factory,
  Film,
  Goal,
  GraduationCap,
  Hammer,
  Heart,
  House,
  Landmark,
  Telescope,
} from "lucide-react";
import ContactForm from "../components/contact/Contact";

const variants = {
  initial: { y: 80, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function About({ setIsHome }) {
  useEffect(() => {
    setIsHome(false);
  }, [setIsHome]);

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      className="bg-slate-950 text-slate-100 px-6 lg:px-20 py-24"
    >
      {/* ===== HEADER ===== */}
      <div className="max-w-6xl mx-auto text-center mb-24">
        <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
          Welcome to <span className="text-orange-500">Erazonetech</span>
        </h2>
        <p className="text-xl text-slate-300 font-serif max-w-3xl mx-auto">
          Where innovation meets excellence. We build powerful digital
          solutions that transform businesses and create meaningful impact.
        </p>
      </div>

      {/* ===== ABOUT GRID ===== */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
        <div className="bg-slate-900 p-8 rounded-xl shadow-lg hover:scale-105 transition duration-300">
          <p className="font-serif text-lg leading-relaxed">
            <span className="text-orange-500 font-semibold">ERAZONE</span>{" "}
            Technology Solutions is a forward-thinking IT company delivering
            customized technology solutions.
          </p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-slate-300">
            <li>Web, Mobile & Desktop Development</li>
            <li>System Integration</li>
            <li>IT Consulting & Strategy</li>
            <li>AI & Machine Learning Solutions</li>
          </ul>
        </div>

        <div className="bg-slate-900 p-8 rounded-xl shadow-lg hover:scale-105 transition duration-300">
          <p className="font-serif text-lg leading-relaxed text-slate-300">
            We empower clients with operational efficiency, scalability, and
            enhanced user experiences through innovative digital solutions.
          </p>
        </div>

        <div className="bg-slate-900 p-8 rounded-xl shadow-lg hover:scale-105 transition duration-300">
          <p className="font-serif text-lg leading-relaxed text-slate-300">
            Beyond business, ERAZONE is committed to social responsibility —
            bridging the digital divide through pro-bono work in healthcare,
            education, and community development.
          </p>
        </div>
      </div>

      {/* ===== MISSION / VISION ===== */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-10 mb-28">
        <div className="bg-slate-900 p-8 rounded-xl flex flex-col items-center text-center hover:shadow-orange-500/30 hover:shadow-lg transition">
          <Goal size={60} className="text-orange-500 mb-6" />
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-slate-300">
            Deliver high-impact digital services that combine creativity,
            technology, and strategy to drive business growth.
          </p>
        </div>

        <div className="bg-slate-900 p-8 rounded-xl flex flex-col items-center text-center hover:shadow-orange-500/30 hover:shadow-lg transition">
          <Telescope size={60} className="text-orange-500 mb-6" />
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-slate-300">
            To become a globally recognized digital agency known for innovation,
            integrity, and impactful solutions.
          </p>
        </div>

        <div className="bg-slate-900 p-8 rounded-xl flex flex-col items-center text-center hover:shadow-orange-500/30 hover:shadow-lg transition">
          <Goal size={60} className="text-orange-500 mb-6" />
          <h3 className="text-2xl font-semibold mb-4">Our Goal</h3>
          <p className="text-slate-300">
            Build long-term partnerships through transparent communication,
            continuous innovation, and socially responsible growth.
          </p>
        </div>
      </div>

      {/* ===== INDUSTRIES ===== */}
<div className="px-6 sm:px-10 lg:px-0">

  {/* Title */}
  <div className="max-w-6xl mx-auto text-center mb-14 md:mb-20">
    <h2 className="text-3xl md:text-4xl font-semibold text-orange-500 mb-4 md:mb-6">
      Industries We Serve
    </h2>

    <p className="text-slate-300 text-sm md:text-base max-w-xl md:max-w-2xl mx-auto">
      We design custom systems tailored to each industry's unique needs.
    </p>
  </div>

 {/* Grid */}
<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 md:mb-24">

  {[
    { icon: GraduationCap, title: "Education" },
    { icon: Heart, title: "Healthcare" },
    { icon: Landmark, title: "Banking" },
    { icon: Factory, title: "Manufacturing" },
    { icon: House, title: "Real Estate" },
    { icon: Film, title: "Entertainment" },
    { icon: Hammer, title: "Construction" },
    { icon: Coffee, title: "Food & Beverage" },
  ].map((item, index) => (
    
    <div
      key={index}
      className="bg-slate-900 p-4 sm:p-5 md:p-6 rounded-xl text-center hover:bg-orange-600 transition duration-300 group w-full"
    >
      <item.icon
        size={28}
        className="mx-auto mb-3 sm:mb-4 text-orange-500 group-hover:text-white transition"
      />

      <h3 className="text-sm sm:text-base md:text-lg font-semibold group-hover:text-white leading-snug">
        {item.title}
      </h3>
    </div>

  ))}

</div>

</div>

      {/* ===== TEAM ===== */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-semibold text-orange-500 mb-6">
          Meet Our Team
        </h2>
        <p className="text-slate-300 max-w-3xl mx-auto">
          A passionate team delivering innovative and scalable digital solutions.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-28">
        {[
          {
            name: "Asfawossen Endale",
            role: "CEO",
            img: "/asfawu.JPG",
          },
          {
            name: "Natinael Bimer",
            role: "Software Engineer",
            img: "/nati.jpg",
          },
          {
            name: "Amanuel Tamirat",
            role: "Fullstack Developer",
            img: "/aman.jpg",
          },
        ].map((member, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-[350px] object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                {member.name}
              </h3>
              <p className="italic text-slate-300">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ===== CONTACT ===== */}
      <ContactForm />
    </motion.div>
  );
}

export default About;