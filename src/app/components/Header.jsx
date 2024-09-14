"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AnimatePresence } from 'framer-motion'
import { Menu, Search } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from "react"
import useAuthHook from '../../hooks/authHooks'


function Header({ user, auth }) {
    const { handleLearnerSignIn, handleLearnerSignUp } = useAuthHook();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navItems = ["Courses", "Categories", "Teach", "My Learning"]

    return (
        <>
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
        </>
    )
}

export default Header