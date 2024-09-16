'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { BookOpen, BarChart2, Users, Globe, Briefcase, TrendingUp, Award, CheckCircle } from "lucide-react"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import useAuthHook from '../../hooks/authHooks'

export default function StudentLandingPage() {
  const { handleLearnerSignUp } = useAuthHook();

  const courses = [
    {
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Priya Sharma",
      rating: 4.8,
      students: 15000,
      price: "₹4,999",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Full Stack Web Development",
      instructor: "Rahul Verma",
      rating: 4.9,
      students: 20000,
      price: "₹5,999",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Data Science Masterclass",
      instructor: "Dr. Amit Patel",
      rating: 4.7,
      students: 12000,
      price: "₹5,499",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  const features = [
    {
      title: "Industry-Relevant Skills",
      description: "Learn the most in-demand skills for today's job market",
      icon: <TrendingUp className="h-8 w-8 text-[#5624d0] dark:text-[#7c4dff]" />,
    },
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals and top academics",
      icon: <Users className="h-8 w-8 text-[#5624d0] dark:text-[#7c4dff]" />,
    },
    {
      title: "Practical Experience",
      description: "Gain hands-on experience through projects and internships",
      icon: <Briefcase className="h-8 w-8 text-[#5624d0] dark:text-[#7c4dff]" />,
    },
    {
      title: "Career Support",
      description: "Get placement assistance and career guidance",
      icon: <Award className="h-8 w-8 text-[#5624d0] dark:text-[#7c4dff]" />,
    },
  ];

  const partnerCompanies = [
    "TCS", "Infosys", "Wipro", "HCL Technologies", "Tech Mahindra", "IBM India", "Accenture India"
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fa] dark:bg-gray-900">
      {/* Header */}
      {/* <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image src="/placeholder.svg?height=40&width=150" alt="Shiksha Setu Logo" width={150} height={40} />
          <Button variant="outline" className="text-[#5624d0] border-[#5624d0]" onClick={handleLearnerSignUp}>
            Sign Up
          </Button>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="py-20 px-4 bg-[#f8f9fb] dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#1c1d1f] dark:text-white"
              >
                Empower Your Future with Shiksha Setu
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg mb-8 text-gray-600 dark:text-gray-300"
              >
                Bridge the gap between education and employment. Join Shiksha Setu to gain the skills that matter in today's job market.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Button size="lg" className="bg-[#5624d0] dark:bg-[#7c4dff] hover:bg-[#4c1fb1] dark:hover:bg-[#6e45e2] text-white" onClick={handleLearnerSignUp}>
                  Start Learning for Free
                </Button>
                <Button size="lg" variant="outline" className="text-[#5624d0] dark:text-[#7c4dff] border-[#5624d0] dark:border-[#7c4dff]">
                  Explore Courses
                </Button>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Students learning online"
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Unemployment Alert Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <Alert className="bg-red-100 dark:bg-red-900">
            <AlertTitle className="text-red-800 dark:text-red-200 text-lg font-semibold">The Engineering Employment Crisis in India</AlertTitle>
            <AlertDescription className="text-red-700 dark:text-red-300">
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Only 3.84% of engineers have the skills required for software-related jobs in start-ups.</li>
                <li>Merely 3% of engineers possess new-age technological skills in AI, ML, data science, and mobile development.</li>
                <li>A staggering 98.3% of engineers lack the skills needed for new age jobs.</li>
                <li>Only 40% of engineering graduates complete an internship, with a mere 7% doing multiple internships.</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 bg-[#f8f9fb] dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#1c1d1f] dark:text-white">
            Shiksha Setu: Your Bridge to Employment
          </h2>
          <p className="text-lg mb-8 text-center text-gray-600 dark:text-gray-300">
            We're here to change these statistics. With Shiksha Setu, you'll gain the skills and experience needed to thrive in today's job market.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
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

      {/* Featured Courses Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#1c1d1f] dark:text-white">
            Featured Courses
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
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
                    className="w-full h-48 object-cover"
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

      {/* Government Initiative Section */}
      <section className="py-12 bg-[#f8f9fb] dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#1c1d1f] dark:text-white">
            Government of Delhi Initiative
          </h2>
          <p className="text-lg mb-8 text-center text-gray-600 dark:text-gray-300">
            Shiksha Setu is proud to be a part of the Government of Delhi's initiative to bridge the gap between education and employment.
          </p>
          <div className="flex justify-center">
            <Card className="max-w-2xl">
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                    <span>Endorsed by the Delhi Skill and Entrepreneurship University</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                    <span>Aligned with the Delhi government's vision for skill development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                    <span>Supported by industry partnerships for real-world experience</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Companies Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#1c1d1f] dark:text-white">
            Our Industry Partners
          </h2>
          <p className="text-lg mb-8 text-center text-gray-600 dark:text-gray-300">
            We've partnered with leading companies to provide you with internship opportunities and a direct path to employment.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partnerCompanies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 shadow-md"
              >
                <span className="text-lg font-semibold text-[#1c1d1f] dark:text-white">{company}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#5624d0] dark:bg-[#7c4dff] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Start Your Journey to Success Today</h2>
          <p className="text-xl mb-8">Join Shiksha Setu and gain the skills you need to thrive in today's job market.</p>
          <Button
            size="lg"
            variant="secondary"
            onClick={handleLearnerSignUp}
            className="w-full sm: w-auto bg-white text-[#5624d0] dark:text-[#7c4dff] hover:bg-gray-100 dark:hover:bg-gray-200"
          >
            Sign up for Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-[#1c1d1f] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About Shiksha Setu</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#5624d0]">About Us</a></li>
                <li><a href="#" className="hover:text-[#5624d0]">Careers</a></li>
                <li><a href="#" className="hover:text-[#5624d0]">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#5624d0]">Help Center</a></li>
                <li><a href="#" className="hover:text-[#5624d0]">Blog</a></li>
                <li><a href="#" className="hover:text-[#5624d0]">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#5624d0]">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#5624d0]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#5624d0]">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect with Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#5624d0]">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-[#5624d0]">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-[#5624d0]">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Shiksha Setu. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  )
}