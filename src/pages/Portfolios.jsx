// import React, { useEffect, useState } from 'react'
// import { FaSleigh } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

// function Portfolios({setIsHome}) {

//    const [isOpen, setIsOpen] = useState(false)
//    const [currentImages, setCurrentImages] = useState([])
//    const [currentIndex, setCurrentIndex] = useState(0)
//    const [loading, setLoading] = useState(false);



//    const openGallery = (images, index = 0) => {
//     setCurrentImages(images)
//     setCurrentIndex(index)
//     setIsOpen(true)
// }

// const closeGallery = () => {
//     console.log('Hello')
//     setIsOpen(false)
// }

// const nextImage = () => {
//     setLoading(true)
//     const nextIndex = (currentIndex + 1) % currentImages.length
//     // setCurrentIndex((prev) => (prev + 1) % currentImages.length)
//    const img = new Image();
//    img.src = currentImages[nextIndex];

//    img.onload = ()=>{
//     setCurrentIndex(nextIndex);
//     setLoading(false)
//    }
// }

// const prevImage = () => {
//      setLoading(true)

//     const prevIndex =
//         (currentIndex - 1 + currentImages.length) % currentImages.length

//     const img = new Image()
//     img.src = currentImages[prevIndex]
//     img.onload = () => {
//         setCurrentIndex(prevIndex)
//         setLoading(false)
//     }   
// }

//     useEffect(()=>{
//         setIsHome(false)
//     },[setIsHome])
//   return (
//     <div className='pt-40 px-20 pb-20 bg-slate-950 text-slate-100 projects'>
//         <div className='grid lg:grid-cols-2 xl:grid-cols-2 gap-20 md:grid-cols-1 sm:grid-cols-1'>
//             <div >
//                 <h2 className='text-5xl font-semibold tracking-wide mb-5'>Projects that we co-created with our clients</h2>
//                 <p className='text-xl tracking-wide'>We developed 40 + projects for businesses in more than 6+ industries. Whether you’re looking for inspiration or considering us as your partner, these case studies highlight the quality and dedication we bring to every project.</p>
//             </div>
//             <img className='lg:w-[80%] xl:lg:w-[80%] sm:lg:w-[80%] md:lg:w-[80%] rounded-lg' src="/projects.png" alt="projects" />
//         </div>

//         <div className='my-10 mt-20 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10'>
//             <div className=' bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-500 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 p-6'>
//                 <div className='transition-all duration-75 px-10 pt-5 pb-5 hover:scale-105'>
//                     <h2 className='text-xl pb-5 font-semibold font-serif'>Stock management system </h2>
//                     {/* <img className='h-[100%] rounded-3xl' src="/stock-1.jpg" alt="" /> */}
//                     <img
//                         onClick={() =>
//                             openGallery([
//                             "/stock-1.jpg",
//                             "/stock-2.jpg",
//                             "/stock-3.jpg"
//                             ])
//                         }
//                         className='h-[100%] rounded-3xl cursor-pointer'
//                         src="/stock-1.jpg"
//                         alt=""
//                         />
//                 </div>

//                 <div  className='absolute top-10 left-0 hidden group-hover:block group-hover:opacity-100 transform  transition-all duration-1000 ease-in-out backdrop-blur-md h-[100%] px-10'>
//                     <div className='flex gap-5 mb-5'>
//                         <div>
//                             <h2 className='text-xl font-semibold'>Timeline</h2>
//                             <p className='text-xl'>3 months</p>
//                         </div>
//                         <div>
//                             <h1  className='text-xl font-semibold'>Technologies</h1>
//                             <p className='text-md'>React, JavaScript, Firebase,Bootstrap, CSS3</p>
//                         </div>
//                     </div>
//                     <div className='mb-5 text-lg'>
//                         {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa delectus minus! Ipsa molestiae voluptatibus praesentium numquam repellat veniam itaque.</p> */}
//                     </div>
//                     <Link to={'/'} className='bg-orange-600 rounded-l-full text-center rounded-r-full text-white py-4 px-5'>Watch product</Link>
//                 </div>
//             </div>

//             <div className=' bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-500 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 p-6'>
//                 <div className='transition-all duration-75 px-10 pt-5 pb-5 hover:scale-105'>
//                     <h2 className='text-xl pb-5 font-semibold'>moon home care</h2>
//                     <img className='h-[100%] rounded-3xl cursor-pointer' 
//                      onClick={() =>
//                         openGallery([
//                             "/moon-1.jpg",
//                             "/moon-2.jpg",
//                             "/moon-3.jpg"
//                         ])
//                         }
//                     src="/moon-1.jpg" alt="" />
//                 </div>

