import { Braces, CodeXml, Cog, Layers, ShieldCheck, Wrench } from "lucide-react";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

function WebDevelopment({ setIsHome }) {

  useEffect(() => {
    setIsHome(false);
  }, [setIsHome]);

  const services = [
    {
      icon: Layers,
      title: "Full Stack Development",
      desc: "From frontend prototyping to high-performing backend systems using modern technologies."
    },
    {
      icon: Braces,
      title: "Backend Development",
      desc: "Robust backend services built with scalable architectures and secure APIs."
    },
    {
      icon: CodeXml,
      title: "Frontend Development",
      desc: "Responsive React interfaces with dynamic components and seamless API integrations."
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      desc: "Comprehensive QA processes to ensure reliability, performance and security."
    },
    {
      icon: Cog,
      title: "Maintenance & Support",
      desc: "Continuous maintenance, monitoring and optimization to ensure smooth operations."
    },
    {
      icon: Wrench,
      title: "Project Rescue",
      desc: "Recover struggling projects quickly with experienced developers and proven solutions."
    }
  ];

  const process = [
    {
      title: "Discovery",
      steps: ["Discovery Workshop", "Goal Setting", "Prototyping", "Project Planning"]
    },
    {
      title: "Execution",
      steps: ["Architecture Design", "Backend Development", "APIs & Integrations"]
    },
    {
      title: "QA Testing",
      steps: ["Go Live", "Project Launch", "User Feedback", "Monitoring"]
    },
    {
      title: "Support",
      steps: ["SLA Support", "Operational Support", "Ongoing Maintenance", "Feedback Integration"]
    }
  ];

  return (
    <div className="bg-slate-900 text-slate-100 pt-32 pb-24 px-6 md:px-12 lg:px-20 font-serif">

      {/* HERO */}
      <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Web Development
          </h2>

          <p className="text-slate-300 text-lg">
            Our Agile experts create custom applications, platforms and
            products tailored to your business needs using modern web
            technologies and scalable architectures.
          </p>
        </motion.div>

        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl bg-slate-800 shadow-xl shadow-teal-400 h-[260px]"
          src="/web-dev.jpeg"
          alt="web development"
        />
      </div>

      {/* WHAT WE DO */}
      <h1 className="text-3xl text-center font-semibold text-orange-500 mb-14">
        What We Do
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">

        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-xl shadow-lg shadow-orange-500/10"
          >
            <service.icon size={40} className="text-orange-500 mb-4" />

            <h2 className="text-xl font-semibold mb-3">
              {service.title}
            </h2>

            <p className="text-slate-300">
              {service.desc}
            </p>
          </motion.div>
        ))}

      </div>

      {/* PROCESS */}
      <div className="text-center mb-14">
        <h1 className="text-3xl font-semibold text-orange-500">
          How We Do It
        </h1>

        <p className="text-slate-400 mt-2">
          A clear and structured development process
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {process.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-xl shadow-lg shadow-orange-500/10"
          >

            <h2 className="text-xl font-semibold mb-6">
              {step.title}
            </h2>

            <ul className="space-y-3">

              {step.steps.map((item, i) => (
                <li key={i} className="flex items-center text-slate-300">

                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>

                  {item}

                </li>
              ))}

            </ul>

          </motion.div>
        ))}

      </div>

    </div>
  );
}

export default WebDevelopment;