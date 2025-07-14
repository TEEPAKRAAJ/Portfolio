'use client'
import Image from "next/image"


const certificates = [
    {
        title: "Machine Learning and Frameworks Intern",
        desc: "Completed an internship at Mydsun IT and Marketing Pvt Ltd from Dec 1, 2024 to Dec 31, 2024, focusing on machine learning and frameworks.",
        image: "/certificate/mydsun_intern.jpg"
    },
    {
        title: "Machine Learning Intern",
        desc: "Completed an internship at Prodigy InfoTech from Jun 2024 to Jul 2024, focusing on machine learning.",
        image: "/certificate/prodigy.jpg"
    },
    {
        title: "Deep Learning",
        desc: "Completed a Deep Learning course from NPTEL, focusing on neural networks and deep learning techniques.",
        image: "/certificate/deeplearning.jpg"
    },
    {
        title: "Blockchain and its Applications",
        desc: "Completed a Blockchain and its Applications course from NPTEL, focusing on blockchain technology and its applications.",
        image: "/certificate/blockchain.jpg"
    },
    {
        title: "Intel GenAI Hackathon 2024",
        desc: "Participated in the Intel GenAI Hackathon 2024, developing a healthcare chatbot using RAG and NLP techniques.",
        image: "/certificate/intel_genai.jpg"
    },
    {
        title: "Sparkathon 2024",
        desc: "Participated in Sparkathon 2024, a hackathon focused on innovative solutions using AI and VR.",
        image: "/certificate/sparkathon.jpg"
    },
    {
        title: "GDG’S HACKATONIC",
        desc: "Participated in GDG’s HACKATONIC conducted by PSG College of Technology, demonstrating an idea on computer vision used for agriculture.",
        image: "/certificate/psg_hackathon.jpg"
    },
    {
        title: "HackOn With Amazon - Season 4",
        desc: "Participated in HackOn With Amazon - Season 4, testing skills in problem-solving and coding.",
        image: "/certificate/amazon_p.jpg"
    },
    {
        title: "Level 1: E-Commerce",
        desc: "Participated in the Level 1: E-Commerce course by Flipkart, gaining insights into e-commerce platforms and technologies.",
        image: "/certificate/flipkart_p.jpg"
    },
    {
        title: "AI Application Using MATLAB and Simulink",
        desc: "Attended a workshop on AI Application Using MATLAB and Simulink, completed three courses, and created a project: Fitness Tracker using a phone as a data collection tool.",
        image: "/certificate/sastra_matlab.jpg"
    },
    {
        title: "MATLAB Onramp",
        desc: "Completed the MATLAB Onramp course, an introductory course to MATLAB programming and its applications in data analysis and visualization.",
        image: "/certificate/matlab_onramp.jpg"
    },
    {
        title: "Machine Learning with MATLAB Onramp",
        desc: "Completed the Machine Learning with MATLAB Onramp course, an introductory course to machine learning concepts and applications using MATLAB.",
        image: "/certificate/matlab_ml.jpg"
    },
    {
        title: "Deep Learning with MATLAB Onramp",
        desc: "Completed the Deep Learning with MATLAB Onramp course, an introductory course to deep learning concepts and applications using MATLAB.",
        image: "/certificate/matlab_dl.jpg"
    },
    {
        title: "Introduction to Data Science",
        desc: "Completed an Introduction to Data Science course from infosys Springboard, focusing on data analysis and machine learning fundamentals.",
        image: "/certificate/infosys_data_science.jpg"
    },
    {
        title: "Machine Learning with Python",
        desc: "Completed the Machine Learning with Python course from Coursera offered by IBM, focusing on machine learning algorithms.",
        image: "/certificate/coursera_ml.jpg"
    },
    {
        title: "Introduction to Deep Learning & Neural Networks with Keras",
        desc: "Completed the Introduction to Deep Learning & Neural Networks with Keras course from Coursera offered by IBM, focusing on deep learning techniques and neural networks.",
        image: "/certificate/coursera_keras.jpg"
    },
    {
        title: "Introduction to Neural Networks and PyTorch",
        desc: "Completed the Introduction to Neural Networks and PyTorch course from Coursera offered by IBM, focusing on neural networks and their implementation using PyTorch.",
        image: "/certificate/coursera_pytorch.jpg"
    },
    {
        title: "Introduction to Computer Vision and Image Processing",
        desc: "Completed the Introduction to Computer Vision and Image Processing course from Coursera offered by IBM, focusing on computer vision techniques and image processing.",
        image: "/certificate/coursera_cv.jpg"
    },
    {
        title: "Gen AI Foundational Models for NLP & Language Understanding",
        desc: "Completed the Gen AI Foundational Models for NLP & Language Understanding course from Coursera offered by IBM, focusing on foundational models for natural language processing.",
        image: "/certificate/coursera_nlp_basic.jpg"
    },
    {
        title: "Generative AI and LLMs: Architecture and Data Preparation",
        desc: "Completed the Generative AI and LLMs: Architecture and Data Preparation course from Coursera offered by IBM, focusing on the architecture of generative AI models and data preparation techniques.",
        image: "/certificate/coursera_llm_data_pre.jpg"
    },
    {
        title: "Deep Learning with PyTorch : Image Segmentation",
        desc: "Completed the Deep Learning with PyTorch Image Segmentation course from Coursera project network, focusing on image segmentation techniques using PyTorch.",
        image: "/certificate/coursera_project_image_seg.jpg"
    },
    {
        title: "Learn TypeScript",
        desc: "Completed the Learn TypeScript course from Coursera offered by Scrimba, focusing on TypeScript programming language fundamentals.",
        image: "/certificate/coursera_typescript.jpg"
    },
    {
        title: "TypeScript Variables and Data Types",
        desc: "Completed the TypeScript Variables and Data Types course from Coursera project network, focusing on TypeScript variables and data types.",
        image: "/certificate/typeScript_project.jpg"
    },
    {
        title: "Tailwind CSS Specialization",
        desc: "Completed the Tailwind CSS Specialization course from Coursera offered by Scrimba, which consists of three courses focusing on Tailwind CSS framework for styling web applications.",
        image: "/certificate/coursera_tailwind_css_spl.jpg"
    },
    {
        title: "Learn Tailwind CSS",
        desc: "Completed the Learn Tailwind CSS course from Coursera offered by Scrimba, focusing on Tailwind CSS framework for styling web applications.",
        image: "/certificate/coursera_tailwind_css.jpg"
    },
    {
        title: "Tailwind CSS Practice Projects",
        desc: "Completed a Tailwind CSS project, showcasing skills in building responsive and modern web interfaces using Tailwind CSS framework.",
        image: "/certificate/tailwind_css_project.jpg"
    },
    {
        title: "Build a Product Card with Tailwind CSS",
        desc: "Completed a Tailwind CSS project focused on creating a product card layout, demonstrating proficiency in using Tailwind CSS for responsive design.",
        image: "/certificate/tailwind_product_card.jpg"
    },
    {
        title: "Learn CSS Flexbox",
        desc: "Completed the Learn CSS Flexbox course from Coursera offered by Scrimba, focusing on CSS Flexbox layout techniques.",
        image: "/certificate/coursera_flex_box.jpg"
    },




];

export default function Achievements() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-3xl">
      {certificates.map((cert, idx) => (
        <div
          key={idx}
          className="relative rounded-2xl p-6 bg-white flex flex-col h-full transition-transform duration-300 hover:scale-105 shadow-lg"
          style={{ fontFamily: 'Georgia' }}
        >
          <div className="overflow-hidden rounded-lg mb-4">
  <a href={cert.image} target="_blank" rel="noopener noreferrer">
    <Image
      src={cert.image}
      alt={cert.title}
      width={400}
      height={250}
      className="object-cover rounded-lg w-full h-48 cursor-pointer"
    />
  </a>
</div>
          <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
          <p className="text-gray-700">{cert.desc}</p>
        </div>
      ))}
    </div>
  );
}