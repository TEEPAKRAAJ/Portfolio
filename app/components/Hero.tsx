'use client'
import Image from 'next/image'
import { ReactTyped } from 'react-typed'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import MainImage from '../images/Main_image.png'
import BackgroundHero from '../images/Background_hero.png' // <-- Import local bg image
import AnimatedSection from './AnimatedSection'
import { useTheme } from '../contexts/ThemeContext'

export default function Hero() {
  const { theme } = useTheme();
  
  return (
    <section
      id="home"
      className={`relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-fixed transition-colors duration-500 ${
        theme === 'dark' 
          ? 'bg-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-cyan-50 to-white'
      }`}
      style={{
        backgroundImage: `url(${BackgroundHero.src})`, // <-- Use local image
      }}
    >
      {/* Enhanced overlay */}
      <div className={`absolute inset-0 transition-colors duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-900/90 via-slate-900/85 to-blue-900/90'
          : 'bg-gradient-to-br from-blue-900/85 via-slate-800/80 to-cyan-900/85'
      } z-0`}></div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl w-full px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Text Section */}
        <AnimatedSection direction="left" delay={200} className="flex-1 text-center lg:text-left">
          <h1 className="text-white text-3xl md:text-4xl font-semibold font-serif mb-2">Hi, I&apos;m</h1>
          <h1 className="text-cyan-200 text-5xl md:text-6xl lg:text-7xl font-extrabold font-serif mb-4 bg-gradient-to-r from-cyan-200 via-blue-200 to-cyan-300 bg-clip-text text-transparent">
            G Teepakraaj
          </h1>

          <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-semibold flex justify-center lg:justify-start items-center gap-2 mb-4">
            And I&apos;m a
            <span className="text-cyan-300 font-light">
              <ReactTyped
                strings={[
                  "Data Analyst",
                  "Data Scientist",
                  "Problem Solver",
                  "Prompt Engineer",
                  "ML/DL Enthusiast",
                  "Web Developer",
                  "AI Engineer",
                  "Software Engineer",
                  "Full Stack Developer",
                  "UI/UX Designer"
                ]}
                typeSpeed={80}
                backSpeed={40}
                loop
              />
              <span className="animate-pulse text-cyan-400">|</span>
            </span>
          </h3>

          <p className="text-blue-100 font-serif text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
            Crafting intelligent systems with a passion for real-world problem solving.
            Currently pursuing <span className="text-cyan-300 font-semibold">B.Tech in Computer Science and Engineering</span> at <span className="text-cyan-300 font-semibold">SASTRA University</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <a 
              href="#contact" 
              className="group px-8 py-4 bg-gradient-to-tr from-blue-600 via-cyan-500 to-blue-600 text-white hover:text-white rounded-full font-semibold hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 border border-transparent hover:border-blue-400"
            >
              <span className="flex items-center justify-center gap-2">
                Contact Me
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a 
              href="#showcase" 
              className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-gradient-to-tr hover:from-cyan-500 hover:via-blue-500 hover:to-cyan-500 hover:text-white hover:scale-105 transition-all duration-300 hover:border-transparent hover:shadow-xl hover:shadow-cyan-500/25"
            >
              <span className="flex items-center justify-center gap-2">
                View Highlights
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl text-cyan-300 mt-8 justify-center lg:justify-start">
            <a href="https://www.linkedin.com/in/teepakraaj/" target="_blank" className="hover:text-white hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-white/10">
              <FaLinkedin />
            </a>
            <a href="https://github.com/TEEPAKRAAJ" target="_blank" className="hover:text-white hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-white/10">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/teepakraaj_06/" target="_blank" className="hover:text-white hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-white/10">
              <FaInstagram />
            </a>
          </div>
        </AnimatedSection>

        {/* Image Section */}
        <AnimatedSection direction="right" delay={400} className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative w-[250px] md:w-[300px] lg:w-[350px] aspect-square group">
            <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-cyan-400 via-blue-400 to-cyan-400">
              <Image
                src={MainImage}
                alt="Profile"
                fill
                className="rounded-full border-4 border-white dark:border-gray-800 shadow-2xl object-cover transition-all duration-500 ease-in-out hover:scale-105"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
