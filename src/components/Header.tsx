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
    <header className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 text-white transition-all duration-300 ${isScrolled
      ? 'bg-blue-950/95 backdrop-blur-sm shadow-lg'
      : 'bg-transparent'
      }`}>
      <nav className="flex justify-end max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className="text-sm font-medium tracking-wide hover:text-blue-300 transition-all duration-200 hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/profile"
            className="text-sm font-medium tracking-wide hover:text-blue-300 transition-all duration-200 hover:scale-105"
          >
            My Profile
          </Link>
          <Link
            to="/portofolio"
            className="text-sm font-medium tracking-wide hover:text-blue-300 transition-all duration-200 hover:scale-105"
          >
            Portfolio
          </Link>
          <Link
            to="/documentation"
            className="text-sm font-medium tracking-wide hover:text-blue-300 transition-all duration-200 hover:scale-105"
          >
            Documentation
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium tracking-wide hover:text-blue-300 transition-all duration-200 hover:scale-105"
          >
            CV
          </Link>
        </div>
      </nav>
    </header>
  )
}