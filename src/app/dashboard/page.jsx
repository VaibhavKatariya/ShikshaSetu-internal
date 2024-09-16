'use client'

import React, { useState, useEffect } from 'react'
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from '@/lib/firebase/config';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { BookOpen, Clock, Award, Zap, Users, Target, TrendingUp, Gift } from 'lucide-react'
import Header from './components/Header'
import { IconFidgetSpinner } from '@tabler/icons-react';
import Footer from '../components/Footer';
import { SignedIn } from '@/lib/firebase/components/signedIn';


function Dashboard() {

  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [signOut] = useSignOut(auth);

  const handelSignOut = () => {
    signOut();
    router.push("/join/login")
  }


  // Check if user is verified and handle redirection
  useEffect(() => {
    const checkEmailVerification = async () => {
      if (user) {
        await user.reload(); // Reload user data to get the latest email verification status
        if (!user.emailVerified) {
          router.push('/verifyEmail'); // Redirect to email verification page if not verified
        }
      }
    };

    if (!loading && user) {
      checkEmailVerification();
    } else if (!loading && !user) {
      router.push('/join/login'); // Redirect to sign-in if no user is logged in
    }
  }, [user, loading, router]);

  // Existing dummy data
  const overallProgress = 75
  const coursesEnrolled = 6
  const estimatedCompletion = '45 days'
  const gyanStreak = 21
  const totalLearningHours = 87
  const certificatesEarned = 0
  const ranking = 345
  const courseProgress = [
    { name: 'Digital India Initiatives', progress: 80, enrolled: 'May 15, 2023', instructor: 'Dr. Rajesh Kumar' },
    { name: 'E-Governance Fundamentals', progress: 45, enrolled: 'June 1, 2023', instructor: 'Prof. Sunita Sharma' },
    { name: 'Cybersecurity for Government', progress: 30, enrolled: 'June 10, 2023', instructor: 'Mr. Vikram Singh' },
    { name: 'Data Analytics in Public Sector', progress: 60, enrolled: 'May 20, 2023', instructor: 'Dr. Priya Patel' },
    { name: 'Smart Cities Development', progress: 20, enrolled: 'June 15, 2023', instructor: 'Mr. Amit Verma' },
    { name: 'Public Policy and Administration', progress: 10, enrolled: 'June 20, 2023', instructor: 'Dr. Meera Reddy' }
  ]
  const weeklyActivity = [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 1.8 },
    { day: 'Wed', hours: 3.2 },
    { day: 'Thu', hours: 2.7 },
    { day: 'Fri', hours: 2.3 },
    { day: 'Sat', hours: 4.1 },
    { day: 'Sun', hours: 3.6 }
  ]
  const skillAcquisition = [
    { date: 'Week 1', skills: 2 },
    { date: 'Week 2', skills: 3 },
    { date: 'Week 3', skills: 2 },
    { date: 'Week 4', skills: 4 },
    { date: 'Week 5', skills: 3 },
    { date: 'Week 6', skills: 5 },
  ]
  const learningPathProgress = [
    { name: 'Digital Transformation', value: 65 },
    { name: 'Leadership', value: 40 },
    { name: 'Project Management', value: 75 },
    { name: 'Data Science', value: 25 }
  ]
  const quizScores = [
    { quiz: 'Quiz 1', score: 85 },
    { quiz: 'Quiz 2', score: 92 },
    { quiz: 'Quiz 3', score: 78 },
    { quiz: 'Quiz 4', score: 88 },
    { quiz: 'Quiz 5', score: 95 },
    { quiz: 'Quiz 6', score: 90 },
    { quiz: 'Quiz 7', score: 65 },
    { quiz: 'Quiz 8', score: 70 },
    { quiz: 'Quiz 9', score: 82 },
    { quiz: 'Quiz 10', score: 75 }
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  // Function to determine offer based on user activity and streak
  const getOffer = (streak, totalHours) => {
    if (streak >= 30 && totalHours >= 100) {
      return "Congratulations! You've unlocked a free premium course. Claim it now!"
    } else if (streak >= 20 && totalHours >= 75) {
      return "You're close to unlocking a free premium course. Keep up the great work!"
    } else if (streak >= 10 && totalHours >= 50) {
      return "Stay consistent to unlock exciting rewards and free courses!"
    } else {
      return "Start your learning journey to unlock exciting offers and free courses!"
    }
  }

  const offer = getOffer(gyanStreak, totalLearningHours)

  // New learning path data
  const learningPaths = [
    {
      name: 'Full Stack Development',
      description: 'Become a versatile developer capable of handling both front-end and back-end tasks.',
      modules: [
        { name: 'HTML/CSS Fundamentals', status: 'completed' },
        { name: 'JavaScript Essentials', status: 'in-progress' },
        { name: 'React.js', status: 'not-started' },
        { name: 'Node.js and Express', status: 'not-started' },
        { name: 'Database Management', status: 'not-started' },
      ]
    },
    {
      name: 'Data Science',
      description: 'Learn to analyze and interpret complex data to inform decision making.',
      modules: [
        { name: 'Python for Data Science', status: 'in-progress' },
        { name: 'Statistical Analysis', status: 'not-started' },
        { name: 'Machine Learning Basics', status: 'not-started' },
        { name: 'Data Visualization', status: 'not-started' },
        { name: 'Big Data Technologies', status: 'not-started' },
      ]
    },
    {
      name: 'Cybersecurity',
      description: 'Protect digital assets and systems from cyber threats and attacks.',
      modules: [
        { name: 'Network Security Fundamentals', status: 'not-started' },
        { name: 'Ethical Hacking', status: 'not-started' },
        { name: 'Cryptography', status: 'not-started' },
        { name: 'Security Policies and Procedures', status: 'not-started' },
        { name: 'Incident Response and Forensics', status: 'not-started' },
      ]
    }, {
      name: 'Cloud Computing',
      description: 'Learn to design, deploy, and manage cloud-based solutions and services.',
      modules: [
        { name: 'Cloud Fundamentals', status: 'not-started' },
        { name: 'Cloud Security', status: 'not-started' },
        { name: 'Cloud Architecture', status: 'not-started' },
        { name: 'Serverless Computing', status: 'not-started' },
        { name: 'Cloud Migration Strategies', status: 'not-started' },
      ]
    }
  ]

  const [selectedPath, setSelectedPath] = useState(learningPaths[0])

  if (loading) {
    return (
      <>
        <Header />
        <IconFidgetSpinner className='animate-spin w-12 min-h-screen mx-auto' />
        <Footer />
      </>
    );
  }

  return (
    <SignedIn>
    <div className="min-h-screen bg-[#f7f9fa] p-6">

      <Header handelSignOut={handelSignOut} avatar={user?.photoURL} />

      <Alert className="mb-6 bg-[#a435f0] text-white">
        <Gift className="h-4 w-4" />
        <AlertTitle>Hi {user?.email}!</AlertTitle>
        <AlertDescription>{offer}</AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="bg-white shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#1c1d1f]">Overall Progress</CardTitle>
            <BookOpen className="h-4 w-4 text-[#a435f0]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#a435f0]">{overallProgress}%</div>
            <Progress value={overallProgress} className="mt-2" />
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#1c1d1f]">Courses Enrolled</CardTitle>
            <Users className="h-4 w-4 text-[#a435f0]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#a435f0]">{coursesEnrolled}</div>
            <p className="text-xs text-muted-foreground">+2 this month</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#1c1d1f]">Estimated Completion</CardTitle>
            <Clock className="h-4 w-4 text-[#a435f0]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#a435f0]">{estimatedCompletion}</div>
            <p className="text-xs text-muted-foreground">Keep up the good work!</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#1c1d1f]">Gyan Streak</CardTitle>
            <Zap className="h-4 w-4 text-[#a435f0]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#a435f0]">{gyanStreak} days</div>
            <p className="text-xs text-muted-foreground">Your longest streak yet!</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="text-[#1c1d1f]">Course Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {courseProgress.map((course, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{course.name}</span>
                  <div className="flex items-center">
                    <Progress value={course.progress} className="w-24 mr-2" />
                    <span className="text-xs font-semibold">{course.progress}%</span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="text-[#1c1d1f]">Weekly Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={weeklyActivity}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="hours" fill="#a435f0" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="text-[#1c1d1f]">Skill Acquisition Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={skillAcquisition}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="skills" stroke="#a435f0" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="text-[#1c1d1f]">Learning Path Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={learningPathProgress}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {learningPathProgress.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="bg-white shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#1c1d1f]">Total Learning Hours</CardTitle>
            <Clock className="h-4 w-4 text-[#a435f0]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#a435f0]">{totalLearningHours} hours</div>
            <p className="text-xs text-muted-foreground">Keep learning!</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#1c1d1f]">Certificates Earned</CardTitle>
            <Award className="h-4 w-4 text-[#a435f0]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#a435f0]">{certificatesEarned}</div>
            <p className="text-xs text-muted-foreground">Great achievement!</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#1c1d1f]">Your Ranking</CardTitle>
            <Target className="h-4 w-4 text-[#a435f0]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#a435f0]">#{ranking}</div>
            <p className="text-xs text-muted-foreground">Out of 10,000 learners</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-6">
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="text-[#1c1d1f]">Quiz Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={quizScores}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quiz" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="score" stroke="#a435f0" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-[#1c1d1f]">Your Learning Path</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <Card className="bg-white shadow-md col-span-1">
          <CardHeader>
            <CardTitle className="text-[#1c1d1f]">Available Paths</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {learningPaths.map((path, index) => (
                <li
                  key={index}
                  className={`cursor-pointer p-2 rounded ${selectedPath.name === path.name ? 'bg-[#a435f0] text-white' : 'hover:bg-gray-100'}`}
                  onClick={() => setSelectedPath(path)}
                >
                  {path.name}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md col-span-2">
          <CardHeader>
            <CardTitle className="text-[#1c1d1f]">{selectedPath.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-gray-600">{selectedPath.description}</p>
            <h3 className="font-semibold mb-2">Modules:</h3>
            <ul className="space-y-2">
              {selectedPath.modules.map((module, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span className="text-sm">{module.name}</span>
                  <Badge
                    variant={
                      module.status === 'completed' ? 'default' :
                        module.status === 'in-progress' ? 'secondary' : 'outline'
                    }
                  >
                    {module.status}
                  </Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-[#1c1d1f]">Your Enrolled Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courseProgress.map((course, index) => (
          <Card key={index} className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#1c1d1f]">{course.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">Progress: {course.progress}%</p>
              <Progress value={course.progress} className="mb-4" />
              <p className="text-xs text-muted-foreground mb-1">Enrolled: {course.enrolled}</p>
              <p className="text-xs text-muted-foreground mb-2">Instructor: {course.instructor}</p>
              <Badge variant="secondary" className="bg-[#a435f0] text-white">
                In Progress
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    </SignedIn>
  )
}

export default Dashboard