'use client'

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#181c2f] text-gray-300 py-8 mt-16 " style={{ fontFamily: 'Georgia' }}>
      <div className="w-9/10 mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="text-3xl font-bold text-blue-500 mb-2">G Teepakraaj</div>
          <div className="mb-4">Creating a Dynamic and Interactive Portfolio </div>
          <div className="flex gap-4 mb-4 md:mb-0">
            <a href="https://www.linkedin.com/in/teepakraaj/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/TEEPAKRAAJ" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaGithub size={20} />
            </a>
            <a href="https://www.instagram.com/teepakraaj_06/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaInstagram size={20} />
            </a>
          </div>
          <div className="text-sm text-gray-400 py-4">
            © G Teepakraaj | All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