//                 <div  className='absolute top-10 left-0 hidden group-hover:block group-hover:opacity-100 transform  transition-all duration-1000 ease-in-out backdrop-blur-md h-[100%] px-10'>
//                     <div className='flex gap-5 mb-5'>
//                         <div>
//                             <h2 className='text-xl font-semibold'>Timeline</h2>
//                             <p className='text-xl'>3 months</p>
//                         </div>
//                         <div>
//                             <h1  className='text-xl font-semibold'>Technologies</h1>
//                             <p className='text-md'>React, JavaScript, Firebase,Bootstrap, CSS3</p>
//                         </div>
//                     </div>
//                     <div className='mb-5 text-lg'>
//                         {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa delectus minus! Ipsa molestiae voluptatibus praesentium numquam repellat veniam itaque.</p> */}
//                     </div>
//                     <Link to={'/'} className='bg-orange-600 rounded-l-full rounded-r-full text-white py-4 px-5'>Watch product video</Link>
//                 </div>
//             </div>

//           <div className=' bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-500 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 p-6'>
//                 <div className='transition-all duration-75 px-10 pt-5 pb-5 hover:scale-105'>
//                     <h2 className='text-xl pb-5 font-semibold'>Online food ordering menu</h2>
//                     <img className='h-[100%] rounded-3xl cursor-pointer' 
//                      onClick={() =>
//                         openGallery([
//                             "/menu-1.jpg",
//                             "/menu-2.jpg",
//                             "/menu-3.jpg",
//                             "/menu-4.jpg",
//                             "/menu-5.jpg"
//                         ])
//                         }
//                     src="/menu-1.jpg" alt="" />
//                 </div>

//                 <div  className='absolute top-10 left-0 hidden group-hover:block group-hover:opacity-100 transform  transition-all duration-1000 ease-in-out backdrop-blur-md h-[100%] px-10'>
//                     <div className='flex gap-5 mb-5'>
//                         <div>
//                             <h2 className='text-xl font-semibold'>Timeline</h2>
//                             <p className='text-xl'>3 months</p>
//                         </div>
//                         <div>
//                             <h1  className='text-xl font-semibold'>Technologies</h1>
//                             <p className='text-md'>React, JavaScript, Firebase,Bootstrap, CSS3</p>
//                         </div>
//                     </div>
//                     {/* <div className='mb-5 text-lg'>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa delectus minus! Ipsa molestiae voluptatibus praesentium numquam repellat veniam itaque.</p>
//                     </div> */}
//                     <Link to={'/'} className='bg-orange-600 rounded-l-full rounded-r-full text-white py-4 px-5'>Watch product video</Link>
//                 </div>
//             </div>

//             <div className=' bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-500 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 p-6'>
//                 <div className='transition-all duration-75 px-10 pt-5 pb-5 hover:scale-105'>
//                     <h2 className='text-xl pb-5 font-semibold'>WSD CBE retail account management System</h2>
//                     <img className='h-[100%] rounded-3xl cursor-pointer' src="/WSD.jpg" alt="" 
//                      onClick={() =>
//                         openGallery([
//                             "/WSD.jpg",
//                             "/WSD-2.jpg",
                           
//                         ])
//                         }
//                     />
//                 </div>

//                 <div  className='absolute top-10 left-0 hidden group-hover:block group-hover:opacity-100 transform  transition-all duration-1000 ease-in-out backdrop-blur-md h-[100%] px-10'>
//                     <div className='flex gap-5 mb-5'>
//                         <div>
//                             <h2 className='text-xl font-semibold'>Timeline</h2>
//                             <p className='text-xl'>3 months</p>
//                         </div>
//                         <div>
//                             <h1  className='text-xl font-semibold'>Technologies</h1>
//                             <p className='text-md'>React, JavaScript, Firebase,Bootstrap, CSS3</p>
//                         </div>
//                     </div>
//                     <Link to={'/'} className='bg-orange-600 rounded-l-full rounded-r-full text-white py-4 px-5'>Watch product video</Link>
//                 </div>
//             </div>

//              <div className=' bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-500 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 p-6'>
//                 <div className='transition-all duration-75 px-10 pt-5 pb-5 hover:scale-105'>
//                     <h2 className='text-xl pb-5 font-semibold'>WSD CBE legal case management system</h2>
//                     <img className='h-[100%] rounded-3xl cursor-pointer' src="/legal-1.jpg" alt="" 
//                      onClick={() =>
//                         openGallery([
//                             "/legal-1.jpg",
//                             "/legal-2.jpg",
//                             "/legal-3.jpg"
                           
//                         ])
//                         }
//                     />
//                 </div>

//                 <div  className='absolute top-10 left-0 hidden group-hover:block group-hover:opacity-100 transform  transition-all duration-1000 ease-in-out backdrop-blur-md h-[100%] px-10'>
//                     <div className='flex gap-5 mb-5'>
//                         <div>
//                             <h2 className='text-xl font-semibold'>Timeline</h2>
//                             <p className='text-xl'>3 months</p>
//                         </div>
//                         <div>
//                             <h1  className='text-xl font-semibold'>Technologies</h1>
//                             <p className='text-md'>React, JavaScript, Firebase,Bootstrap, CSS3</p>
//                         </div>
//                     </div>
//                     <Link to={'/'} className='bg-orange-600 rounded-l-full rounded-r-full text-white py-4 px-5'>Watch product video</Link>
//                 </div>
//             </div>
//         </div>
//         {isOpen && (

