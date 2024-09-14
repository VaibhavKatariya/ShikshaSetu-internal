import { Menu, X, ChevronRight, Facebook, Linkedin, Twitter, Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

function Footer() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      }, [darkMode]);

      const toggleTheme = () => {
        setDarkMode(!darkMode);
      };

    return (
        <>
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
                        <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Async Crew .  All rights reserved.</p>
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
        </>
    )
}

export default Footer;
