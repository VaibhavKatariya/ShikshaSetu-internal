'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, BarChart2, Users, Globe, Award, DollarSign } from 'lucide-react'
import logo from '@/app/assets/logo.png'
// import teacherHero from '@/app/assets/teacher-hero.jpg'
import useAuthHook from '../../hooks/authHooks'
import { useRouter } from 'next/navigation'
import teachHero from '@/app/assets/teachHero.jpg'


export default function TeacherLandingPage() {
  const { handleTeacherSignUp } = useAuthHook()

  const features = [
    { title: 'Global Reach', description: 'Connect with millions of learners from around the world', icon: <Globe className="h-8 w-8 text-[#a435f0]" /> },
    { title: 'Earn Revenue', description: 'Generate income through course sales and premium content', icon: <DollarSign className="h-8 w-8 text-[#a435f0]" /> },
    { title: 'Flexible Teaching', description: 'Create and manage courses on your own schedule', icon: <BookOpen className="h-8 w-8 text-[#a435f0]" /> },
    { title: 'Advanced Analytics', description: 'Track your performance and optimize your courses', icon: <BarChart2 className="h-8 w-8 text-[#a435f0]" /> },
    { title: 'Supportive Community', description: 'Collaborate with fellow educators and share best practices', icon: <Users className="h-8 w-8 text-[#a435f0]" /> },
    { title: 'Professional Growth', description: 'Enhance your skills and establish yourself as an expert', icon: <Award className="h-8 w-8 text-[#a435f0]" /> },
  ]

  const steps = [
    { step: '1', title: 'Plan Your Course', description: 'Choose your topic and create an engaging curriculum' },
    { step: '2', title: 'Record Your Content', description: 'Film high-quality video lectures and create assignments' },
    { step: '3', title: 'Launch and Earn', description: 'Publish your course and start earning as students enroll' },
    { step: '4', title: 'Engage with Students', description: 'Interact with learners, answer questions, and provide feedback' },
    { step: "5", title: "Teachers Analytics", description: "Track your performance and optimize your courses" },
    { step: "6", title: "Grow Your Brand", description: "Promote your courses and build a loyal student base" },
  ]

  const testimonials = [
    { name: 'Dr. Priya Sharma', role: 'Data Science Instructor', testimonial: 'Shiksha Setu has given me the platform to share my knowledge with a global audience. The support and tools provided have been invaluable in creating engaging courses.' },
    { name: 'Rahul Verma', role: 'Web Development Expert', testimonial: 'Teaching on Shiksha Setu has not only allowed me to earn a substantial income but also to connect with passionate learners from all over India and beyond.' },
  ]

    const Router = useRouter()

    const handleClick = () => {
        Router.push('/teacher/dashboard')
    }

  return (
    <div className="min-h-screen bg-[#f7f9fa] dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image src={logo} alt="Shiksha Setu Logo" width={150} height={40} />
          <Button variant="outline" className="text-[#a435f0] border-[#a435f0]" onClick={handleClick}>
            Sign Up
          </Button>
        </div>
      </header>

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
                Empower Minds, Shape Futures
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg mb-8 text-gray-600 dark:text-gray-300"
              >
                Join Shiksha Setu and inspire learners worldwide. Share your expertise, build your brand, and earn while making a difference.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Button size="lg" className="bg-[#a435f0] hover:bg-[#8710d8] text-white" onClick={handleTeacherSignUp}>
                  Become an Instructor
                </Button>
                <Button size="lg" variant="outline" className="text-[#a435f0] border-[#a435f0]">
                  Learn More
                </Button>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <Image
                src={teachHero}
                alt="Teacher engaging with students online"
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#1c1d1f] dark:text-white">
            Why Teach on Shiksha Setu?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* How It Works Section */}
      <section className="py-20 bg-[#f8f9fb] dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#1c1d1f] dark:text-white">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-[#a435f0] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#1c1d1f] dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#1c1d1f] dark:text-white">
            What Our Instructors Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#a435f0] rounded-full mr-4 flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1c1d1f] dark:text-white">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 italic">&quot;{testimonial.testimonial}&quot;</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#a435f0] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Start Your Teaching Journey Today</h2>
          <p className="text-xl mb-8">Join our community of educators and make a lasting impact on learners worldwide.</p>
          <Button
            size="lg"
            variant="secondary"
            onClick={handleTeacherSignUp}
            className="w-full sm:w-auto bg-white text-[#a435f0] hover:bg-gray-100"
          >
            Become an Instructor
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c1d1f] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Teach on Shiksha Setu</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#a435f0]">Become an Instructor</a></li>
                <li><a href="#" className="hover:text-[#a435f0]">Teacher Handbook</a></li>
                <li><a href="#" className="hover:text-[#a435f0]">Partner with Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#a435f0]">Help Center</a></li>
                <li><a href="#" className="hover:text-[#a435f0]">Teaching Center</a></li>
                <li><a href="#" className="hover:text-[#a435f0]">Instructor Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#a435f0]">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#a435f0]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#a435f0]">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect with Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#a435f0]">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-[#a435f0]">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-[#a435f0]">
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
      </footer>
    </div>
  )
}