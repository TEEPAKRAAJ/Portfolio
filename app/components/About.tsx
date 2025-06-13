'use client'
import Image from "next/image"
import About_image from "../images/About_image.jpg"
export default function About() {
  return (
    <section id="about" className="py-28 bg-white ">
      <div className="w-9/10 mx-auto flex flex-col md:flex-row items-center px-8" style={{ fontFamily: 'Georgia' }}>
        {/* Left: Image Card */}
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <div className="">
            <div className=" rounded-lg   flex items-center justify-center z-10">
              <Image src={About_image} alt="Profile Image" className="rounded-lg object-cover hover:scale-105 hover:shadow-3xl transition-transform duration-300 ease-in-out " />
            
            </div>
            <span className="absolute -bottom-3 left-16 w-4 h-4 rounded-full bg-[#d3d7a3]"></span>
          </div>
        </div>
        {/* Right: Text */}
        <div className="flex-1 md:pl-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mb-6 rounded"></div>
          <h3 className="text-xl font-bold mb-2">Who am I?</h3>
          <p className="text-gray-700 mb-4">
          I’m a tech enthusiast and Computer Science student with a passion for solving problems and building creative digital solutions. I enjoy working across many areas of technology, including data analysis, machine learning, web development, AI, software engineering, and UI/UX design.</p>
          <p className="text-gray-700 mb-6">
          I have hands-on experience from internships and hackathons, where I’ve built projects like computer vision systems for real-time counting, AI tools for agriculture, and user-friendly web apps. I love learning new things, working with teams, and turning ideas into real products that help people.</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm mb-6" style={{ fontFamily: 'Times new roman' }}>
            <div><span className="font-bold">Name:</span> G Teepakraaj</div>
            <div><span className="font-bold">Email:</span><ul><li>gteepak2003@gmail.com</li>
            <li>126003275@sastra.ac.in</li></ul></div>
            <div><span className="font-bold">Location:</span> Hosur, Krishnagiri, Tamil Nadu, India</div>
            <div><span className="font-bold">Availability:</span> Available for freelance</div>
          </div>
          <a
            href="/resume/126003275_Teepakraaj.pdf" // Update with your resume path
            download="Teepakraaj_Resume.pdf"
            className="inline-flex items-center bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:from-blue-900 hover:via-blue-500 hover:to-cyan-300 hover:scale-110 transition transition-smooth"
          >
            Download Resume
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
