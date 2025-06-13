'use client'
import Image from 'next/image'
import MainImage from '../images/Main_image.png'
import background_image from '../images/Background_hero.png'
import { ReactTyped } from 'react-typed'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen w-screen flex items-center justify-center"
      style={{
      backgroundImage: `url(${background_image.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto my-auto flex flex-col md:flex-row items-center justify-center px-8 py-16 w-9/10 h-full">
      {/* Left: Text */}
      <div className="flex-1">
        <h1 className="text-white font-semibold lg:text-4xl md:text-3xl sm:text-xl mb-2" style={{ fontFamily: 'Georgia' }}>Hi, I&apos;m</h1>
        <h1 className="lg:text-7xl md:text-5xl sm:text-4xl font-extrabold mb-2 text-white" style={{ fontFamily: 'Georgia' }}>
        <span className="text-cyan-300">G Teepakraaj</span>
        </h1>
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white flex items-center gap-2">
        And I&apos;m a&nbsp;
        <span className="font-thin">
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
        </span>
        </h3>
        <p className="text-blue-100 text-base mb-8 max-w-xl" style={{ fontFamily: 'Times New Roman' }}>
        Crafting intelligent systems with a passion for real-world problem solving.
Currently pursuing<span className='text-cyan-300'> B.Tech in Computer Science and Engineering</span> at <span className='text-cyan-300'>SASTRA University</span>.
        </p>
        <div className="flex gap-4 mb-8">
        <a
          href="#contact"
          className="bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:from-blue-800 hover:via-blue-500 hover:to-cyan-300 hover:scale-110 transition transition-smooth"
          style={{ fontFamily: 'Georgia' }}
        >
          Contact Me
        </a>
        <a
          href="#projects"
          className="bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:from-blue-800 hover:via-blue-500 hover:to-cyan-300 hover:scale-110 transition transition-smooth"
          style={{ fontFamily: 'Georgia' }}
        >
          View Projects
        </a>
        </div>
        <div className="flex gap-4 mt-2 text-2xl">
        <a href="https://www.linkedin.com/in/teepakraaj/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-white hover:scale-150 transition">
          <FaLinkedin />
        </a>
        <a href="https://github.com/TEEPAKRAAJ" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:scale-150 hover:text-white transition">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/teepakraaj_06/" className="text-cyan-300 hover:scale-150 hover:text-white transition">
          <FaInstagram />
        </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center mt-12 md:mt-0">
        <div className="relative">
        <div className="flex items-center justify-center border-cyan-400">
          {/* Replace with your image */}
          <Image
          src={MainImage}
          alt="Profile"
          className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
        </div>
      </div>
      </div>
    </section>
  )
}
