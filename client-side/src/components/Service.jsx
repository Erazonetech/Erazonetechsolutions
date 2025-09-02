import { useRef, useState } from "react"
import { motion,useScroll, useSpring, useTransform } from "framer-motion";
import {FaArrowDown} from "react-icons/fa";
import { service } from "./servise";


function Service() {

const [activeIndex, setActiveIndex] = useState(null)

  return (
    <div   className="home-service flex gap-20 mx-20  mt-20">

      <div  className="w-[50%] flex flex-col gap-20">
        <div>
        <h1  className="text-black text-5xl font-oswald font-normal mb-5">OUR SERVICES.</h1>
        <p className="font-oswald text-xl tracking-[0.1rem] font-normal text-gray-800">ERAZONE Web Agency takes pride in delivering inventive and adaptable solutions tailored to your specific requirements. As a boutique agency, we collaborate closely with our clients to establish an open and constructive relationship, resulting in a final product that surpasses your expectations.</p>
        </div>
      </div>

      <div   className="overflow-y-auto w-[50%] flex flex-col gap-10 card ">
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
      </div>

    </div>
  )
}

export default Service