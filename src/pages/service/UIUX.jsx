import { AppWindow, Code, Frame, ListChecks, MonitorCheck, Route } from "lucide-react";
import React, { useEffect } from "react";

function UIUX({ setIsHome }) {
  useEffect(() => {
    setIsHome(false);
  }, [setIsHome]);

  return (
    <div className="bg-slate-950 text-slate-100 pt-36 px-6 md:px-10 pb-20 font-serif">

      {/* HERO */}
      <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-10 home-service">
        <div className="mb-5">
          <h1 className="text-4xl md:text-5xl lg:text-5xl pb-5 text-slate-100 mt-10">
            UI/UX Design
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mt-5">
            We deliver more than just apps. We deliver experiences. Our fast, responsive and highly scalable UI/UX design helps you get ahead of the curve.
          </p>
        </div>
        <img
          className="rounded-2xl bg-slate-800 shadow-xl shadow-teal-400 max-h-[360px]"
          src="/ui-ux.webp"
          alt="UI/UX Design"
        />
      </div>

      {/* WHAT WE DO */}
      <div className="mt-10">
        <div className="flex flex-col items-center justify-center mb-10 text-center">
          <h1 className="font-semibold text-4xl md:text-5xl text-slate-100 mb-2">What We Do</h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl">
            Exceptional UI/UX Designs that enhance user engagement and deliver seamless experiences across platforms.
          </p>
        </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-5">
  {[
    { icon: Route, title: "User Journey Mapping", text: "Creating detailed user personas from in-depth research to craft a comprehensive user journey map." },
    { icon: Frame, title: "Rapid Prototyping", text: "Transforming concepts into interactive prototypes and refining them with feedback-driven wireframes to minimize errors." },
    { icon: AppWindow, title: "UX Design", text: "Providing cutting-edge technology to create immersive user experiences while addressing both current and future challenges." },
    { icon: MonitorCheck, title: "UI Design", text: "Enhancing user interaction by simplifying complex designs and delivering an intuitive and user-friendly interface." },
    { icon: Code, title: "Development", text: "Collaborating between skilled designers and developers to create the highest quality products for our clients." },
    { icon: ListChecks, title: "Testing", text: "Implementing improvements based on business needs through rigorous QA testing and data-driven insights." },
  ].map((item, index) => {
    const Icon = item.icon;
    return (
      <div
        key={index}
        className="relative group bg-slate-900 p-8 rounded-lg shadow-sm shadow-gray-800 hover:shadow-lg transition overflow-hidden"
      >
        {/* Dot moving along border */}
        <span className="border-dot"></span>

        <Icon size={40} className="text-orange-500 relative z-10" />
        <h2 className="py-5 text-2xl font-semibold text-slate-100 relative z-10">{item.title}</h2>
        <p className="text-slate-300 relative z-10">{item.text}</p>
      </div>
    );
  })}
</div>
      </div>

      {/* HOW WE DO IT */}
      <div className="mt-20">
        <div className="flex flex-col justify-center items-center mb-10 text-center">
          <h1 className="font-semibold text-4xl md:text-5xl text-slate-100">How We Do It</h1>
          <p className="text-slate-300 text-lg md:text-xl pt-2 max-w-2xl text-center">
            Our expertise lies in creating user-centered UI/UX designs through in-depth research and collaboration. We deliver intuitive, visually appealing experiences that meet the needs of diverse industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-2 gap-5">
          {[
            { title: "Discovery", steps: ["Understanding your business and its pain points", "Interviews & observations", "Functional requirements"] },
            { title: "Wireframes", steps: ["Concept sketching", "System/Process flow", "Information architecture"] },
            { title: "Build and Iterate", steps: ["Interaction design", "High-fidelity mockups", "Interactive prototypes", "UI Style guide/brand identity", "Operational Testing"] },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 p-8 rounded-lg shadow-sm shadow-gray-800 hover:shadow-lg transition"
            >
              <h2 className="py-5 text-2xl font-semibold text-slate-100">{item.title}</h2>
              <ul className="flex flex-col gap-4">
                {item.steps.map((step, i) => (
                  <li key={i} className="text-slate-300 text-lg flex items-center">
                    <span className="h-3 w-3 bg-orange-600 rounded-full inline-block mr-2"></span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default UIUX;