'use client'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#showcase', label: 'Highlights' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="bg-[#031344]/75 fixed top-0 w-full z-50 shadow"
      style={{ fontFamily: 'Georgia', height: '64px' }}
    >
      <div className="w-9/10 mx-auto flex items-center justify-between py-4 px-8 h-full">
        <span className="font-bold text-3xl text-white tracking-wide">
          My Portfolio
        </span>
        {/* Desktop Nav: only show on large screens and up */}
        <ul className="hidden lg:flex space-x-8 text-xl h-full items-center">
  {navLinks.map((link) => (
    <li
      key={link.href}
      className="transition-transform hover:scale-110"
    >
      <a
        href={link.href}
        className="text-white font-medium"
      >
        {link.label}
      </a>
    </li>
  ))}
</ul>
        {/* Hamburger: show on md and below */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
            aria-label="Open menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Dropdown for mobile and md screens */}
        {menuOpen && (
  <div className="absolute left-0 top-16 w-full bg-[#031344]/75  shadow-lg py-4 px-8  flex flex-row  justify-start space-x-8 lg:hidden z-40">
    {navLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className="text-white font-medium text-xl hover:scale-110 transition"
        onClick={() => setMenuOpen(false)}
      >
        {link.label}
      </a>
    ))}
  </div>
)}
      </div>
    </nav>
  );
}