


// function Hero() {

import { Link } from "react-router-dom"


//   return (
//     <div className='xl:flex lg:flex justify-between xl:px-20 lg:px-20 mb-10 pt-32 pb-10 bg-[#e6e6e6]'>
//       <div className='flex flex-col mb-10'>
//         <div className='hero-sec'>
//         <h1 className='uppercase text-black font-serif font-semibold w-[700px] text-6xl'>
//         Your digital agency <br /> in analog world
//         </h1>
//         </div>
//         <div>
//             <p className=' mt-20 italic text-xl text-black'>Write to us</p>
//             <a className='text-[#343636] text-lg font-semibold ' href="#">contact@erazonetech.com</a>
//         </div>
//       </div>
//       <div className="">
//        <video className='hero-video object-fill'
//            autoPlay loop muted >
//          <source className="min-h-[200px]" src="/my-video.mp4" type="video/mp4"/>
//      </video>
//       </div>
//     </div>
//   )
// }

// export default Hero

function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/my-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 pt-20">

        <h1 className="uppercase text-white font-serif font-semibold text-5xl md:text-7xl max-w-4xl leading-tight">
          Your Digital Agency <br /> In Analog World
        </h1>

        <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl">
          We craft digital experiences that transform traditional businesses into modern brands.
        </p>

        <div className="mt-10 flex gap-6">
          <Link
            to="/portfolios"
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full transition duration-300"
          >
            View Projects
          </Link>

          <Link
            to="/about"
            className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  )
}


export default Hero