//                 <>
            
//             <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center mt-10">
//             <div>
//          {/* Close Button */}
//             <button
//             onClick={closeGallery}
//             className="absolute right-16 close-btn top-20 z-50 close-btn text-gray-400 text-2xl font-bold mb-10"
//             >
//             ✕
//             </button>
//             </div>
//             {/* Previous */}
//             <button
//             onClick={prevImage}
//             className="absolute left-5 z-50 text-white text-5xl"
//             >
//             ‹
//             </button>

//             <div className="relative flex items-center justify-center z-10">

//                 {loading && (
//                     <div className="absolute flex items-center justify-center">
//                     <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
//                     </div>
//                 )}

//                 <img
//                     src={currentImages[currentIndex]}
//                     className={`max-h-[80%] max-w-[80%] rounded-xl shadow-2xl z-10 transition-opacity duration-300 ${
//                     loading ? "opacity-0" : "opacity-100"
//                     }`}
//                     alt=""
//                 />

//                 </div>
//             {/* Next */}
//             <button
//             onClick={nextImage}
//             className="absolute right-5 z-50 text-white text-5xl"
//             >
//             ›
//             </button>

//         </div>
//                 </> 
        
        
//         )}
//     </div>
//   )
// }

// export default Portfolios

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Portfolios({ setIsHome }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const openGallery = (images, index = 0) => {
    setCurrentImages(images);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeGallery = () => setIsOpen(false);

  const changeImage = (newIndex) => {
    setLoading(true);
    const img = new Image();
    img.src = currentImages[newIndex];
    img.onload = () => {
      setCurrentIndex(newIndex);
      setLoading(false);
    };
  };

  const nextImage = () =>
    changeImage((currentIndex + 1) % currentImages.length);

  const prevImage = () =>
    changeImage(
      (currentIndex - 1 + currentImages.length) % currentImages.length
    );

  useEffect(() => {
    setIsHome(false);
  }, [setIsHome]);

  return (
    <div className="bg-slate-950 text-slate-100 pt-32 pb-20 px-6 lg:px-20">
      {/* ===== HERO SECTION ===== */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
            Projects that we co-created with our clients
          </h2>
          <p className="text-lg text-slate-300">
            We developed 40+ projects across 6+ industries. These case studies
            showcase the quality and dedication we bring to every solution.
          </p>
        </div>

        <img
          className="w-full rounded-xl"
          src="/projects.png"
          alt="projects"
        />
      </div>

      {/* ===== PROJECT GRID ===== */}
      <div className="mt-20 grid sm:grid-cols-1 md:grid-cols-2 gap-10">
        {[
          {
            title: "Stock Management System",
            images: ["/stock-1.jpg", "/stock-2.jpg", "/stock-3.jpg"],
          },
          {
            title: "Moon Home Care",
            images: ["/moon-1.jpg", "/moon-2.jpg", "/moon-3.jpg"],
          },
          {
            title: "Online Food Ordering Menu",
            images: [
              "/menu-1.jpg",
              "/menu-2.jpg",
              "/menu-3.jpg",
              "/menu-4.jpg",
            ],
          },
          {
            title: "Retail Account Management System",
            images: ["/WSD.jpg", "/WSD-2.jpg"],
          },
          {
            title: "Legal Case Management System",
            images: ["/legal-1.jpg", "/legal-2.jpg", "/legal-3.jpg"],
          },
        ].map((project, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-400 transition duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                {project.title}
              </h3>

              <img
                // onClick={() => openGallery(project.images)}
                src={project.images[0]}
                alt={project.title}
                className="rounded-xl cursor-pointer w-full h-64 object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <div className="px-6 pb-6">
              <Link
                 onClick={() => openGallery(project.images)}
                className="inline-block bg-orange-600 hover:bg-orange-700 transition text-white px-6 py-2 rounded-full"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ===== MODAL GALLERY ===== */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-20 flex items-center justify-center pt-20 px-4">
          {/* Close */}
          <button
            onClick={closeGallery}
            className="absolute top-24 right-12 text-white z-50 text-3xl"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={prevImage}
            className="absolute z-50 left-4 text-white text-4xl"
          >
            ‹
          </button>

          <div className="relative flex items-center justify-center max-w-5xl w-full">
            {loading && (
              <div className="absolute">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            <img
              src={currentImages[currentIndex]}
              alt=""
              className={`max-h-[80vh] w-[80%] rounded-xl transition-opacity duration-300 ${
                loading ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-4 z-50 text-white text-4xl"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

export default Portfolios;