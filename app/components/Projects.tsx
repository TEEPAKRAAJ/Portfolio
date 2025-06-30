'use client'
import Image from "next/image"
import image from '../images/BayMax.jpg'
import image1 from '../images/LiveCount.jpeg'
import image2 from '../images/stlToLayers.jpg'
import image3 from '../images/TIC_TAC_TOE.png'
import image4 from '../images/Retail_shop_management.png'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

const projects = [
  {
    title: ' BayMax HealthCare Chatbot',
    desc: 'Developed the Baymax Chatbot by utilizing RAG for enhancing LLM with external knowledge and used NLP techniques for the Processing of the user text. By using LLM, RAG, NLP the chatbot works on the best accuracy and up-to-date in generated texts.',
    tags: ['RAG', 'NLP', 'LLM', 'React','Figma','HTML5', 'CSS', 'JavaScript'],
    icon: (
      <Image src={image} alt="BayMax HealthCare Chatbot" className="h-60 w-100 mx-auto mb-auto " />
    ),
    gradient: 'from-blue-700 via-blue-500 to-cyan-500',
    github:'https://github.com/UnAuthDevX/BayMax-'
  },
  {
    title: 'Live Count',
    desc: 'Developed a real-time prawn seed counting system using OpenCV, achieving over 99% accuracy through grayscale conversion, blurring, thresholding, and contour detection. Built a post-larva shrimp seed detection system using computer vision, enhancing hatchery precision and operational efficiency.',
    tags: ['Python', 'OpenCV', 'Matplotlib'],
    icon: (
      <Image src={image1} alt="Live Count" className="h-60 w-100 mx-auto mb-auto " />
    ),
    gradient: 'from-blue-700 via-blue-500 to-cyan-500',
    github:'https://github.com/TEEPAKRAAJ/Prawn-seed-detection'
  },
  {
    title: 'STL File To Image Layers Generator',
    desc: 'Developed a web-based STL slicer using Python, Django, and Trimesh to visualize 3D model cross-sections layer by-layer, enabling users to upload STL files and view 2D slices generated through automated image processing and rendering.',
    tags: ['Django', 'OpenCV', 'Trimesh','Matplotlib'],
    icon: (
      <Image src={image2} alt="STL File To Image Layers Generator" className="h-60 w-100 mx-auto mb-auto " />
    ),
    gradient: 'from-blue-700 via-blue-500 to-cyan-500',
    github:'https://github.com/TEEPAKRAAJ/STL-to-Image-Slice-Generator'
  },
  {
    title: 'TIC TAC TOE Game',
    desc: 'Designed and developed as a 12th-grade project, this classic Tic Tac Toe game uses Python and Tkinter for the graphical interface. Features Player vs Computer mode with fully handwritten game logic, including turn management and win/draw detection. Built without external libraries like Pygame, focusing on logic clarity and user-friendly design.',
    tags: ['Python', 'TKinter'],
    icon: (
      <Image src={image3} alt="TIC TAC TOE Game" className="h-60 w-100 mx-auto mb-auto " />
    ),
    gradient: 'from-blue-700 via-blue-500 to-cyan-500',
    github:'https://github.com/TEEPAKRAAJ/TIC-TAC-TOE'
  }
  {
    title: 'Retail Shop Accounting Software',
    desc: 'Developed a Django-based web application to help small retail shops manage daily sales, customer payments, and generate monthly/yearly financial reports. Utilized Django’s built-in SQLite database for data storage and implemented features like user authentication, sale entry, and account tracking. The interface was styled using Tailwind CSS and deployed on Render, ensuring accessibility and ease of use for shop owners.',
    tags: ['Pythonn', 'Django', 'SQLite', 'Tailwind CSS','Render'],
    icon: (
      <Image src={image4} alt="Retail Shop Accounting Software" className="h-60 w-100 mx-auto mb-auto " />
    ),
    gradient: 'from-blue-700 via-blue-500 to-cyan-500',
    github:'https://github.com/TEEPAKRAAJ/retail-shop-accounting-software'
  }
]


export default function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="projects" className="py-20 bg-white" style={{ fontFamily: 'Georgia' }}>
      <div className="w-9/10 mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-2">My Projects</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded"></div>
        <p className="text-gray-700 text-center mb-10">
          Here are some of my recent projects that showcase my skills and expertise.
        </p>

        {/* lg: Swiper + details */}
        <div className="py-8 hidden lg:grid grid-cols-2 gap-8 justify-items-center items-center mb-10">
          {/* Swiper Carousel */}
          <Swiper
            effect="cards"
            grabCursor={true}
            loop={true}
            className="w-full max-w-xl"
            modules={[EffectCards]}
            onSlideChange={swiper => setActiveIdx(swiper.realIndex)}
            onInit={swiper => setActiveIdx(swiper.realIndex)}
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={project.title + idx} className="flex justify-center">
                <div
                  className={`w-[450px] rounded-2xl flex flex-col justify-between p-8 bg-gradient-to-br ${project.gradient}`}
                >
                  <section>
                    <div className="bg-white rounded-xl p-4 mb-4">
                      {project.icon}
                    </div>
                  </section>
                </div>
              </SwiperSlide>
            ))}
            <span className="flex justify-center mr-30"><p className="py-6 text-gray-700 text-2xl">sweep card to see next</p></span>
          </Swiper>
          {/* Active card details */}
          <div className="w-full max-w-xl">
            <h3 className="text-2xl font-bold mb-4">{projects[activeIdx].title}</h3>
            <p className="text-gray-700 mb-6">{projects[activeIdx].desc}</p>
            <div className="flex flex-wrap justify-start gap-2 mb-6">
              {projects[activeIdx].tags.map(tag => (
                <span key={tag} className="bg-blue-100 border border-blue-200 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={projects[activeIdx].github}
              className="inline-block bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-blue-900 hover:via-blue-500 hover:to-cyan-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* md/sm: Normal grid */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 lg:hidden">
          {projects.map((project, idx) => (
              <div
                key={project.title + idx}
                className={`w-full rounded-2xl flex flex-col justify-between p-8 bg-gradient-to-br ${project.gradient}`}
              > 
                <section>
                  <div className="bg-white rounded-xl p-4 mb-4">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-blue-100 border border-blue-200 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                </section>
                <span className="pt-4 flex flex-row items-center justify-center">
                    <a href={project.github} className="items-center hover:text-gray-700 text-2xl text-white">View on GitHub</a>
                  </span>
                </div>
          ))}
        </div>
      </div>
    </section>
  );
}