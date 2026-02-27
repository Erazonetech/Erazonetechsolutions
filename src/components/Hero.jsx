


function Hero() {


  return (
    <div className='flex justify-between px-20 mb-10 pt-52 bg-[#e6e6e6] shadow-sm shadow-[#363a3ab8]'>
      <div className='flex flex-col'>
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
       <video className=' w-[40rem]'
         width="" height="500"  autoPlay loop muted >
         <source src="/my-video.mp4" type="video/mp4"/>
     </video>
      </div>
    </div>
  )
}

export default Hero