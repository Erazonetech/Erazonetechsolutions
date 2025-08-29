import React, { useEffect } from 'react'
import {motion} from 'framer-motion'

import img1 from '../imgs/Node.png'
import img2 from '../imgs/reactjs.png'
import img3 from '../imgs/dj.png'
import img4 from '../imgs/Angular.png'
import img5 from '../imgs/flask.png'
import adobe from '../imgs/figma (1).png'
import figma from '../imgs/figma (2).png'
import python from '../imgs/python.png'
import javaScript from '../imgs/javascript-logo.webp'
import typescript from '../imgs/typescript.png'
import html from '../imgs/HTML.png'
import css from '../imgs/css.png'
import firebase from '../imgs/Firebase.png'
import mongodb from '../imgs/Mongodb.png'
import mysql from '../imgs/mysql.png'
import postgresql from '../imgs/postgresql.png'
import sqlite from '../imgs/sqlite.svg'
import googleCloude from '../imgs/google-cloud.png'
import aws from '../imgs/aws.png'
import materialUi from '../imgs/material-ui.svg'
import redux from '../imgs/redux.png'
import git from '../imgs/git.svg'
import gitHub from '../imgs/github.png'
import jira from '../imgs/jira.webp'

const variants = {
    initial:{
        y:300,
        opacity:0
    },
    animate:{
        y:1,
        opacity:1,
        transition:{
            duration:0.8,
            // taggerChildren:0.1
        }
    }
}



