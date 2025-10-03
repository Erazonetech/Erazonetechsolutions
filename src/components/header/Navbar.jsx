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
    <div className="header menu-opened overflow-hidden w-[100vw]">
		<div className={` flex justify-between relative`}> 
      <div className={` ${show && 'bg-black'} ${!isHome && 'bg-black'} fixed -top-10 left-0 right-0  z-[1000]  top-div h-[150px]`}>
      <div className={`flex items-center justify-between mx-20  header-div`}>
          <Link to={'/'}>
            <img className="logo "  src="/logo-design.png" alt="logo"/>
            </Link>

        <div className="flex gap-20 sm:hidden xl:flex lg:flex md:flex header-nav">
           <Link to ='/' className='text-white hover:border-b-2 border-[#ce5311]'>    
           <span className='text-white text-xl hover:text-[#ce5311]'>Home</span>
          </Link>
          <Link to ='/' className='dropdown'>
             <span className=' text-white text-xl hover:text-[#ce5311] hover:border-b-2 border-[#ce5311] '>Services</span>
             <div className="dropdown-content mt-8
             w-[1100%] flex items-center rounded-lg">
             <div className="flex items-center justify-between px-10">
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
          <Link to ='/portfolios' className='hover:border-b-2 border-[#ce5311]'>
             <span className='text-white text-xl hover:text-[#ce5311]'>Portfolios</span>
          </Link>
           <Link to ='/about' className='hover:border-b-2 border-[#ce5311]'>
             <span className='text-white text-xl hover:text-[#ce5311]'>About</span>
          </Link>
 
         </div>


          <div className="menu-nav nav-container flex justify-center gap-5 py-4 sm:flex xl:hidden lg:hidden md:hidden">
              <div className="active">
                <div className="menu-trigger__text">
                <IconContext.Provider value={{ color: '#000000' }} className=''>
                 <div className='hidden menu-var'>
                <Link to='#' onClick={showSidebar} className='menu-bars'>
                   <span className="text-white text-lg ">MENU</span>
              <FaIcons.FaBars size={20}   color='white'  className='text-white' />
             
            </Link>
          
                 </div>

          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
              <li className='navbar-toggle'>
                <Link to='#' onClick={showSidebar} className='menu-bars'>
                   <span className="text-white text-lg">Close</span>
                  <AiIcons.AiOutlineClose size={20}   color='white'  className='text-white'/>
                </Link>
              </li>

                  <li  className='nav-text' onClick={showSidebar}>
                    <Link to='/' className="hover:border-b-2 hover:text-[#ce5311]  border-[#ce5311]">
                      <span className='text-white '>Home</span>
                    </Link>
                  </li>

                  <li  className='nav-text' onClick={showSidebar}>
                    <Link to='/About' className="hover:border-b-2 hover:text-[#ce5311]  border-[#ce5311]">
                      <span className='text-white '>About</span>
                    </Link>
                  </li>

                  <li  className='nav-text' onClick={showSidebar}>
                    <Link to='/portfolios' className="hover:border-b-2 hover:text-[#ce5311]  border-[#ce5311]">
                      <span className='text-white '>Projects</span>
                    </Link>
                  </li>
              <li className="nav-text-two" >
               <Link to ='/' className='dropdown'>
                <span className=' text-white text-lg hover:text-[#ce5311] hover:border-b-2 border-[#ce5311] px-5'>Services</span>
                <div className="dropdown-content-two mt-8
              flex items-center rounded-lg">
             <div className="flex items-center justify-between px-2">
                <div className="pt-5">
                  <Link to ='/services/custom-software-development' className="text-black">Custom Software Development </Link>
                  <Link to='/services/web-development' className="text-black">Web Development </Link>
                  <Link to='/services/mobile-development' className="text-black">Mobile Development</Link>
                  <Link to='/services/ui-ux-design-services' className="text-black">UI/UX Design</Link>
                  <Link to='/services/technical-support' className="text-black">Technical Support</Link>
                </div>
              </div>
             </div>
          </Link>
                  </li>

                  <li  className='nav-text' onClick={showSidebar}>
                    <Link to='/Contact' className="hover:border-b-2 hover:text-[#ce5311]  border-[#ce5311]">
                      <span className='text-white '>Contact</span>
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
        
  
	</div>

    </div>
  )
}

export default Navbar