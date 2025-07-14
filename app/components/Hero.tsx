'use client'
import Image from 'next/image'
import { ReactTyped } from 'react-typed'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import MainImage from '../images/Main_image.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
      }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-800/70 to-cyan-900/80 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl w-full px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-white text-3xl md:text-4xl font-semibold font-serif">Hi, I&apos;m</h1>
          <h1 className="text-cyan-200 text-5xl md:text-6xl lg:text-7xl font-extrabold font-serif mb-4">G Teepakraaj</h1>

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
              <span className="animate-pulse">|</span>
            </span>
          </h3>

          <p className="text-blue-100 font-serif text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Crafting intelligent systems with a passion for real-world problem solving.
            Currently pursuing <span className="text-cyan-300 font-semibold">B.Tech in Computer Science and Engineering</span> at <span className="text-cyan-300 font-semibold">SASTRA University</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <a href="#contact" className="px-6 py-3 bg-gradient-to-tr from-blue-500 via-cyan-300 to-blue-500 text-blue-900 hover:text-blue-950 rounded-full font-semibold hover:bg-gradient-to-tr hover:from-blue-600 hover:via-cyan-400 hover:to-blue-600 hover:scale-105 transition">Contact Me</a>
            <a href="/showcase?tab=projects" className="px-6 py-3 border border-cyan-300 text-cyan-300 rounded-full font-semibold hover:bg-gradient-to-tr hover:from-blue-600 hover:via-cyan-400 hover:to-blue-600 hover:text-blue-950 hover:scale-105 transition">View Projects</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl text-cyan-300 mt-6 justify-center lg:justify-start">
            <a href="https://www.linkedin.com/in/teepakraaj/" target="_blank" className="hover:text-white hover:scale-125 transition"><FaLinkedin /></a>
            <a href="https://github.com/TEEPAKRAAJ" target="_blank" className="hover:text-white hover:scale-125 transition"><FaGithub /></a>
            <a href="https://www.instagram.com/teepakraaj_06/" target="_blank" className="hover:text-white hover:scale-125 transition"><FaInstagram /></a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative w-[250px] md:w-[300px] lg:w-[350px] aspect-square group overflow-hidden">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-400 blur-xl opacity-50 group-hover:opacity-80 transition duration-300"></div>

            {/* Profile image */}
            <Image
              src={MainImage}
              alt="Profile"
              fill
              className="rounded-full border-4 border-cyan-300 shadow-xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}