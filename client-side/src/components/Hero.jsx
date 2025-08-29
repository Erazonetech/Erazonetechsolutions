


function Hero() {

 

  return (
    <div className='flex justify-between px-20 mb-10 pt-52 bg-[#040404] shadow-lg shadow-[#06f3ffb8]'>
      <div className='flex flex-col'>
        <div className=''>
        <h1 className='uppercase text-white font-oswald font-semibold w-[700px] text-6xl'>
        Your digital agency <br /> in analog world
        </h1>
        </div>
        <div>
            <p className=' mt-20 italic text-xl'>Write to us</p>
            <a className='text-[#06ffff] text-lg font-semibold ' href="#">contact@erazonetech.com</a>
        </div>
      </div>
      <div className="flex relative">
  
      {/* <div className='absolute w-[420px] h-[420px] top-[40%] left-[-20%]'>
      <img className='z-[999] w-full h-full object-contain
   ' src='/home-hero.png' alt='hero' />
      </div> */}
       <video className=' w-[40rem]'
         width="" height="500"  autoPlay loop muted >
         <source src="https://bato.dev/wp-content/uploads/2023/04/main-video-min-1.mp4" type="video/mp4"/>
     </video>
      </div>
    </div>
  )
}

export default Hero