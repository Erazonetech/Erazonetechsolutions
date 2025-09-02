// TechCategory.js
import React from 'react';
import TechItem from './TechItem';

const TechCategory = ({ title, technologies }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {technologies.map((tech, index) => (
          <TechItem key={index} name={tech.name} icon={tech.icon  } />
        ))}
      </div>
    </div>
  );
};

export default TechCategory;