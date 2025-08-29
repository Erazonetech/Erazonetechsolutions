import { useEffect, useState } from "react"
import Preload from "./components/Preload"
import HomePage from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./components/header/Navbar";
import Design from "./pages/service/Design";
import Development from "./pages/service/Development";
import TechnicalSupport from "./pages/service/TechnicalSupport";
import About from "./pages/About";
import SoftwareDevelopment from "./pages/service/SoftwareDevelopment";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import WebDevelopment from "./pages/service/WebDevelopment";
import MobileDev from "./pages/service/MobileDev";
import UIUX from "./pages/service/UIUX";
import Technologies from "./pages/Technologies";
import Index from "./components/cube";
import Portfolios from "./pages/Portfolios";
import Loader from "./components/Loader";
// import { Loader } from "lucide-react";
function App() {
const [loading, setLoading] = useState(true)
 const [sidebar, setSidebar] = useState(false);
 const [isHome, setIsHome] = useState(true)
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [])

  return (
    <>
    {/* {loading ? <Preload/> */}
    {loading ? <Loader/>
    : 
    
    <>
    <BrowserRouter>
     <Navbar isHome={isHome} setIsHome={setIsHome} sidebar={sidebar} setSidebar={setSidebar}/>
     <Routes>
       <Route path="/" element= {<HomePage sidebar={sidebar}  />}/>
       {/* <Route path="/About" element= {<About/>}/> */}
       <Route path="/design" element= {<Design/>}/>
       <Route path="/development" element= {<Development/>}/>
       <Route path="/services/custom-software-development" element= {<SoftwareDevelopment setIsHome={setIsHome} />}/>
       <Route path="/services/web-development" element= {<WebDevelopment setIsHome={setIsHome} />}/>
        <Route path="/services/mobile-development" element= {<MobileDev setIsHome={setIsHome} />}/>
        <Route path="/services/ui-ux-design-services" element= {<UIUX setIsHome={setIsHome} />}/>
        <Route path="/services/technical-support" element= {<TechnicalSupport setIsHome={setIsHome} />}/>
         <Route path="/technologies" element= {<Technologies setIsHome={setIsHome} />}/>
         <Route path="/about" element= {<About setIsHome={setIsHome} />}/>
         <Route path="/portfolios" element= {<Portfolios setIsHome={setIsHome} />}/>
         
       
     </Routes>
     <Footer/>
     <Copyright/>
      <Index/>
    </BrowserRouter>
    </>
    }
    </>
  )
}

export default App
