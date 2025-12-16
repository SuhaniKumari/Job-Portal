import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../store/auth'

export default function Navbar() {
  const isLoggedIn = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-teal-500 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center text-white">
           <img
    src="https://cdn-icons-png.flaticon.com/128/2942/2942842.png"
    className="h-8 w-8 mr-2 object-contain"
  />
            <span className="font-semibold text-xl">RojGaar</span>
          </div>

          {/* Toggle Button (Mobile) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 text-teal-200">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <Link to="/services" className="hover:text-white">Services</Link>

            <Link
              to="/login"
              className="border px-4 py-2 rounded text-white hover:bg-white hover:text-teal-500"
            >
              SignUp / SignIn
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-3 text-teal-200">
          <Link to="/" className="block hover:text-white">Home</Link>
          <Link to="/about" className="block hover:text-white">About</Link>
          <Link to="/contact" className="block hover:text-white">Contact</Link>
          <Link to="/services" className="block hover:text-white">Services</Link>

          <Link
            to="/login"
            className="block border px-4 py-2 rounded text-white hover:bg-white hover:text-teal-500"
          >
            SignUp / SignIn
          </Link>
        </div>
      )}
    </nav>
  )
}
