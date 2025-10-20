import React, { useState } from 'react'
import emailjs from '@emailjs/browser'


 // Initialize EmailJS with your Public Key
emailjs.init("feFZaALghp182bUCG"); // Replace with your EmailJS Public Key
const ContactForm = () => {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
      const [status, setStatus] = useState('');

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        // Send email using EmailJS
        emailjs.send(
          'service_7fkko0b', // Replace with your EmailJS Service ID
          'template_6f1a56r', // Replace with your EmailJS Template ID
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Email sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
          console.error('FAILED...', error);
          setStatus('Failed to send email. Please try again.');
        });
      };

      return (
        <div className="mt-[15%] bg-gray-100 flex flex-col items-center justify-center p-10 contact-f">

          <div className='w-[50%] m-auto mt-20 text-center mb-10'>
            <h2 className='text-4xl font-semibold py-5 font-serif'>Let's Talk</h2>
           <p className='text-xl font-serif mb-5'>Choose Erazonetech for reliable, flexible and 24x7 support, where expertise meets requirements, transforming your boldest visions into groundbreaking reality.</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Send Message
              </button>
            </form>
            {status && (
              <p className={`mt-4 text-center ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                {status}
              </p>
            )}
          </div>
        </div>
      );
    };

export default ContactForm