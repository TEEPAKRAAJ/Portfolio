'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }

    emailjs
      .send(
        'service_8sczc7b', // Replace with your EmailJS Service ID
        'template_1mjvdcf', // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'Kx_BS6dcJZ6K9G3Od' // Replace with your EmailJS User ID
      )
      .then(
        () => {
          alert('Your message has been sent successfully!');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        },
        () => {
          alert('Failed to send the message. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white" style={{ fontFamily: 'Georgia' }}>
      <div className="w-9/10 mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-2">Get In Touch</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded"></div>
        <p className="text-gray-500 text-center mb-12">
          Have a project in mind or want to collaborate? Feel free to reach out to me.
        </p>
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Contact Info */}
          <div className="rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <ul className="space-y-6 mb-8" style={{ fontFamily: 'Times new roman' }}>
              <li className="flex items-center gap-4">
                <span className="bg-white text-blue-600 rounded-full p-3">
                  <FaMapMarkerAlt size={20} />
                </span>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-gray-600 text-sm">Hosur, Krishnagiri, Tamil Nadu, India</div>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-white text-blue-600 rounded-full p-3">
                  <FaEnvelope size={20} />
                </span>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-600 text-sm">
                    <ul>
                      <li>gteepak2003@gmail.com</li>
                      <li>126003275@sastra.ac.in</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-white text-blue-600 rounded-full p-3">
                  <FaPhone size={20} />
                </span>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-600 text-sm">+91 9629103081</div>
                </div>
              </li>
            </ul>
            <div>
              <div className="font-semibold mb-2">Follow Me</div>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/teepakraaj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-blue-200 text-blue-600 rounded-full p-2"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/TEEPAKRAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-blue-200 text-blue-600 rounded-full p-2"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.instagram.com/teepakraaj_06/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-blue-200 text-blue-600 rounded-full p-2"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-8">Send Me a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold shadow hover:from-blue-900 hover:via-blue-500 hover:to-cyan-300 hover:scale-110 transition transition-smooth flex items-center justify-center gap-2"
          >
            Send Message
          </button>
        </form>
          </div>
        </div>
      </div>
    </section>
  );
}