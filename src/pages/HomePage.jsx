import Index from "../components/cube"
// import About from "./About"
// import Navbar from "../components/header/Navbar"
// import Service from "../components/Service"
import Hero from "../components/Hero"
import PartnersSection from "../components/PartnersSection.jsx"
import Service from "../components/Service"
import StatsSection from "../components/StatsSection.jsx"
import Testimonial from "../components/Testimonial.jsx"
import Tools from "../components/Tools"


function HomePage({sidebar,}) {
  // if (!sidebar) return null;
  return (  
    <div className="relative">
     {/* <div className="overlay-content">
     </div> */}
        <Hero/>
        <StatsSection/>
        <Service/>
        <Tools/>
        <PartnersSection/>
        <Testimonial/>
       
    </div>
  )
}

export default HomePage