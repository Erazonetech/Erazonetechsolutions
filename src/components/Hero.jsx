


function Hero() {


  return (
    <div className='xl:flex lg:flex justify-between xl:px-20 lg:px-20 mb-10 pt-32 pb-10 bg-[#e6e6e6]'>
      <div className='flex flex-col mb-10'>
        <div className='hero-sec'>
        <h1 className='uppercase text-black font-serif font-semibold w-[700px] text-6xl'>
        Your digital agency <br /> in analog world
        </h1>
        </div>
        <div>
            <p className=' mt-20 italic text-xl text-black'>Write to us</p>
            <a className='text-[#343636] text-lg font-semibold ' href="#">contact@erazonetech.com</a>
        </div>
      </div>
      <div className="flex relative">
       <video className='hero-video w-[40rem]'
         width="" height="500"  autoPlay loop muted >
         <source src="/my-video.mp4" type="video/mp4"/>
     </video>
      </div>
    </div>
  )
}

export default Hero