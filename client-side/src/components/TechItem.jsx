// TechItem.js
import React from 'react';
import { 
  SiReact, 
  SiVuedotjs, 
  SiAngular, 
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiPhp,
  SiMongodb,
  SiAmazonwebservices,
  SiFirebase,
  SiMysql,
  SiFlutter,
  SiApple,
  SiAndroid 
} from 'react-icons/si';

const iconComponents = {
  'react-icon': SiReact,
  'vue-icon': SiVuedotjs,
  'angular-icon': SiAngular,
  'typescript-icon': SiTypescript,
  'nodejs-icon': SiNodedotjs,
  'python-icon': SiPython,
  'java-icon': SiJavascript,
  'php-icon': SiPhp,
  'mongodb-icon': SiMongodb,
  'aws-icon': SiAmazonwebservices,
  'firebase-icon': SiFirebase,
  'mysql-icon': SiMysql,
  'flutter-icon': SiFlutter,
  'apple-icon': SiApple,
  'android-icon': SiAndroid
};


const TechItem = ({ name, icon }) => {

  const IconComponent = iconComponents[icon] || SiReact;


  return (
      <div className="flex flex-col items-center group cursor-pointer">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                      mb-2 group-hover:bg-blue-50 transition-all duration-300 
                      shadow-md group-hover:shadow-lg border border-gray-100">
        <IconComponent className="w-8 h-8 text-gray-700 group-hover:text-blue-600" />
      </div>
      
      <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 
                       transition-colors duration-300 text-center">
        {name}
      </span>
    </div>
  );
};

export default TechItem;