import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 p-2 flex gap-2 text-white justify-between shadow-sm transition-all duration-300 ${isScrolled
        ? 'bg-blue-950/95 backdrop-blur-sm'
        : 'bg-transparent'
      }`}>
      <nav className="flex flex-row ml-auto">
        <div className="px-2 font-bold">
          <Link
            to="/"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Home
          </Link>
        </div>
        <div className="px-2 font-bold">
          <Link
            to="/about"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            About
          </Link>
        </div>
        <div className="px-2 font-bold">
          <Link
            to="/project"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Project
          </Link>
        </div>
        <div className="px-2 font-bold">
          <Link
            to="/experience"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Experience
          </Link>
        </div>
        <div className="px-2 font-bold">
          <Link
            to="/contact"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Documentation
          </Link>
        </div>
      </nav>
    </header>
  )
}