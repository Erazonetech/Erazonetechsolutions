// // TechCategory.js
// import React from 'react';
// import TechItem from './TechItem';

// const TechCategory = ({ title, technologies }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
//       <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
//         {title}
//       </h3>
//       <div className="grid grid-cols-2 gap-4">
//         {technologies.map((tech, index) => (
//           <TechItem key={index} name={tech.name} icon={tech.icon  } />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TechCategory;

import React from "react";
import { motion } from "framer-motion";

const TechCategory = ({ title, technologies, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6 
                 hover:border-teal-500 hover:shadow-lg hover:shadow-teal-500/10 
                 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold text-slate-100 mb-6">
        {title}
      </h3>

      <ul className="space-y-3">
        {technologies.map((tech, index) => (
          <li
            key={index}
            className="text-slate-400 hover:text-teal-400 transition cursor-default"
          >
            {tech.name}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TechCategory;