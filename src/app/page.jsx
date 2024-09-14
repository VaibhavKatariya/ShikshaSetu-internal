'use client'

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X, Search, BookOpen, BarChart2, Users, Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { IconFidgetSpinner } from "@tabler/icons-react"
import { auth } from "@/lib/firebase/config"
import { useAuthState } from "react-firebase-hooks/auth"
import angela from "@/app/assets/angela.jpg"
import hero from "@/app/assets/hero.jpeg"
import ml from "@/app/assets/ml.jpg"
import ds from "@/app/assets/ds.jpg"

export default function LandingPage() {
  const [user, loading] = useAuthState(auth)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const handleLearnerSignIn = () => {
    router.push('/learner/signin')
  }

  const handleLearnerSignUp = () => {
    router.push('/sign-up')
  }

  const navItems = ["Courses", "Categories", "Teach", "My Learning"]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <IconFidgetSpinner className='animate-spin w-12 h-12' />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold text-[#1c1d1f] dark:text-white">
              EduTech
            </Link>
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <Button key={item} variant="ghost" className="text-[#1c1d1f] dark:text-white hover:text-[#5624d0] dark:hover:text-[#7c4dff]">
                  {item}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <form className="hidden md:flex relative">
              <Input
                type="search"
                placeholder="Search for courses"
                className="pl-10 pr-4 py-2 w-64 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-[#5624d0] dark:focus:border-[#7c4dff] focus:ring-[#5624d0] dark:focus:ring-[#7c4dff]"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </form>
            {user ? (
              <Button variant="ghost" size="sm" className="text-[#1c1d1f] dark:text-white" onClick={() => auth.signOut()}>
                Log out
              </Button>
            ) : (
              <>
                <Button variant="ghost" size="sm" className="hidden md:flex text-[#1c1d1f] dark:text-white" onClick={handleLearnerSignIn}>
                  Log in
                </Button>
                <Button size="sm" className="bg-[#5624d0] dark:bg-[#7c4dff] hover:bg-[#4c1fb1] dark:hover:bg-[#6e45e2] text-white" onClick={handleLearnerSignUp}>
                  Sign up
                </Button>
              </>
            )}
            <Button variant="ghost" size="icon" className="md:hidden text-[#1c1d1f] dark:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="py-2 px-4">
                <Input
                  type="search"
                  placeholder="Search for courses"
                  className="w-full mb-2 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                />
                {navItems.map((item) => (
                  <Button key={item} variant="ghost" className="w-full justify-start text-[#1c1d1f] dark:text-white hover:text-[#5624d0] dark:hover:text-[#7c4dff]">
                    {item}
                  </Button>
                ))}
                <div className="mt-2 space-y-2">
                  {user ? (
                    <Button variant="outline" className="w-full text-[#5624d0] dark:text-[#7c4dff] border-[#5624d0] dark:border-[#7c4dff]" onClick={() => auth.signOut()}>
                      Log out
                    </Button>
                  ) : (
                    <>
                      <Button variant="outline" className="w-full text-[#5624d0] dark:text-[#7c4dff] border-[#5624d0] dark:border-[#7c4dff]" onClick={handleLearnerSignIn}>
                        Log in
                      </Button>
                      <Button className="w-full bg-[#5624d0] dark:bg-[#7c4dff] hover:bg-[#4c1fb1] dark:hover:bg-[#6e45e2] text-white" onClick={handleLearnerSignUp}>
                        Sign up
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-[#f8f9fb] dark:bg-gray-800">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#1c1d1f] dark:text-white"
              >
                Learn Without Limits
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg mb-8 text-gray-600 dark:text-gray-300"
              >
                Start, switch, or advance your career with over 5,000 courses from world-class universities and companies.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Button size="lg" className="bg-[#5624d0] dark:bg-[#7c4dff] hover:bg-[#4c1fb1] dark:hover:bg-[#6e45e2] text-white" onClick={handleLearnerSignUp}>
                  Join for Free
                </Button>
                <Button size="lg" variant="outline" className="text-[#5624d0] dark:text-[#7c4dff] border-[#5624d0] dark:border-[#7c4dff]">
                  Try EduTech for Business
                </Button>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <Image
                src= {hero}
                alt="Students learning online"
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#1c1d1f] dark:text-white">
            Featured Courses
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Introduction to Machine Learning",
                instructor: "Dr. Jane Smith",
                rating: 4.8,
                students: 15000,
                price: "$49.99",
                image: ml.src,
              },
              {
                title: "Web Development Bootcamp",
                instructor: "John Doe",
                rating: 4.9,
                students: 20000,
                price: "$59.99",
                image: angela.src,
              },
              {
                title: "Data Science Fundamentals",
                instructor: "Dr. Alex Johnson",
                rating: 4.7,
                students: 12000,
                price: "$54.99",
                image: ds.src,
              },
            ].map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    className="w-full h-50 object-cover"
                    width={300}
                    height={200}
                  />
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-[#1c1d1f] dark:text-white">{course.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{course.instructor}</p>
                    <div className="flex items-center mb-2">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="text-[#b4690e] dark:text-yellow-400 font-bold">{course.rating}</span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">({course.students.toLocaleString()} students)</span>
                    </div>
                    <p className="font-bold text-[#1c1d1f] dark:text-white">{course.price}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="text-[#5624d0] dark:text-[#7c4dff] border-[#5624d0] dark:border-[#7c4dff]">
              Explore all courses
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#f8f9fb] dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#1c1d1f] dark:text-white">
            Why Choose EduTech?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Flexible Learning",
                description: "Learn at your own pace, on your own schedule",
                icon: <BookOpen className="h-8 w-8 text-[#5624d0] dark:text-[#7c4dff]" />,
              },
              {
                title: "Expert Instructors",
                description: "Learn from industry experts and top academics",
                icon: <Users className="h-8 w-8 text-[#5624d0] dark:text-[#7c4dff]" />,
              },
              {
                title: "Career-focused Courses",
                description: "Gain skills that are in high demand in the job market",
                icon: <BarChart2 className="h-8 w-8 text-[#5624d0] dark:text-[#7c4dff]" />,
              },
              {
                title: "Global Community",
                description: "Connect with learners and instructors worldwide",
                icon: <Globe className="h-8 w-8 text-[#5624d0] dark:text-[#7c4dff]" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-[#1c1d1f] dark:text-white">
                      {feature.icon}
                      <span>{feature.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#5624d0] dark:bg-[#7c4dff] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Start Learning Today</h2>
          <p className="text-xl mb-8">Join millions of learners and start your journey to success.</p>
          <Button
            size="lg"
            variant="secondary"
            onClick={handleLearnerSignUp}
            className="w-full sm:w-auto bg-white text-[#5624d0] dark:text-[#7c4dff] hover:bg-gray-100 dark:hover:bg-gray-200"
          >
            Sign up for Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c1d1f] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="text-2xl font-bold">
                EduTech
              </Link>
              <p className="mt-2 text-sm text-gray-400">Empowering learners worldwide with quality online education.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Learn</h3>
              <ul className="space-y-2">
                {["Courses", "Certificates", "Degrees", "Career Track"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Community</h3>
              <ul className="space-y-2">
                {["Learners", "Partners", "Developers", "Beta Testers"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Connect</h3>
              <ul className="space-y-2">
                {["Blog", "Facebook", "Twitter", "LinkedIn"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-400">&copy; 2023 EduTech. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Terms
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Privacy
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}