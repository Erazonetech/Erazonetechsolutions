import { useRef, useState } from "react"
import { motion,useScroll, useSpring, useTransform } from "framer-motion";
import {FaArrowDown, FaArrowRight} from "react-icons/fa";
import { service } from "./servise";
import { useNavigate } from "react-router-dom";


function Service() {

const [activeIndex, setActiveIndex] = useState(null)

const navigate = useNavigate()

  return (
    <div   className="home-service flex gap-20 mx-20  mt-20">

      <div  className="h-service w-[50%] flex flex-col gap-20">
        <div>
        <h1  className="text-black text-5xl font-normal mb-5">OUR SERVICES.</h1>
        <p className=" text-xl tracking-[0.05rem] font-serif font-normal text-gray-800 text-justify">ERAZONE Web Agency takes pride in delivering inventive and adaptable solutions tailored to your specific requirements. As a boutique agency, we collaborate closely with our clients to establish an open and constructive relationship, resulting in a final product that surpasses your expectations.</p>
        </div>
      </div>

      <div   className="overflow-y-auto w-[50%] flex flex-col gap-10 card h-service font-serif">
        {
          service.map((item)=>{
            return(
              <div onClick={() => setActiveIndex(item.id)} key={item.id} className={`${activeIndex == item.id ? "border-orange-800": "border-gray-700"} text-black border bottom-2  hover:box hover:item-desc active-desc`}>
          <div className="flex justify-between px-4 py-8 items-center content  ">
          <h1 className="text-2xl text-black tracking-[0.1rem]">{item.title}</h1>
           <FaArrowRight onClick={()=>navigate(item.to)} className= {`cursor-pointer`} color='black' size={18}/>
          </div>
          {/* <div className={`${activeIndex == item.id ? "block" : "hidden"}  text-gray-400 p-5 tracking-[0.05rem]`}>
             <p className={` item-desc active-desc font-serif`}>{item.desc}</p>
          </div> */}
        </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Service