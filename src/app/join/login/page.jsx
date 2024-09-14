'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/lib/firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { IconFidgetSpinner } from '@tabler/icons-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle } from 'lucide-react'
import Link from 'next/link'


export default function LoginPage() {
  const [user, loading] = useAuthState(auth)
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')

    try {
      // Assuming the username is used as the email
      await signInWithEmailAndPassword(auth, username, password)
      router.push('/dashboard')
    } catch (error) {
      setError('Failed to log in. Please check your credentials.')
      console.error('Login error:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9fb]">
        <IconFidgetSpinner className='animate-spin w-12 h-12 text-[#5624d0]' />
      </div>
    )
  }

  if (user) {
    router.push('/dashboard')
    return null
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fb]">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#1c1d1f] text-center">Login to EduTech</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-[#1c1d1f] mb-1">
                  Username
                </label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full border-gray-300 focus:border-[#5624d0] focus:ring-[#5624d0]"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#1c1d1f] mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border-gray-300 focus:border-[#5624d0] focus:ring-[#5624d0]"
                />
              </div>
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                  <span className="flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    <span>{error}</span>
                  </span>
                </div>
              )}
              <Button type="submit" className="w-full bg-[#5624d0] text-white hover:bg-[#3e1fa8]">
                Login
              </Button>
              <div className="text-center mt-4">
                Already have an account?{' '}
                <Link href="/join/signup" className="text-[#5624d0] hover:underline">
                  Sign up
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
      {/* <Footer /> */}
    </div>
  )
}