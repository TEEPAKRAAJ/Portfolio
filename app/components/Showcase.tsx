'use client';
import Skills from './Skills'
import Projects from './Projects'
import Achievements from './achievements'
import { useState } from 'react';

const menus = [
  { label: 'Projects', key: 'projects' },
  { label: 'Skills', key: 'skills' },
  { label: 'Achievements', key: 'achievements' },
];

export default function Showcase() {
  const [selected, setSelected] = useState('projects');

  return (
    <section id="showcase" style={{ fontFamily: 'Georgia' }} className="w-full px-8 py-20">
      {/* Heading and Note */}
      <div className="text-center mb-8">
      <h2 className="text-4xl font-bold mb-2 text-center">Highlights</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-6 rounded"></div>
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto text-center">
        Creativity is intelligence having fun.
        </p>
      </div>
      {/* Menu */}
      <div className="flex justify-center gap-6 mb-8">
        {menus.map((menu) => (
          <button
            key={menu.key}
            onClick={() => setSelected(menu.key)}
            className={`px-6 py-2 rounded-full font-semibold transition
              ${selected === menu.key
                ? 'bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 text-white shadow-lg scale-105'
                : 'bg-slate-200 text-cyan-700 hover:bg-cyan-100'}`}
          >
            {menu.label}
          </button>
        ))}
      </div>
      {/* Content */}
      <div className="flex justify-center items-center min-h-[200px] bg-white/80 rounded-xl shadow p-8">
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
    </section>
  );
}