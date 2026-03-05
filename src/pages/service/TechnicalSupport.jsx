import { BrainCircuit, BugOff, UsersRound } from "lucide-react";
import React, { useEffect } from "react";

function TechnicalSupport({ setIsHome }) {
  useEffect(() => {
    setIsHome(false);
  }, [setIsHome]);

  return (
    <div className="bg-slate-950 text-slate-100 pt-32 pb-20 px-6 lg:px-20 font-serif">
      {/* HERO */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 home-service">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-semibold mb-5">
            Technical Support
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mt-3">
            Our dedicated technical support team is here to assist you with any
            issues, ensuring seamless solutions 24/7. Count on us for reliable,
            expert guidance whenever you need it.
          </p>
        </div>
        <img
          src="/support.jpg"
          alt="Technical Support"
          className="rounded-2xl bg-slate-800 shadow-lg shadow-teal-400 max-h-[360px]"
        />
      </div>

      {/* FEATURE CARDS */}
      <div className="mt-20">
        <div className="flex flex-col items-center mb-10 text-center">
          <h1 className="font-semibold text-3xl md:text-5xl mb-2">
            Problem? Solved.
          </h1>
          <p className="text-slate-300 text-lg max-w-xl">
            At Erazone, we value your time, which is why our dedicated support
            team goes above and beyond to resolve your issues swiftly and
            efficiently, ensuring your projects stay on track.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-5">
          {[
            {
              icon: UsersRound,
              title: "Extended Teams",
              text: "Our support team acts as an extension of your own, always available to ensure your business operations run smoothly.",
            },
            {
              icon: BrainCircuit,
              title: "24/7 Monitoring",
              text: "Your systems are monitored in real-time 24/7/365, giving you access to over 16 different metrics directly from the dashboard.",
            },
            {
              icon: BugOff,
              title: "Quick Problem Resolution",
              text: "With an average response time of just 90 seconds and an industry-leading 95% CSAT, issues are resolved swiftly, preventing disruption.",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative group bg-slate-900 p-8 rounded-lg shadow-sm shadow-gray-800 hover:shadow-lg transition overflow-hidden"
              >
                {/* Optional rotating border */}
                <span className="absolute inset-0 rounded-lg border-2 border-orange-500 rotate-border pointer-events-none"></span>

                <Icon size={40} className="text-orange-500 relative z-10" />
                <h2 className="py-5 text-2xl font-semibold text-slate-100 relative z-10">
                  {item.title}
                </h2>
                <p className="text-slate-300 relative z-10">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TechnicalSupport;