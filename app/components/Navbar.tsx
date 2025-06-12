'use client'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'My Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500 fixed top-0 w-full z-50 shadow" style={{ fontFamily: 'Georgia' }}>
      <div className="w-9/10 mx-auto flex items-center justify-between py-4 px-8">
        <span className="font-bold text-3xl text-white tracking-wide">My Portfolio</span>
        <ul className="flex space-x-8 text-xl">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white font-medium hover:text-blue-400 transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
