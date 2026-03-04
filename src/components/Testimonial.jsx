// import React, { useRef, useState } from 'react'
// import testimony  from './Testimonial.js';
// import {motion, useScroll, useTransform} from 'framer-motion'

// const variants = {
//     initial:{
//         y:100,
//         opacity:0
//     },
//     animate:{
//         y:0,
//         opacity:1,
//         transition:{
//             duration:0.5,
//             taggerChildren:0.1
//         }
//     }
// }

// const textVariants = {
//   initial:{
//     x:-500,
//     opacity:0
//   },
//   animate:{
//     x:0,
//     opacity:1,
//     transition:{
//       duration:1
//     }
//   }
// }

// const sliderVariants = {
//     initial:{
//         x:0,
//     },
//     animate:{
//         x:'-220%',
//          transition:{
//         repeat:Infinity,
//         repeatType:'mirror',
//         duration:20
//     }
// }

// }

// function Testimonial() {
//   const [current, setCurrent] = useState(0);


// //   const prevSlide = () => {
// //     setCurrent(current === 0 ? Testimony.length - 1 : current - 1);
// //   };

// //   const nextSlide = () => {
// //     setCurrent(current === Testimony.length - 1 ? 0 : current + 1);
// //   };

// //   const goToSlide = (index) => {
// //     setCurrent(index);
// //   };

// const ref = useRef();
//   const { scrollY} = useScroll({
//     target:ref,
//     offset:["start start","end end"],
//   })

// const y = useTransform(scrollY,[0,10],[0,10]);

//   return (



// <motion.div variants={variants} initial="initial" whileInView='animate'className="relative h-auto overflow-hidden bg-gray-100 py-10">

//     <motion.div variants={textVariants} initial="initial" whileInView="animate" ref={ref} className='flex flex-col items-center text-black'>
//         <motion.h1 variants={variants} className='text-5xl font-bold'>Hear from our clients</motion.h1>
//         <p className='font-semibold'>See for yourself what others have to say about us.</p>
//     </motion.div>
//   <div 
//     className="flex transition-transform duration-500 ease-in-out"
//     style={{ transform: `translateX(-${current * 100}%)` }}
//   >
//     {testimony.map((testimonial, index) => (
//       <div 
//         key={index}
//         className="w-full flex-shrink-0 flex flex-col items-center justify-center p-8 text-cente"
//       >
        
//          <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-32 h-32 rounded-full mb-6 object-cover bg-white p-2"
//                 />
//         <p className="text-lg italic mb-2 text-orange-400 w-[250px]">"{testimonial.quote}"</p>
//         <p className="font-bold py-2">{testimonial.name}</p>
//         <p className="text-sm text-gray-600 italic">{testimonial.role}</p>
      
//       </div>
//     ))}
//   </div>
  
//   <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
//         {testimony.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-3 h-3 rounded-full ${
//               index === current ? 'bg-orange-500' : 'bg-gray-300'
//             }`}
//           />
//         ))}
//       </div>
// </motion.div>
//   )
// }

// export default Testimonial

import React, { useRef, useState } from "react";
import testimony from "./Testimonial.js";
import { motion, useScroll } from "framer-motion";

const variants = {
  initial: {
    y: 80,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

function Testimonial() {
  const [current, setCurrent] = useState(0);
  const ref = useRef();

  useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <motion.section
      ref={ref}
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="relative w-full bg-slate-950 py-24 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-100 mb-4">
            Hear from our clients
          </h1>
          <p className="text-slate-400 text-lg">
            See what our partners say about working with us.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimony.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex justify-center"
              >
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center max-w-xl 
                                hover:border-teal-500 hover:shadow-xl hover:shadow-teal-500/10 
                                transition-all duration-300">

                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-slate-800"
                  />

                  <p className="text-slate-300 italic text-lg mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  <h3 className="text-slate-100 font-semibold text-lg">
                    {testimonial.name}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimony.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-teal-500 scale-125"
                    : "bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </motion.section>
  );
}

export default Testimonial;