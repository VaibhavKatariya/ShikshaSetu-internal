'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '@/lib/firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { IconFidgetSpinner } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, ArrowLeft, Check, X } from 'lucide-react'

export default function SignUpPage() {
  const [user, loading] = useAuthState(auth)
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [usernameAvailable, setUsernameAvailable] = useState(false)
  const [isCheckingUsername, setIsCheckingUsername] = useState(false)
  const [usernameError, setUsernameError] = useState('')
  const [error, setError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
  }, [user, router])

  useEffect(() => {
    const checkUsernameAvailability = async () => {
      if (username.length >= 4) {
        setIsCheckingUsername(true)
        const userDoc = await getDoc(doc(db, 'usernames', username))
        setUsernameAvailable(!userDoc.exists())
        setIsCheckingUsername(false)
        setUsernameError(userDoc.exists() ? 'Username is not available' : '')
      } else {
        setUsernameAvailable(false)
        setUsernameError(username.length > 0 ? 'Username must be at least 4 characters long' : '')
      }
    }

    const debounceTimer = setTimeout(checkUsernameAvailability, 500)
    return () => clearTimeout(debounceTimer)
  }, [username])


  useEffect(() => {
    setEmailError(email && !email.includes('@') ? 'Please enter a valid email address' : '')
  }, [email])


  useEffect(() => {
    setPhoneError(phoneNumber && phoneNumber.length !== 10 ? 'Phone number must be exactly 10 digits long' : '')
  }, [phoneNumber])


  useEffect(() => {
    setPasswordError(password && password.length < 6 ? 'Password must be at least 6 characters long' : '')
  }, [password])


  const handleSignUp = async (e) => {
    e.preventDefault()
    setError('')

    if (!usernameAvailable || emailError || phoneError || passwordError) {
      setError('Please correct the errors in the form')
      return
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(userCredential.user, { displayName: username })
      await setDoc(doc(db, 'usernames', username), { uid: userCredential.user.uid })
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        username,
        email,
        phoneNumber,
      })
      router.push('/dashboard')
    } catch (error) {
      setError('Failed to create an account. Please try again.')
      console.error('Sign up error:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9fb]">
        <IconFidgetSpinner className='animate-spin w-12 h-12 text-[#5624d0]' />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f8f9fb] flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#1c1d1f] text-center">Sign Up for EduTech</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-[#1c1d1f] mb-1">
                Username
              </label>
              <div className="relative">
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className={`w-full pl-3 pr-10 py-2 ${
                    isCheckingUsername || username.length === 0
                      ? 'border-gray-300 focus:border-[#5624d0] focus:ring-[#5624d0]'
                      : usernameAvailable
                      ? 'border-green-500 focus:border-green-500 focus:ring-green-500'
                      : 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  }`}
                />
                {isCheckingUsername && (
                  <IconFidgetSpinner className="absolute right-3 top-1/2 transform -translate-y-1/2 animate-spin w-5 h-5 text-[#5624d0]" />
                )}
                {!isCheckingUsername && username.length > 0 && (
                  <span className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${usernameAvailable ? 'text-green-500' : 'text-red-500'}`}>
                    {usernameAvailable ? <Check size={20} /> : <X size={20} />}
                  </span>
                )}
              </div>
              {usernameError && (
                <p className="mt-1 text-sm text-red-500">{usernameError}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1c1d1f] mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`w-full ${emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-[#5624d0] focus:ring-[#5624d0]'}`}
              />
              {emailError && (
                <p className="mt-1 text-sm text-red-500">{emailError}</p>
              )}
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#1c1d1f] mb-1">
                Phone Number
              </label>
              <Input
                id="phoneNumber"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className={`w-full ${phoneError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-[#5624d0] focus:ring-[#5624d0]'}`}
              />
              {phoneError && (
                <p className="mt-1 text-sm text-red-500">{phoneError}</p>
              )}
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
                minLength={6}
                className={`w-full ${passwordError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-[#5624d0] focus:ring-[#5624d0]'}`}
              />
              {passwordError && (
                <p className="mt-1 text-sm text-red-500">{passwordError}</p>
              )}
            </div>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline"> {error}</span>
              </div>
            )}
            <Button type="submit" className="w-full bg-[#5624d0] text-white hover:bg-[#3e1fa8]">
              Sign Up
            </Button>
          </form>
          <div className="text-center mt-4">
            Already have an account?{' '}
            <Link href="/join/login" className="text-[#5624d0] hover:underline">
              Log In
            </Link>
          </div>
        </CardContent>
      </Card>
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="mt-4 flex items-center text-[#5624d0] hover:bg-[#e3e4e8]"
      >
        <ArrowLeft className="mr-2" size={20} />
        Go Back
      </Button>
    </div>
  )
}