'use client'
import Image from "next/image"
import image from '../images/BayMax.jpg'
import image1 from '../images/LiveCount.jpeg'
import image2 from '../images/stlToLayers.jpg'
const projects = [
  {
    title: ' BayMax HealthCare Chatbot',
    desc: 'Developed the Baymax Chatbot by utilizing RAG for enhancing LLM with external knowledge and used NLP techniques for the Processing of the user text. By using LLM, RAG, NLP the chatbot works on the best accuracy and up-to-date in generated texts.',
    tags: ['RAG', 'NLP', 'LLM', 'React','Figma','HTML5', 'CSS', 'JavaScript'],
    icon: (
      <Image src={image} alt="BayMax HealthCare Chatbot" className="h-60 w-100 mx-auto mb-auto " />
    ),
    gradient: 'from-blue-700 via-blue-500 to-cyan-500'
  },
  {
    title: 'Live Count',
    desc: 'Developed a real-time prawn seed counting system using OpenCV, achieving over 99% accuracy through grayscale conversion, blurring, thresholding, and contour detection. Built a post-larva shrimp seed detection system using computer vision, enhancing hatchery precision and operational efficiency.',
    tags: ['Python', 'OpenCV', 'Matplotlib'],
    icon: (
      <Image src={image1} alt="Live Count" className="h-60 w-100 mx-auto mb-auto " />
    ),
    gradient: 'from-blue-700 via-blue-500 to-cyan-500'
  },
  {
    title: 'STL File To Image Layers Generator',
    desc: 'Developed a web-based STL slicer using Python, Django, and Trimesh to visualize 3D model cross-sections layer by-layer, enabling users to upload STL files and view 2D slices generated through automated image processing and rendering.',
    tags: ['Django', 'OpenCV', 'Trimesh','Matplotlib'],
    icon: (
      <Image src={image2} alt="STL File To Image Layers Generator" className="h-60 w-100 mx-auto mb-auto " />
    ),
    gradient: 'from-blue-700 via-blue-500 to-cyan-500',
  },
]


export default function Projects() {
  return (
    <section id="projects" className="bg-white" style={{ fontFamily: 'Georgia' }}>
      <div className="mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold mb-2 text-center">My Projects</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-gray-700 text-center mb-10">
          Here are some of my recent projects that showcase my skills and expertise.
        </p>
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 w-9/10 mx-auto">
          {projects.map((project) => (
        <div
          key={project.title}
          className={`rounded-2xl p-8 bg-gradient-to-br ${project.gradient} shadow-lg hover:scale-110 transition-transform duration-300`}
        >
          <div className="bg-white rounded-xl p-4 mb-4">
            {project.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-700 mb-4">{project.desc}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
          <span key={tag} className="bg-white border border-blue-200 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
            {tag}
          </span>
            ))}
          </div>
        </div>
          ))}
        </div>
      </div>
    </section>
  )
}
