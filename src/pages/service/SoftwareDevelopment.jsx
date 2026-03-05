import React, { useEffect } from "react";
import { CodeXml, Mail, Link, CircleCheckBig, Check } from "lucide-react";
import { motion } from "framer-motion";

const techStacks = [
  {
    id: 1,
    title: "Languages",
    tech: ["Java", "C#", "Python", "JavaScript", "TypeScript", "CSS", "HTML"],
  },
  {
    id: 2,
    title: "Frameworks",
    tech: ["Node JS", "Flask", "Angular", "Spring", "React JS"],
  },
  {
    id: 3,
    title: "Databases",
    tech: ["MySQL", "PostgreSQL", "Firebase", "SQLite", "MongoDB"],
  },
  {
    id: 4,
    title: "Mobile",
    tech: ["Android (Java)", "React Native"],
  },
  {
    id: 5,
    title: "Tools",
    tech: ["Material UI", "Redux", "Git", "Jira", "Microservices", "NGRX", "GitHub"],
  },
  {
    id: 6,
    title: "Infrastructure",
    tech: ["Docker", "Google Cloud", "AWS", "Railway"],
  },
  {
    id: 7,
    title: "UI/UX",
    tech: ["Adobe XD", "Figma"],
  },
];

const industries = [
  "Education",
  "Healthcare",
  "Banking",
  "Manufacturing",
  "Real Estate",
  "Entertainment",
  "Construction",
  "Food & Beverage",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function SoftwareDevelopment({ setIsHome }) {
  useEffect(() => {
    setIsHome(false);
  }, [setIsHome]);

  return (
    <div className="bg-slate-900 text-slate-100 px-6 md:px-12 lg:px-20 py-24 pt-36 font-serif">

      {/* HERO */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex flex-col lg:flex-row gap-16 items-center mb-28"
      >
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Custom Software Development
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed">
            We build scalable, secure, and custom software solutions tailored
            to your business needs. Our development process focuses on
            performance, usability, and long-term maintainability.
          </p>
        </div>

        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl bg-slate-800 shadow-xl shadow-teal-400 max-h-[360px]"
          src="/custom-softwared.png"
          alt="software"
        />
      </motion.div>

      {/* WHY ERAZONE */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl font-semibold text-orange-500 mb-12 text-center"
      >
        Why Choose Erazone
      </motion.h2>

      <div className=" grid md:grid-cols-2 gap-10 mb-28">
        

        {[
          {
            icon: CircleCheckBig,
            title: "5+ Years Experience",
            desc: "Delivering scalable software products for businesses across industries.",
          },
          {
            icon: CodeXml,
            title: "High Technical Competency",
            desc: "Our engineers use modern technologies and development practices.",
          },
          {
            icon: Link,
            title: "Long-Term Partnerships",
            desc: "We focus on building lasting client relationships.",
          },
          {
            icon: Mail,
            title: "20+ Successful Projects",
            desc: "Delivered across healthcare, fintech, education and more.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="relative group bg-slate-800 p-8 rounded-xl flex gap-6 shadow-lg shadow-orange-500/10"
          >
            {/* Dot moving along border */}
        <span className="border-dot"></span>
            <item.icon size={40} className="text-orange-500" />

            <div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-300">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* INDUSTRIES */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl font-semibold text-orange-500 mb-14 text-center"
      >
        Industries We Serve
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-28">

        {industries.map((industry, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            whileHover={{ scale: 1.08 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-6 rounded-xl text-center cursor-pointer
            hover:bg-orange-600 transition duration-300"
          >
            <h3 className="font-semibold text-lg">{industry}</h3>
          </motion.div>
        ))}

      </div>

      {/* TECH STACK */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl font-semibold text-orange-500 text-center mb-16"
      >
        Our Tech Stack
      </motion.h2>

      <div className="space-y-10">

        {techStacks.map((stack, index) => (
          <motion.div
            key={stack.id}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-6"
          >

            {/* TITLE CARD */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 lg:w-[25%] rounded-xl flex items-center justify-center p-8 shadow-md shadow-orange-500/10"
            >
              <h3 className="text-xl font-bold">{stack.title}</h3>
            </motion.div>

            {/* TECH LIST */}
            <div className="bg-slate-800 lg:w-[75%] rounded-xl p-8 shadow-md shadow-orange-500/10">

              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                {stack.tech.map((tech, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 6, scale: 1.05 }}
                    className="flex items-center gap-2 text-slate-300"
                  >
                    <Check size={18} className="text-orange-500" />
                    {tech}
                  </motion.li>
                ))}

              </ul>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SoftwareDevelopment;