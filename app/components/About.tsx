'use client'
import Image from "next/image"
import About_image from "../images/About_image.jpg"
import AnimatedSection from './AnimatedSection'
import { useTheme } from '../contexts/ThemeContext'

export default function About() {
  const { theme } = useTheme();
  
  return (
    <section id="about" className={`py-20 transition-colors duration-500 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50'
    }`}>
      <div className="w-9/10 mx-auto flex flex-col md:flex-row items-center px-8 gap-12" style={{ fontFamily: 'Georgia' }}>
        {/* Left: Enhanced Image Card */}
        <AnimatedSection direction="left" delay={200} className="flex-1 flex justify-center mb-8 md:mb-0">
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
              <Image 
                src={About_image} 
                alt="Profile Image" 
                className="rounded-2xl object-cover hover:scale-105 transition-transform duration-500 ease-in-out" 
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Right: Enhanced Text Content */}
        <AnimatedSection direction="right" delay={400} className="flex-1 md:pl-12">
          <div className="mb-8">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mb-6 rounded-full"></div>
            <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Who am I?
            </h3>
          </div>
          
          <div className="space-y-4 mb-8">
            <p className={`leading-relaxed text-lg transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I&apos;m a tech enthusiast and Computer Science student with a passion for solving problems and building creative digital solutions. I enjoy working across many areas of technology, including data analysis, machine learning, web development, AI, software engineering, and UI/UX design.
            </p>
            <p className={`leading-relaxed text-lg transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I have hands-on experience from internships and hackathons, where I&apos;ve built projects like computer vision systems for real-time counting, AI tools for agriculture, and user-friendly web apps. I love learning new things, working with teams, and turning ideas into real products that help people.
            </p>
          </div>

          {/* Enhanced Info Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-6 rounded-2xl backdrop-blur-sm border transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-gray-800/50 border-gray-700/50' 
              : 'bg-white/70 border-gray-200/50'
          }`}>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
              <span className={`transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <span className="font-bold">Name:</span> G Teepakraaj
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"></div>
              <span className={`transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <span className="font-bold">Location:</span> Hosur, Tamil Nadu
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
              <span className={`transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <span className="font-bold">Availability:</span> Available for freelance
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"></div>
              <span className={`transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <span className="font-bold">Status:</span> Student
              </span>
            </div>
          </div>

          {/* Email section */}
          <div className={`mb-8 p-4 rounded-xl border transition-colors duration-300 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-blue-700/50'
              : 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200/50'
          }`}>
            <h4 className={`font-bold mb-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>Contact Emails:</h4>
            <div className="space-y-1">
              <div className={`flex items-center space-x-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>gteepak2003@gmail.com</span>
              </div>
              <div className={`flex items-center space-x-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>126003275@sastra.ac.in</span>
              </div>
            </div>
          </div>

          {/* Enhanced Download Resume Button */}
          <a
            href="/resume/126003275_Teepakraaj.pdf"
            download="Teepakraaj_Resume.pdf"
            className="group inline-flex items-center bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 border border-transparent hover:border-blue-400"
          >
            <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
            </svg>
            Download Resume
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
