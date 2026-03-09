import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Briefcase, Smile, Calendar, Users } from "lucide-react";
import { useEffect, useRef } from "react";

function Counter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, Math.round);

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
      });
    }
  }, [isInView, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

function StatsSection() {

const stats = [
  {
    icon: Briefcase,
    number: 46,
    label: "Successful Projects",
  },
  {
    icon: Smile,
    number: 21,
    label: "Happy Clients",
  },
  {
    icon: Calendar,
    number: 4,
    label: "Years of Experience",
  },
  {
    icon: Users,
    number: 12,
    label: "Expert Team Members",
  },
];

  return (
    <div className="py-24 bg-slate-900 font-serif">

      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center relative"
              >

                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-5 shadow-md">
                  <Icon size={36} className="text-orange-500" />
                </div>

                {/* Animated Number */}
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  <Counter value={stat.number} />
                </h2>

                {/* Label */}
                <p className="text-gray-400 mt-2">
                  {stat.label}
                </p>

                {/* Divider */}
                {index !== stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 h-20 w-px bg-gray-700 translate-x-6"></div>
                )}

              </motion.div>
            );
          })}

        </div>

      </div>

    </div>
  );
}

export default StatsSection;