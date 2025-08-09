'use client'
import { useTheme } from '../contexts/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="relative group">
      <button
        onClick={toggleTheme}
        className={`relative w-16 h-8 rounded-full p-1 transition-all duration-500 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 focus:ring-blue-400'
            : 'bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 focus:ring-yellow-300'
        } shadow-lg hover:shadow-xl`}
        aria-label="Toggle theme"
      >
        <div
          className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-500 ease-in-out flex items-center justify-center ${
            theme === 'dark' ? 'translate-x-8' : 'translate-x-0'
          }`}
        >
          {theme === 'light' ? (
            <FaSun className="w-3 h-3 text-yellow-500 animate-pulse" />
          ) : (
            <FaMoon className="w-3 h-3 text-blue-600 animate-pulse" />
          )}
        </div>
      </button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-xs font-medium text-white bg-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  )
}
