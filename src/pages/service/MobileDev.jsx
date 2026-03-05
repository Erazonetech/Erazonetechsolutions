import { Expand, Shapes, ShieldCheck, Smartphone, Table2, Wrench } from "lucide-react";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

function MobileDev({ setIsHome }) {
  useEffect(() => {
    setIsHome(false);
  }, [setIsHome]);

  const cardAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-slate-950 text-slate-100 pt-32 px-6 md:px-10 pb-20 font-serif">

      {/* HERO */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 home-service">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardAnimation}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl pb-5 text-slate-100 font-serif">
            Mobile Development
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mt-3">
            We deliver more than just apps. Our fast, responsive and highly scalable mobile app development helps your business stay ahead.
          </p>
        </motion.div>

        <motion.img
          src="/mobile-dev.png"
          alt="Mobile dev"
          className="rounded-2xl
           bg-slate-800 
          shadow-xl 
          shadow-teal-200 max-h-[360px]"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* MOBILE SERVICES */}
      <div className="mt-20">
        <div className="flex flex-col justify-center items-center mb-12 text-center">
          <h1 className="font-semibold text-3xl md:text-5xl text-slate-100 font-serif">
            Mobile App Development Services
          </h1>
          <p className="text-slate-300 text-lg pt-2 max-w-xl">
            Erazone provides innovative mobile solutions with rich user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* ANDROID */}
          <motion.div
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-slate-900 p-6 md:p-10 shadow-sm shadow-gray-800 rounded-lg hover:shadow-lg flex flex-col md:flex-row gap-6"
          >
            <div>
              <img className="w-28 h-24 rounded-xl mb-3" src="/android.jpeg" alt="android" />
              <h2 className="text-xl font-semibold text-slate-100">Android App Development</h2>
            </div>

            <ul className="flex flex-col gap-3">
              {[
                "Android Mobile App Development",
                "Android Tablet App Development",
                "Android Wear App Development",
                "Android TV App Development",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* IOS */}
          <motion.div
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-slate-900 p-6 md:p-10 shadow-sm shadow-gray-800 rounded-lg hover:shadow-lg flex flex-col md:flex-row gap-6"
          >
            <div>
              <img className="w-28 h-24 rounded-xl mb-3" src="/ios.jpeg" alt="ios" />
              <h2 className="text-xl font-semibold text-slate-100">iOS App Development</h2>
            </div>

            <ul className="flex flex-col gap-3">
              {[
                "iPhone App Development",
                "iPad App Development",
                "Apple Watch App Development",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* WHAT WE DO */}
      <div className="mt-20">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="font-semibold text-3xl md:text-5xl text-slate-100">
            What We Do
          </h1>
          <p className="text-slate-300 text-lg md:text-xl mt-2">
            World class mobile apps featured in app stores
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Smartphone,
              title: "Complete Mobile App Development",
              text: "End-to-end development from design to deployment.",
            },
            {
              icon: Table2,
              title: "Extensive UI, Practical UX",
              text: "Simple and powerful user experiences.",
            },
            {
              icon: ShieldCheck,
              title: "Security and Privacy",
              text: "Projects protected under strict confidentiality.",
            },
            {
              icon: Expand,
              title: "Room For Expandability",
              text: "Apps built with scalability in mind.",
            },
            {
              icon: Shapes,
              title: "Agile Working Pattern",
              text: "Flexible and fast development cycles.",
            },
            {
              icon: Wrench,
              title: "Support and Rescue Missions",
              text: "Maintenance and rescue for unfinished projects.",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-slate-900 p-8 shadow-sm shadow-gray-800 rounded-lg hover:shadow-lg transition"
              >
                <Icon size={36} className="text-orange-500" />
                <h2 className="py-4 text-xl font-semibold text-slate-100">
                  {item.title}
                </h2>
                <p className="text-slate-300">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MobileDev;