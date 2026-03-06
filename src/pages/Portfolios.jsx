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
            className="absolute close-btn lg:top-28 xl:top-28 md:top-32 sm:top-36 right-12 text-white z-50 text-3xl"
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