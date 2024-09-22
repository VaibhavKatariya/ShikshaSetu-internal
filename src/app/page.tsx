'use client'
import { IconFidgetSpinner } from "@tabler/icons-react"
import { auth } from "@/lib/firebase/config"
import { useAuthState } from "react-firebase-hooks/auth"
import Header from "./components/Header"
import LPSections from "./components/LPSections"
import Footer from "./components/Footer"

export default function LandingPage() {
  const [user, loading] = useAuthState(auth)


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
      <Header user={user} auth={auth} />

      {/* Sections */}
      <LPSections />

      {/* Footer */}
      <Footer/>
    </div>
  )
}