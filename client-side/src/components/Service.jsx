import { useRef, useState } from "react"
import { motion,useScroll, useSpring, useTransform } from "framer-motion";
import {FaArrowDown} from "react-icons/fa";
import { service } from "./servise";


const variants = {
    initial:{
        y:100,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            taggerChildren:0.1
        }
    }
}

const textVariants = {
  initial:{
    x:-500,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1
    }
  }
}

const textVariantsRight = {
  initial:{
    x:500,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1
    }
  }
}
function Service() {

const [activeIndex, setActiveIndex] = useState(null)

  const ref = useRef();
  const { scrollY} = useScroll({
    target:ref,
    offset:["start start","end end"],
  })

const y = useTransform(scrollY,[0,10],[0,10]);
  


  return (
    <motion.div variants={variants} initial="initial" whileInView='animate' className="flex gap-20 mx-20 h-screen mt-20">

      <motion.div variants={textVariants} initial="initial" whileInView="animate" ref={ref} className="w-[50%] flex flex-col gap-20">
        <div>
        <motion.h1  className="text-black text-5xl font-oswald font-normal mb-5">OUR SERVICES.</motion.h1>
        <p className="font-oswald text-xl tracking-[0.1rem] font-normal text-gray-800">ERAZONE Web Agency takes pride in delivering inventive and adaptable solutions tailored to your specific requirements. As a boutique agency, we collaborate closely with our clients to establish an open and constructive relationship, resulting in a final product that surpasses your expectations.</p>
        </div>
        <div>
        <h2 className="text-gray-500 text-4xl">Clutch</h2>
        <p className="text-[#06ffff] ">4.9 <span className="text-[#06ffff] ">⭐⭐⭐⭐⭐</span></p>
        </div>
      </motion.div>
      <motion.div variants={textVariantsRight} initial="initial" whileInView="animate" style={{y}}  className="overflow-y-auto w-[50%] flex flex-col gap-10 card ">
        {
          service.map((item)=>{
            return(
              <div onClick={() => setActiveIndex(item.id)} key={item.id} className={`${activeIndex == item.id ? "border-orange-800": "border-gray-700"} text-black border bottom-2  hover:box hover:item-desc active-desc`}>
          <div className="flex justify-between px-4 py-8 items-center content  ">
          <h1 className="text-2xl text-black tracking-[0.2rem]">{item.title}</h1>
           <FaArrowDown className= {`${activeIndex == item.id ? 'icons': ''}`} color='gray' size={14}/>
          </div>
          <div className={`${activeIndex == item.id ? "block" : "hidden"}  text-gray-400 p-5 tracking-[0.1rem]`}>
             <p className={` item-desc active-desc`}>{item.desc}</p>
          </div>
        </div>
            )
          })
        }
      </motion.div>

    </motion.div>
  )
}

export default Service