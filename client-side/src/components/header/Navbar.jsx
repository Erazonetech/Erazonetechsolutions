import { useEffect, useState } from "react";
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'
import { Link } from "react-router-dom";





function Navbar({sidebar,setSidebar, isHome}) {

//  const [sidebar, setSidebar] = useState(false);
const [show, setShow] = useState(false);

 useEffect(()=>{
 const handleScroll = () => {
    if (window.scrollY > 160) {
      setShow(true);
      
    } else {
      setShow(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return ()=>{
    window.removeEventListener("scroll", handleScroll)
  }
 },[])
  const showSidebar = () => {setSidebar(!sidebar)
  };

  return (
    <div className="header menu-opened ">
		<div className={` flex justify-between `}> 
      <div className={` ${show && 'bg-black'} ${!isHome && 'bg-black'} fixed top-0 left-0 right-0  z-[1000]`}>
      <div className={`flex items-center justify-center gap-[5%] -ml-80`}>
            <Link to={'/'}>
            <img className="header__logo logo mt-1 "  src="/logo-design.png" alt="logo"/>
            </Link>
        <div className="flex gap-10 ">
           <Link to ='/' className='text-white hover:border-b-2 border-[#ce5311]'>    
           <span className='text-white text-xl hover:text-[#ce5311]'>Home</span>
          </Link>
          <Link to ='/' className='dropdown'>
             <span className=' text-white text-xl hover:text-[#ce5311] hover:border-b-2 border-[#ce5311] '>Services</span>
             <div className="dropdown-content mt-8
             w-[1100px] h-[300px] flex items-center rounded-lg">
             <div className="flex items-center">
                <div className="w-[50%] text-gray-black flex flex-col items-center p-5">
                  <h1 className="text-2xl font-semibold text-black p-5">Our Services</h1>
                  <p className="text-black text-xl">At Erazone, we provide wide range of IT services tailored to meet your business needs. Our skilled professionals are dedicated to delivering exceptional results that exceed your expections</p>
                </div>
                <div className="pt-10">
                  <Link to ='/services/custom-software-development' className="text-black">Custom Software Development </Link>
                  <Link to='/services/web-development' className="text-black">Web Development </Link>
                  <Link to='/services/mobile-development' className="text-black">Mobile Development</Link>
                  <Link to='/services/ui-ux-design-services' className="text-black">UI/UX Design</Link>
                  <Link to='/services/technical-support' className="text-black">Technical Support</Link>
                </div>
              </div>
             </div>
          </Link>
          <Link to ='/technologies' className='hover:border-b-2 border-[#ce5311]'>
             <span className='text-white text-xl hover:text-[#ce5311]'>Technologies</span>
          </Link>
          <Link to ='/portfolios' className='hover:border-b-2 border-[#ce5311]'>
             <span className='text-white text-xl hover:text-[#ce5311]'>Portfolios</span>
          </Link>
           <Link to ='/about' className='hover:border-b-2 border-[#ce5311]'>
             <span className='text-white text-xl hover:text-[#ce5311]'>About</span>
          </Link>
 
         </div>
       </div>
		  </div>
{/* absolute top-0 right-10 z-50  */}
            <div className=" nav-container flex justify-center gap-5 py-4 lg:hidden xl:hidden 2xl:hidden md:hidden">
              <div className="active">
                <div className="menu-trigger__text">
                <IconContext.Provider value={{ color: '#000000' }} className=''>
                 <div className='hidden menu-var'>
                <Link to='#' onClick={showSidebar} className='menu-bars'>
                   <span className="text-[#06ffff] text-lg">MENU</span>
              <FaIcons.FaBars size={20}   color='#06ffff'  className='text-[#06ffff]' />
             
            </Link>
          
                 </div>

          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
              <li className='navbar-toggle'>
                <Link to='#' onClick={showSidebar} className='menu-bars'>
                   <span className="text-[#06ffff] text-lg">Close</span>
                  <AiIcons.AiOutlineClose size={20}   color='#06ffff'  className='text-[#06ffff]'/>
                </Link>
              </li>

                  <li  className='nav-text' onClick={showSidebar}>
                    <Link to='/' className="hover:border-b-2 border-cyan-400">
                      <span className='text-white hover:text-cyan-400'>Home</span>
                    </Link>
                  </li>

                  <li  className='nav-text' onClick={showSidebar}>
                    <Link to='/About' className="hover:border-b-2 border-cyan-400">
                      <span className='text-white hover:text-cyan-400'>About</span>
                    </Link>
                  </li>

                  <li  className='nav-text' onClick={showSidebar}>
                    <Link to='/Projects' className="hover:border-b-2 border-cyan-400">
                      <span className='text-white hover:text-cyan-400'>Projects</span>
                    </Link>
                  </li>

                <li  className='service-nav' >
                <div className="dropdown cursor-pointer">
                  <div className='dropbtn'>
                   <Link to='' className="hover:border-b-2 border-cyan-400">
                      <span className='text-white hover:text-cyan-400'>Services</span>
                      </Link>
                  </div>
                  <div className="dropdown-content">
                      <Link onClick={showSidebar} to='/design'>Design</Link>
                      <Link onClick={showSidebar} to='/development'>Development</Link>
                      <Link onClick={showSidebar} to='/support'>Technical Support</Link>
                  </div>
                  </div>
                  </li>

                  <li  className='nav-text' onClick={showSidebar}>
                    <Link to='/Contact' className="hover:border-b-2 border-cyan-400">
                      <span className='text-white hover:text-cyan-400'>Contact</span>
                    </Link>
                  </li>
                
            </ul>
          </nav>
        </IconContext.Provider>
                            {/* Menu */}
                            </div>
                          <div className="menu-trigger__lines"><i></i><i></i></div>
                        </div>

         
		    </div>
        
  
	</div>

    </div>
  )
}

export default Navbar