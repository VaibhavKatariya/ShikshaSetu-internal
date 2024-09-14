import React from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

function Header({handleLearnerSignUp, handleLearnerSignIn, mobileMenuOpen, setMobileMenuOpen}) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone-200 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm transition-colors duration-300 shadow-md">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-700 dark:text-electric-blue">
              EduTech
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="#" className="text-gray-700 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-electric-blue transition-colors">Home</Link>
              <Link href="#" className="text-gray-700 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-electric-blue transition-colors">Features</Link>
              <Link href="#" className="text-gray-700 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-electric-blue transition-colors">About Us</Link>
              <Link href="#" className="text-gray-700 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-electric-blue transition-colors">Contact</Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button onClick={handleLearnerSignIn} className="text-gray-700 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-electric-blue transition-colors">Login</button>
              <button onClick={handleLearnerSignUp} className="bg-indigo-600 dark:bg-electric-blue text-stone-100 px-4 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-electric-blue-600 transition-colors">
                Get Started
              </button>
            </div>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="text-gray-800 dark:text-white" /> : <Menu className="text-gray-800 dark:text-white" />}
            </button>
          </nav>
          {mobileMenuOpen && (
            <div className="md:hidden bg-stone-200 dark:bg-gray-800 p-4 transition-colors duration-300">
              <Link href="#" className="block py-2 text-gray-700 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-electric-blue transition-colors">Home</Link>
              <Link href="#" className="block py-2 text-gray-700 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-electric-blue transition-colors">Features</Link>
              <Link href="#" className="block py-2 text-gray-700 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-electric-blue transition-colors">About Us</Link>
              <Link href="#" className="block py-2 text-gray-700 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-electric-blue transition-colors">Contact</Link>
              <button onClick={handleLearnerSignIn} className="block py-2 text-gray-700 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-electric-blue transition-colors">Login</button>
              <button onClick={handleLearnerSignUp} className="block py-2 mt-4 bg-indigo-600 dark:bg-electric-blue text-stone-100 px-4 rounded-md hover:bg-indigo-700 dark:hover:bg-electric-blue-600 transition-colors">
                Get Started
              </button>
            </div>
          )}
        </header>
  )
}

export default Header