function Technologies({setIsHome}) {

 const items = [
    {
      title: "Node JS",
      img:img1,
    },
    {
      title: "React JS",
      img:img2,
    },
    {
      title: "Django",
      img:img3,
    },
    {
      title: "Angular",
      img:img4,
    },
    {
      title: "Flask",
      img:img5,
    },
 ];

  const secondItems = [
    {
      title: "Figma",
      img:adobe,
    },
    {
        title:"Adobe",
        img:figma
    }
  ]

const thirdItems = [
    {
        title:"JavaScript",
        img:javaScript
    },
    {
        title:"Python",
        img:python
    },
    {
        title:"Typescript",
        img:typescript
    },
    {
        title:"HTML",
        img:html,
    },
    {
        title:"CSS",
        img:css
    }
]

const fourthItems = [
    {
        title:"Firebase",
        img:firebase
    },
    {
        title:"MongoDB",
        img:mongodb
    },
    {
        title:"Mysql",
        img:mysql
    },
    {
        title:"Postgresql",
        img:postgresql
    },
    {
        title:"Sqlite",
        img:sqlite
    }
]

const fifthItems = [
    {
        title:"Material UI",
        img:materialUi
    },
    {
        title:"Git",
        img:git
    },
    {
        title:"GitHub",
        img:gitHub
    },
    {
        title:"Redux",
        img:redux
    },
    {
        title:"Jira",
        img:jira,
    }
]
    useEffect(()=>{
        setIsHome(false)
    },[setIsHome])
  return (
    <motion.div variants={variants} initial="initial" whileInView="animate" className='mt-40 mx-20 mb-20 text-black'>
          <div className="flex xl:flex-row lg:flex-row sm:flex-col md:flex-col justify-between gap-20">
                <div  className='flex flex-col items-center py-10 shadow-sm p-5 hover:shadow-amber-600'>
                    <h2 className='font-semibold text-5xl pb-5'>Technologies</h2>
                    <p className='text-xl'>At Erazonetech Company, we provide cutting-edge software solutions to help businesses stay ahead. Our team leverages the latest technologies, tools, and frameworks for efficient, reliable systems. Partner with us to ensure your business remains competitive in a rapidly evolving digital landscape.</p>
                </div>
                <img src='/tools.jpeg' alt='tools' className='w-[100%] rounded-lg shadow-md shadow-orange-500' />
          </div>
        <div className='flex flex-col items-center gap-4 py-10 my-10'>
            <div className='flex w-[90%] gap-10 items-center mb-10'>
                <h2 className='font-semibold text-5xl pb-5 text-center'>Web Development</h2>
                <p className='text-xl w-[60%]'>We build dynamic, responsive websites tailored to your business needs. Our team uses the latest technologies to ensure your online presence is effective and secure.</p>
            </div>
            <div className='flex gap-10'>
                {items.map((item, index)=>(
                     <div key={index} className='flex flex-col items-center gap-2'>
                     <div className='bg-white shadow-sm shadow-black flex    items-center justify-center p-2 rounded-md'>
                       <img src={item.img} alt="react.js" className='w-20 h-16 ' />
                   </div>
                   <h2 className='font-semibold text-xl'>{item.title}</h2>
                </div>
                ))}
            </div>
        </div>
        
        <div className='flex flex-col items-center gap-4 py-10'>
            <div className='flex w-[90%] gap-10 items-center mb-10'>
                <h2 className='font-semibold text-5xl pb-5'>UI/UX Design Services</h2>
                <p className='text-xl w-[60%]'>We create attractive and user-friendly designs with an exceptional user experience. Our team utilizes the latest principles and tools to craft the best user interface for you.</p>
            </div>
            <div className='flex gap-10'>
                {secondItems.map((item,index)=>([
                     <div key={index} className='flex flex-col items-center gap-2'>
                    <div className='bg-white shadow-sm shadow-black flex items-center justify-center p-2 rounded-md'>
                    <img src={item.img} alt={item.title} className='w-20 h-16 ' />
                    </div>
                    <h2 className='font-semibold text-xl'>{item.title}</h2>
                </div>
                ]))}
            </div>
        </div>

         <div className='flex flex-col items-center gap-4 py-10'>
            <div className='flex w-[90%] gap-10 items-center mb-10'>
                <h2 className='font-semibold text-5xl pb-5 text-center'>Languages</h2>
                <p className='text-xl w-[60%]'>We build dynamic and responsive web applications by seamlessly integrating both front-end and back-end technologies. Our front-end expertise ensures an engaging user interface, while our back-end solutions provide the robustness and scalability needed for performance-driven applications. By using cutting-edge technologies, we deliver seamless experiences that are both functional and user-friendly, ensuring the success of your digital projects.</p>
            </div>
            <div className='flex gap-10'>

                {thirdItems.map((item,index)=>(
                    <div key={index} className='flex flex-col items-center gap-2'>

                    <div className='bg-white shadow-sm shadow-black flex items-center justify-center p-2 rounded-md'>
                    <img src={item.img} alt={item.title} className='w-20 h-16 ' />
                    </div>
                    <h2 className='font-semibold text-xl'>{item.title}</h2>
                </div>
                ))}

            </div>
        </div>

          <div className='flex flex-col items-center gap-4 py-10'>
            <div className='flex w-[90%] gap-10 items-center mb-10'>
                <h2 className='font-semibold text-5xl pb-5 text-center'>Mobile Development</h2>
                <p className='text-xl w-[60%]'>We build dynamic and responsive web applications by seamlessly integrating both front-end and back-end technologies. Our front-end expertise ensures an engaging user interface, while our back-end solutions provide the robustness and scalability needed for performance-driven applications. By using cutting-edge technologies, we deliver seamless experiences that are both functional and user-friendly, ensuring the success of your digital projects.</p>
            </div>
            <div className='flex flex-col items-center gap-2'>

                <div className='bg-white shadow-sm shadow-black flex items-center justify-center p-2 rounded-md'>
                   <img src={img2} alt="react.js" className='w-20 h-16 ' />
                </div>
              <h2 className='font-semibold text-xl'>React Native</h2>
            </div>
        </div>

          <div className='flex flex-col items-center gap-4 py-10'>
            <div className='flex w-[90%] gap-10 items-center mb-10'>
                <h2 className='font-semibold text-5xl pb-5 text-center'>Databases</h2>
                <p className='text-xl w-[60%]'>We design and manage robust, secure, and scalable databases tailored to your business requirements. Our team ensures seamless data integration and optimal performance for your applications.</p>
            </div>
            <div className='flex gap-10'>

                {
                    fourthItems.map((item,index)=>(
                    <div key={index} className='flex flex-col items-center gap-2'>
                    <div className='bg-white shadow-sm shadow-black flex items-center justify-center p-2 rounded-md'>
                    <img src={item.img} alt={item.title} className='w-20 h-16 ' />
                    </div>
                     <h2 className='font-semibold text-xl'>{item.title}</h2>
                </div>
                    ))
                }
                <div className='flex flex-col items-center gap-2'>
                    <div className='bg-white shadow-sm shadow-black flex items-center justify-center p-2 rounded-md'>
                    <img src={sqlite} alt="sqlite" className='w-20 h-16 ' />
                    </div>
                     <h2 className='font-semibold text-xl'>Sqlite</h2>
                </div>
                
            </div>
        </div>

           <div className='flex flex-col items-center gap-4 py-10'>
            <div className='flex w-[90%] gap-10 items-center mb-10'>
                <h2 className='font-semibold text-5xl pb-5'>Infrastructure</h2>
                <p className='text-xl w-[60%]'>We design and implement reliable and scalable infrastructure solutions that support your business growth. Our team ensures high performance, security, and seamless integration across all systems.</p>
            </div>
            <div className='flex gap-10'>
                <div className='flex flex-col items-center gap-4 py-10'>
                    <div className='bg-white shadow-sm shadow-black flex items-center justify-center p-2 rounded-md'>
                    <img src={aws} alt="aws" className='w-20 h-16 ' />
                    </div>
                     <h2 className='font-semibold text-xl'>AWS</h2>
                </div>

                <div className='flex flex-col items-center gap-4 py-10'>
                  <div className='bg-white shadow-sm shadow-black flex items-center justify-center p-2 rounded-md'>
                   <img src={googleCloude} alt="googleCloude" className='w-20 h-16 ' />
                </div>
                 <h2 className='font-semibold text-xl'>Google Cloud</h2>
                </div>
            </div>
        </div>

         <div className='flex flex-col items-center gap-4 py-10'>
            <div className='flex w-[90%] gap-10 items-center mb-10 '>
                <h2 className='font-semibold text-5xl pb-5'>Tools</h2>
                <p className='text-xl w-[60%]'>We use Material UI for modern, responsive UIs and Redux/NGRX for effective state management. Git and GitHub ensure smooth version control and collaboration, while Jira helps manage tasks and track project progress.</p>
            </div>

            <div className='flex gap-10'>

                {
                    fifthItems.map((item,index)=>(
                <div key={index} className='flex flex-col items-center gap-4 py-10'>
                    <div className='bg-white shadow-sm shadow-black flex items-center justify-center p-2 rounded-md'>
                    <img src={item.img} alt={item.title} className='w-20 h-16 ' />
                    </div>
                    <h2 className='font-semibold text-xl'>{item.title}</h2>
                </div>
                    ))
                }

            </div>
        </div>
    </motion.div>
  )
}

export default Technologies