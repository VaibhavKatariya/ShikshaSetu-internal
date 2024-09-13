"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronRight, Facebook, Linkedin, Twitter, Sun, Moon } from 'lucide-react'

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-stone-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
        {/* Header */}
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
              <Link href="#" className="text-gray-700 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-electric-blue transition-colors">Login</Link>
              <Link href="#" className="bg-indigo-600 dark:bg-electric-blue text-stone-100 px-4 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-electric-blue-600 transition-colors">
                Get Started
              </Link>
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
              <Link href="#" className="block py-2 text-gray-700 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-electric-blue transition-colors">Login</Link>
              <Link href="#" className="block py-2 mt-4 bg-indigo-600 dark:bg-electric-blue text-stone-100 px-4 rounded-md hover:bg-indigo-700 dark:hover:bg-electric-blue-600 transition-colors">
                Get Started
              </Link>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-stone-100 to-stone-200 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                Transform Your <span className="text-indigo-700 dark:text-electric-blue">Learning Experience</span>
              </h1>
              <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
                Join our community of passionate educators and eager learners.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="#" className="bg-emerald-600 dark:bg-electric-green text-stone-100 px-6 py-3 rounded-md hover:bg-emerald-700 dark:hover:bg-electric-green-600 transition-colors flex items-center justify-center">
                  Start Learning Now <ChevronRight className="ml-2" />
                </Link>
                <Link href="#" className="border-2 border-rose-500 dark:border-electric-pink text-rose-500 dark:text-electric-pink px-6 py-3 rounded-md hover:bg-rose-500 dark:hover:bg-electric-pink hover:text-stone-100 transition-colors text-center">
                  Become an Instructor
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-stone-200 dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Platform Features</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-stone-100 dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-indigo-200 dark:hover:shadow-electric-blue transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-700 dark:text-electric-blue">Interactive Learning Paths</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Create custom learning paths with diverse resources including videos, PDFs, and academic links.
                </p>
              </div>
              <div className="bg-stone-100 dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-emerald-200 dark:hover:shadow-electric-green transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-emerald-600 dark:text-electric-green">Real-Time Progress Tracking</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Monitor learner progress, reading statistics, and time spent on each topic with our intuitive dashboard.
                </p>
              </div>
              <div className="bg-stone-100 dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-rose-200 dark:hover:shadow-electric-pink transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-rose-500 dark:text-electric-pink">Engagement Tools</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Enhance the learning experience with interactive quizzes, discussions, and real-time feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-stone-100 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">What Our Users Say</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-stone-200 dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300">
                <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                  "This platform has revolutionized the way I teach. The interactive tools and real-time feedback have greatly improved student engagement."
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-900 dark:text-white">Professor Jane Doe</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Computer Science Educator</p>
                </div>
              </div>
              <div className="bg-stone-200 dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300">
                <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                  "As a student, I love how easy it is to track my progress and engage with course materials. The customized learning paths have really helped me stay motivated."
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-900 dark:text-white">John Smith</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Engineering Student</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-stone-200 dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Ready to Transform Your Learning Journey?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              Whether you're here to learn or to share your knowledge, we have the tools to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#" className="bg-indigo-600 dark:bg-electric-blue text-stone-100 px-8 py-4 rounded-md hover:bg-indigo-700 dark:hover:bg-electric-blue-600 transition-colors text-lg font-semibold">
                Join as a Learner
              </Link>
              <Link href="#" className="bg-rose-500 dark:bg-electric-pink text-stone-100 px-8 py-4 rounded-md hover:bg-rose-600 dark:hover:bg-electric-pink-600 transition-colors text-lg font-semibold">
                Register as an Instructor
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-stone-300 dark:bg-gray-900 py-12 transition-colors duration-300">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">EduTech</h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4">Transforming education through technology.</p>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-electric-blue transition-colors">
                    <Facebook />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-electric-blue transition-colors">
                    <Linkedin />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-electric-blue transition-colors">
                    <Twitter />
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h4>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 rounded-md bg-stone-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 rounded-md bg-stone-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
                  />
                  <textarea
                    placeholder="Message"
                    rows={3}
                    className="w-full p-2 rounded-md bg-stone-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-emerald-600 dark:bg-electric-green text-stone-100 px-6 py-2 rounded-md hover:bg-emerald-700 dark:hover:bg-electric-green-600 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">&copy; 2023 EduTech. All rights reserved.</p>
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="space-x-4">
                  <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-electric-blue transition-colors">Privacy Policy</Link>
                  <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-electric-blue transition-colors">Terms of Service</Link>
                </div>
                <button
                  onClick={toggleTheme}
                  className="inline-flex items-center bg-stone-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full transition-colors duration-300"
                >
                  {darkMode ? <Sun className="mr-2" /> : <Moon className="mr-2" />}
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}