// import { useRef, useState } from "react"
// import { motion,useScroll, useSpring, useTransform } from "framer-motion";
// import {FaArrowDown, FaArrowRight} from "react-icons/fa";
// import { service } from "./servise";
// import { useNavigate } from "react-router-dom";


// function Service() {

// const [activeIndex, setActiveIndex] = useState(null)

// const navigate = useNavigate()

//   return (
//     <div   className="home-service flex gap-20 mx-20  mt-20">

//       <div  className="h-service w-[50%] flex flex-col gap-20">
//         <div>
//         <h1  className="text-black text-5xl font-normal mb-5">OUR SERVICES.</h1>
//         <p className=" text-xl tracking-[0.05rem] font-serif font-normal text-gray-800 text-justify">ERAZONE Web Agency takes pride in delivering inventive and adaptable solutions tailored to your specific requirements. As a boutique agency, we collaborate closely with our clients to establish an open and constructive relationship, resulting in a final product that surpasses your expectations.</p>
//         </div>
//       </div>

//       <div   className="overflow-y-auto w-[50%] flex flex-col gap-10 card h-service font-serif">
//         {
//           service.map((item)=>{
//             return(
//               <div onClick={() => setActiveIndex(item.id)} key={item.id} className={`${activeIndex == item.id ? "border-orange-800": "border-gray-700"} text-black border bottom-2  hover:box hover:item-desc active-desc`}>
//           <div className="flex justify-between px-4 py-8 items-center content  ">
//           <h1 className="text-2xl text-black tracking-[0.1rem]">{item.title}</h1>
//            <FaArrowRight onClick={()=>navigate(item.to)} className= {`cursor-pointer`} color='black' size={18}/>
//           </div>
//           {/* <div className={`${activeIndex == item.id ? "block" : "hidden"}  text-gray-400 p-5 tracking-[0.05rem]`}>
//              <p className={` item-desc active-desc font-serif`}>{item.desc}</p>
//           </div> */}
//         </div>
//             )
//           })
//         }
//       </div>

//     </div>
//   )
// }

// export default Service


import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { service } from "./servise";
import { useNavigate } from "react-router-dom";

function Service() {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="w-full bg-slate-900 py-24 px-20 flex gap-20">

      {/* LEFT SIDE */}
      <div className="w-1/2 flex flex-col justify-start">
        <h1 className="text-slate-100 text-5xl font-semibold mb-6 tracking-wide">
          OUR SERVICES
        </h1>

        <p className="text-slate-300 text-lg leading-relaxed">
          ERAZONE Web Agency takes pride in delivering inventive and adaptable
          solutions tailored to your specific requirements. We collaborate
          closely with our clients to establish open and constructive
          relationships, resulting in final products that exceed expectations.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 flex flex-col gap-6">

        {service.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveIndex(item.id)}
            className={`
              rounded-2xl
              p-6
              cursor-pointer
              transition-all duration-300
              border
              ${
                activeIndex === item.id
                  ? "bg-slate-800 border-teal-500 shadow-lg shadow-teal-500/10"
                  : "bg-slate-800/60 border-slate-700 hover:border-teal-400 hover:bg-slate-800"
              }
            `}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl text-slate-100 tracking-wide">
                {item.title}
              </h2>

              <FaArrowRight
                onClick={() => navigate(item.to)}
                className="text-slate-400 hover:text-teal-400 transition"
                size={18}
              />
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default Service;