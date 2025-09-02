// TechnologyStack.js
import React from 'react';
import { motion } from 'framer-motion';

import TechCategory from './TechCategory';


// Container variant
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Item variant
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};



// const AnimatedTechItem = motion(TechItem);

const TechnologyStack = () => {
  // Technology data - customize with your actual technologies
  const techCategories = [
    {
      title: "Frontend Development",
      technologies: [
        { name: "React", icon: "react-icon" },
        { name: "Vue.js", icon: "vue-icon" },
        { name: "Angular", icon: "angular-icon" },
        { name: "TypeScript", icon: "typescript-icon" }
      ]
    },
    {
      title: "Backend Development",
      technologies: [
        { name: "Node.js", icon: "nodejs-icon" },
        { name: "Python", icon: "python-icon" },
        { name: "Java", icon: "java-icon" },
        { name: "PHP", icon: "php-icon" }
      ]
    },
    {
      title: "Database & Cloud",
      technologies: [
        { name: "MongoDB", icon: "mongodb-icon" },
        { name: "AWS", icon: "aws-icon" },
        { name: "Firebase", icon: "firebase-icon" },
        { name: "MySQL", icon: "mysql-icon" }
      ]
    },
    {
      title: "Mobile Development",
      technologies: [
        { name: "React Native", icon: "react-icon" },
        { name: "Flutter", icon: "flutter-icon" },
        { name: "iOS", icon: "apple-icon" },
        { name: "Android", icon: "android-icon" }
      ]
    }
  ];

  // Use motion components in your TechCategory and TechItem
const AnimatedTechCategory = motion(TechCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Technologies We Use
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to deliver innovative solutions 
            that drive your business forward and keep you ahead of the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <AnimatedTechCategory 
              key={index} 
              title={category.title} 
              technologies={category.technologies} 
              variants={itemVariants}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;