'use client'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Link from 'next/link'
import Image from "next/image"
import image from '../images/BayMax.jpg'
import image1 from '../images/LiveCount.jpeg'
import image2 from '../images/stlToLayers.jpg'
import image3 from '../images/TIC_TAC_TOE.png'
import image4 from '../images/Retail_shop_management.png'

const projects = [
  {
    title: 'BayMax HealthCare Chatbot',
    desc: 'Developed the Baymax Chatbot by utilizing RAG for enhancing LLM with external knowledge and used NLP techniques for the Processing of the user text. By using LLM, RAG, NLP the chatbot works on the best accuracy and up-to-date in generated texts.',
    tags: ['RAG', 'NLP', 'LLM', 'React', 'Figma', 'HTML5', 'CSS', 'JavaScript'],
    icon: <Image src={image} alt="BayMax" className="h-60 w-full object-cover rounded-lg" />,
    github: 'https://github.com/UnAuthDevX/BayMax-'
  },
  {
    title: 'Live Count',
    desc: 'Developed a real-time prawn seed counting system using OpenCV, achieving over 99% accuracy through grayscale conversion, blurring, thresholding, and contour detection.',
    tags: ['Python', 'OpenCV', 'Matplotlib'],
    icon: <Image src={image1} alt="Live Count" className="h-60 w-full object-cover rounded-lg" />,
    github: 'https://github.com/TEEPAKRAAJ/Prawn-seed-detection'
  },
  {
    title: 'STL File To Image Layers Generator',
    desc: 'Developed a web-based STL slicer using Python, Django, and Trimesh to visualize 3D model cross-sections layer by-layer, enabling users to upload STL files and view 2D slices.',
    tags: ['Django', 'OpenCV', 'Trimesh', 'Matplotlib'],
    icon: <Image src={image2} alt="STL Slicer" className="h-60 w-full object-cover rounded-lg" />,
    github: 'https://github.com/TEEPAKRAAJ/STL-to-Image-Slice-Generator'
  },
  {
    title: 'TIC TAC TOE Game',
    desc: 'Designed and developed as a 12th-grade project using Python and Tkinter with fully handwritten game logic. Features Player vs Computer mode with win/draw detection.',
    tags: ['Python', 'TKinter'],
    icon: <Image src={image3} alt="Tic Tac Toe" className="h-60 w-full object-cover rounded-lg" />,
    github: 'https://github.com/TEEPAKRAAJ/TIC-TAC-TOE'
  },
  {
    title: 'Retail Shop Accounting Software',
    desc: 'Developed a Django-based web application to help small retail shops manage daily sales, customer payments, and generate monthly/yearly financial reports. Used Tailwind CSS for UI.',
    tags: ['Python', 'Django', 'SQLite', 'Tailwind CSS', 'Render'],
    icon: <Image src={image4} alt="Retail Shop" className="h-60 w-full object-cover rounded-lg" />,
    github: 'https://github.com/TEEPAKRAAJ/retail-shop-accounting-software',
    demo: 'https://retail-shop-accounting-software-1.onrender.com/'
  }
];

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-3xl">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="relative rounded-2xl p-6 bg-white flex flex-col h-full transition-transform duration-300 hover:scale-105"
          style={{ fontFamily: 'Georgia' }}
        >
          <div className="absolute inset-0 rounded-2xl pointer-events-none z-0 border-4"
            style={{
              borderImage: 'linear-gradient(to top, #1e40af, #2563eb, #06b6d4) 1',
            }}
          />
          <div className="relative z-10 flex flex-col h-full">
            <div className="overflow-hidden rounded-lg mb-4">
              {project.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="bg-blue-100 border border-blue-200 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-auto justify-end">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-400 hover:from-gray-800 hover:to-gray-600 text-white font-semibold px-4 py-2 rounded-full shadow transition-all duration-300 hover:scale-110 hover:shadow-lg group"
    >
      <FaGithub className="text-lg transform transition-transform duration-300 group-hover:rotate-20" />
      <span>GitHub</span>
    </a>
  )}
  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-800 hover:from-pink-500 hover:via-purple-600 hover:to-indigo-500 text-white font-semibold px-4 py-2 rounded-full shadow transition-all duration-300 hover:scale-110 hover:shadow-lg group"
    >
      <FaExternalLinkAlt className="text-base transform transition-transform duration-300 group-hover:rotate-20" />
      <span>Demo</span>
    </a>
  )}
</div>
          </div>
        </div>
      ))}
    </div>
  );
}