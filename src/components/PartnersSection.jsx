import { motion } from "framer-motion";
import { useState } from "react";

function PartnersSection() {
  const [hovered, setHovered] = useState(false);

  const partners = [
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://msftstories.thesourcemediaassets.com/sites/213/2019/09/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlssLp2WkdffQWReHkh_qa-mfx4ga_XdEv4g&s",
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-900 font-serif">

      {/* Title */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 mb-12 md:mb-16 flex items-center justify-center gap-4 md:gap-6">

        <div className="flex-1 h-[1px] bg-gray-300"></div>

        <h2 className="text-gray-100 text-xs sm:text-sm md:text-base tracking-widest font-semibold whitespace-nowrap">
          OUR PARTNERS & SUPPORTERS
        </h2>

        <div className="flex-1 h-[1px] bg-gray-300"></div>

      </div>

      {/* Logo Slider */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >

        {/* Edge Fade */}
        <div className="absolute left-0 top-0 h-full w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 h-full w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-10"></div>

        <motion.div
          className="flex items-center gap-10 sm:gap-14 md:gap-20 w-max"
          animate={{ x: hovered ? undefined : ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...partners, ...partners].map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt="partner logo"
              className="h-8 sm:h-10 md:h-14 lg:h-16 object-contain opacity-70 hover:opacity-100 hover:scale-110 transition duration-300"
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

      </div>

    </section>
  );
}

export default PartnersSection;