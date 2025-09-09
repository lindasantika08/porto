import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-2 flex gap-2 bg-blue text-white justify-between shadow-sm">
      <nav className="flex flex-row ml-auto">
        <div className="px-2 font-bold">
          <Link to="/">Home</Link>
        </div>
        <div className="px-2 font-bold">
          <Link to="/about">About</Link>
        </div>
        <div className="px-2 font-bold">
          <Link to="/project">Project</Link>
        </div>
        <div className="px-2 font-bold">
          <Link to="/experience">Experience</Link>
        </div>
        <div className="px-2 font-bold">
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
