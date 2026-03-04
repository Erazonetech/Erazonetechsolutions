// import React, { useState } from 'react'
// import emailjs from '@emailjs/browser'


//  // Initialize EmailJS with your Public Key
// emailjs.init("feFZaALghp182bUCG"); // Replace with your EmailJS Public Key
// const ContactForm = () => {
//       const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//       });
//       const [status, setStatus] = useState('');

//       const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//       };

//       const handleSubmit = (e) => {
//         e.preventDefault();
//         setStatus('Sending...');

//         // Send email using EmailJS
//         emailjs.send(
//           'service_7fkko0b', // Replace with your EmailJS Service ID
//           'template_6f1a56r', // Replace with your EmailJS Template ID
//           {
//             name: formData.name,
//             email: formData.email,
//             message: formData.message
//           }
//         )
//         .then((response) => {
//           console.log('SUCCESS!', response.status, response.text);
//           setStatus('Email sent successfully!');
//           setFormData({ name: '', email: '', message: '' });
//         })
//         .catch((error) => {
//           console.error('FAILED...', error);
//           setStatus('Failed to send email. Please try again.');
//         });
//       };

//       return (
//         <div className="mt-[15%] bg-gray-100 flex flex-col items-center justify-center p-10 contact-f">

//           <div className='w-[50%] m-auto mt-20 text-center mb-10'>
//             <h2 className='text-4xl font-semibold py-5 font-serif'>Let's Talk</h2>
//            <p className='text-xl font-serif mb-5'>Choose Erazonetech for reliable, flexible and 24x7 support, where expertise meets requirements, transforming your boldest visions into groundbreaking reality.</p>
//           </div>

//           <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//             <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Your Name"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Your Email"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows="4"
//                   className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Your Message"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
//               >
//                 Send Message
//               </button>
//             </form>
//             {status && (
//               <p className={`mt-4 text-center ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
//                 {status}
//               </p>
//             )}
//           </div>
//         </div>
//       );
//     };

// export default ContactForm

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init("feFZaALghp182bUCG");

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send("service_7fkko0b", "template_6f1a56r", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <section className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-semibold mb-6">
          Let's <span className="text-orange-500">Work Together</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Have a project in mind? We’d love to hear from you. Tell us about
          your idea and let’s build something impactful together.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-slate-900 p-10 rounded-2xl shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm text-slate-400">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm text-slate-400">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
              placeholder="john@email.com"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm text-slate-400">
              Your Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 py-3 rounded-lg font-semibold text-lg"
          >
            Send Message
          </button>
        </form>

        {/* Status */}
        {status && (
          <p
            className={`mt-6 text-center ${
              status.includes("success")
                ? "text-green-400"
                : status.includes("Sending")
                ? "text-yellow-400"
                : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;