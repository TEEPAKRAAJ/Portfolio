'use client'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

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
  className="backdrop-blur-md fixed top-0 w-full z-50 shadow-lg border-b transition-all duration-500 bg-gray-900/90 border-gray-700"
  style={{ fontFamily: 'Georgia', height: '64px' }}
>
  <div className="w-9/10 mx-auto flex items-center justify-start py-4 px-8 h-full">
    {/* Logo */}
    <span className="font-bold text-3xl tracking-wide transition-colors duration-300 text-white">
      My Portfolio
    </span>
    
    {/* Desktop Nav: aligned right */}
    <ul className="hidden lg:flex space-x-6 text-xl h-full items-center ml-auto">
      {navLinks.map((link) => (
        <li
          key={link.href}
          className="transition-all duration-300 hover:scale-110"
        >
          <a
            href={link.href}
            className="font-medium transition-colors duration-300 text-gray-200 hover:text-blue-400"
          >
            {link.label}
          </a>
        </li>
      ))}
      <li>
        <ThemeToggle />
      </li>
    </ul>

    {/* Mobile: Toggle + Hamburger */}
    <div className="lg:hidden flex items-center space-x-3 ml-auto">
      <ThemeToggle />
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-2xl focus:outline-none transition-colors duration-300 text-gray-200 hover:text-blue-400"
        aria-label="Open menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  </div>
</nav>

  );
}