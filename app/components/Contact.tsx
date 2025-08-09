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
  FaPaperPlane,
} from 'react-icons/fa';
import AnimatedSection from './AnimatedSection'
import { useTheme } from '../contexts/ThemeContext'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const { theme } = useTheme();

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
    <section id="contact" className={`py-24 transition-colors duration-500 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50'
    }`} style={{ fontFamily: 'Georgia' }}>
      <div className="w-9/10 mx-auto px-4">
        {/* Enhanced Heading */}
        <AnimatedSection direction="up" delay={200} className="text-center mb-16">
          <h2 className={`text-5xl font-extrabold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Have a project in mind or want to collaborate? Feel free to reach out to me.
          </p>
        </AnimatedSection>

        {/* Enhanced Cards Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Enhanced Contact Info */}
          <AnimatedSection direction="left" delay={400} className="w-full">
            <div className={`rounded-3xl p-8 shadow-xl border transition-all duration-500 hover:shadow-2xl hover:scale-105 ${
              theme === 'dark' 
                ? 'bg-gray-900 border-gray-700/50' 
                : 'bg-white border-gray-200/50'
            }`}>
              <h3 className={`text-3xl font-bold mb-8 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>Contact Information</h3>
              
              <ul className="space-y-8 mb-10" style={{ fontFamily: 'Times new roman' }}>
                <li className="flex items-center gap-4 group">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt size={20} />
                  </span>
                  <div>
                    <div className={`font-semibold transition-colors duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>Location</div>
                    <div className={`text-sm transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>Hosur, Krishnagiri, Tamil Nadu, India</div>
                  </div>
                </li>
                
                <li className="flex items-center gap-4 group">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope size={20} />
                  </span>
                  <div>
                    <div className={`font-semibold transition-colors duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>Email</div>
                    <div className={`text-sm space-y-1 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <div>gteepak2003@gmail.com</div>
                      <div>126003275@sastra.ac.in</div>
                    </div>
                  </div>
                </li>
                
                <li className="flex items-center gap-4 group">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaPhone size={20} />
                  </span>
                  <div>
                    <div className={`font-semibold transition-colors duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>Phone</div>
                    <div className={`text-sm transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>+91 9629103081</div>
                  </div>
                </li>
              </ul>

              {/* Enhanced Social Links */}
              <div>
                <div className={`font-semibold mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>Follow Me</div>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/teepakraaj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/TEEPAKRAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white rounded-full p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/teepakraaj_06/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Enhanced Contact Form */}
          <AnimatedSection direction="right" delay={600} className="w-full">
            <div className={`rounded-3xl p-8 shadow-xl border transition-all duration-500 hover:shadow-2xl ${
              theme === 'dark' 
                ? 'bg-gray-900 border-gray-700/50' 
                : 'bg-white border-gray-200/50'
            }`}>
              <h3 className={`text-3xl font-bold mb-8 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>Send Me a Message</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-1/2 border-2 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition-all duration-300 ${
                      theme === 'dark'
                        ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400'
                        : 'border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-500'
                    }`}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-1/2 border-2 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition-all duration-300 ${
                      theme === 'dark'
                        ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400'
                        : 'border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-500'
                    }`}
                    required
                  />
                </div>
                
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full border-2 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition-all duration-300 ${
                    theme === 'dark'
                      ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400'
                      : 'border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-500'
                  }`}
                  required
                />
                
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full border-2 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition-all duration-300 resize-none ${
                    theme === 'dark'
                      ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400'
                      : 'border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-500'
                  }`}
                  required
                />
                
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  <span>Send Message</span>
                  <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}