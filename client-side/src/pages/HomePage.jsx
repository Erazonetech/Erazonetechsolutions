import Index from "../components/cube"
// import About from "./About"
// import Navbar from "../components/header/Navbar"
// import Service from "../components/Service"
import Hero from "../components/Hero"
import Service from "../components/Service"
import Testimonial from "../components/Testimonial.jsx"
import Tools from "../components/Tools"


function HomePage({sidebar,}) {
  // if (!sidebar) return null;
  return (  
    <div className="relative">
     {/* <div className="overlay-content">
     </div> */}
        <Hero/>
        <Service/>
        <Tools/>
        <Testimonial/>
       
    </div>
  )
}

export default HomePage