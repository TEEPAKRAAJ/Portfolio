'use client'

import { FaLinkedin, FaGithub, FaInstagram, FaHeart } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'

export default function Footer() {
  return (
    <footer className="bg-gray-900/90 border-t border-gray-700 text-gray-300 py-16 mt-8 transition-colors duration-500" style={{ fontFamily: 'Georgia' }}>
      <div className="w-9/10 mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <AnimatedSection direction="left" delay={200} className="text-center md:text-left">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              G Teepakraaj
            </div>
            <div className="text-lg mb-6 transition-colors duration-300 text-gray-200">
              Creating a Dynamic and Interactive Portfolio
            </div>
            
            {/* Enhanced Social Links */}
            <div className="flex gap-6 justify-center md:justify-start mb-6">
              <a 
                href="https://www.linkedin.com/in/teepakraaj/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://github.com/TEEPAKRAAJ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.instagram.com/teepakraaj_06/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </AnimatedSection>

          {/* Quick Links Section */}
          <AnimatedSection direction="right" delay={400} className="text-center md:text-right">
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300">Home</a>
              <a href="#about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300">About</a>
              <a href="#showcase" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300">Highlights</a>
              <a href="#contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300">Contact</a>
            </div>
          </AnimatedSection>
        </div>

        {/* Divider */}
        <AnimatedSection direction="up" delay={600} className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></AnimatedSection>

        {/* Copyright Section */}
        <AnimatedSection direction="up" delay={800} className="text-center">
          <div className="text-sm text-gray-400 py-4 flex items-center justify-center gap-2">
            <span>© 2024 G Teepakraaj | All rights reserved.</span>
            <span className="flex items-center gap-1">
              Made with <FaHeart className="text-red-500 animate-pulse" /> and Next.js
            </span>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
