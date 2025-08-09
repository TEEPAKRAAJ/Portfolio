'use client';
import Skills from './Skills'
import Projects from './Projects'
import Achievements from './achievements'
import { useState } from 'react';
import AnimatedSection from './AnimatedSection'
import { useTheme } from '../contexts/ThemeContext'
import { FaRocket, FaBolt, FaTrophy } from 'react-icons/fa'

const menus = [
  { label: 'Projects', key: 'projects', icon: <FaRocket className="w-5 h-5" /> },
  { label: 'Skills', key: 'skills', icon: <FaBolt className="w-5 h-5" /> },
  { label: 'Achievements', key: 'achievements', icon: <FaTrophy className="w-5 h-5" /> },
];

export default function Showcase() {
  const [selected, setSelected] = useState('projects');
  const { theme } = useTheme();

  return (
    <section id="showcase" style={{ fontFamily: 'Georgia' }} className={`w-full px-8 py-16 transition-colors duration-500 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-white via-blue-50 to-cyan-50'
    }`}>
      {/* Enhanced Heading and Note */}
      <AnimatedSection direction="up" delay={200} className="text-center mb-12">
        <h2 className={`text-5xl font-bold mb-4 text-center transition-colors duration-300 ${
          theme === 'dark' ? 'text-white' : 'text-gray-800'
        }`}>
          Highlights
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
        <p className={`mb-10 max-w-2xl mx-auto text-center text-lg italic transition-colors duration-300 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          "Creativity is intelligence having fun."
        </p>
      </AnimatedSection>

      {/* Enhanced Menu */}
      <AnimatedSection direction="up" delay={400} className="flex justify-center gap-4 mb-12">
        {menus.map((menu) => (
          <button
            key={menu.key}
            onClick={() => setSelected(menu.key)}
            className={`group px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              selected === menu.key
                ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white shadow-xl shadow-blue-500/25 scale-105'
                : theme === 'dark'
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-blue-400 border border-gray-600 hover:border-blue-500'
                  : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-blue-600 border border-gray-200 hover:border-blue-400 shadow-md hover:shadow-lg'
            }`}
          >
            <span className="flex items-center gap-3">
              <span className={`transition-all duration-300 ${
                selected === menu.key ? 'text-white' : theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {menu.icon}
              </span>
              {menu.label}
            </span>
          </button>
        ))}
      </AnimatedSection>

      {/* Enhanced Content Container */}
      <AnimatedSection direction="up" delay={600} className="flex justify-center items-center min-h-[400px]">
        <div className="w-19/20 px-8">
          {selected === 'projects' && (
            <div>
              <Projects/>
            </div>
          )}
          {selected === 'skills' && (
            <div>
              <Skills/>
            </div>
          )}
          {selected === 'achievements' && (
            <div>
              <Achievements/>
            </div>
          )}
        </div>
      </AnimatedSection>
    </section>
  );
}