'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import { BookOpen, Clock, Award, Zap, Users, Target, TrendingUp, Gift, DollarSign, Star, BarChart2, PieChart as PieChartIcon, Download, Calendar, Bell } from 'lucide-react'
import logo from "@/app/assets/logo.png"
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import html2canvas from 'html2canvas'

export default function EnhancedTeacherDashboard() {
  // Existing dummy data (unchanged)
  const totalStudents = 1250
  const totalCourses = 15
  const totalRevenue = 75000
  const studentPurchases = [
    { month: 'Jan', purchases: 120, revenue: 6000 },
    { month: 'Feb', purchases: 150, revenue: 7500 },
    { month: 'Mar', purchases: 180, revenue: 9000 },
    { month: 'Apr', purchases: 210, revenue: 10500 },
    { month: 'May', purchases: 240, revenue: 12000 },
    { month: 'Jun', purchases: 270, revenue: 13500 },
  ]
  const feedbackDistribution = [
    { name: 'Positive', value: 75 },
    { name: 'Neutral', value: 20 },
    { name: 'Negative', value: 5 },
  ]
  const courseAnalysis = [
    { name: 'Web Development', completionRate: 85, engagement: 90 },
    { name: 'Data Science', completionRate: 78, engagement: 85 },
    { name: 'Mobile App Development', completionRate: 82, engagement: 88 },
    { name: 'Machine Learning', completionRate: 75, engagement: 80 },
  ]
  const studentEngagement = {
    activeStudents: 950,
    inactiveStudents: 300,
    averageTimeSpent: 45, // minutes per course
  }
  const teacherRanking = 5 // out of 100
  const teacherRating = 4.8 // out of 5
  const studentEnrollmentTrends = [
    { month: 'Jan', enrollments: 100 },
    { month: 'Feb', enrollments: 120 },
    { month: 'Mar', enrollments: 150 },
    { month: 'Apr', enrollments: 180 },
    { month: 'May', enrollments: 200 },
    { month: 'Jun', enrollments: 230 },
    { month: 'Jul', enrollments: 180 },
    { month: 'Aug', enrollments: 210 }

  ]
  const revenueBreakdown = [
    { course: 'Web Development', revenue: 30000 },
    { course: 'Data Science', revenue: 25000 },
    { course: 'Mobile App Development', revenue: 15000 },
    { course: 'Machine Learning', revenue: 5000 },
  ]
  const commonFeedback = [
    { comment: 'Great course content', count: 45 },
    { comment: 'Clear explanations', count: 38 },
    { comment: 'More practical examples needed', count: 22 },
    { comment: 'Excellent instructor', count: 40 },
    { comment: 'Too theoretical', count: 15 },
    { comment: 'Difficult to understand', count: 10 },
    { comment: 'Not enough quizzes', count: 20 },
    { comment: 'Poor audio quality', count: 5 },
    { comment: "Wouldn't recommend", count: 3 },
    { comment: "Amazing Teacher", count: 50 },
  ]

  // New dummy data for enhanced features
  const teacherSkills = [
    { skill: 'Teaching', score: 90 },
    { skill: 'Content Creation', score: 85 },
    { skill: 'Student Engagement', score: 80 },
    { skill: 'Technical Knowledge', score: 95 },
    { skill: 'Communication', score: 88 },
  ]

  const upcomingDeadlines = [
    { task: 'Update Web Development course', due: '2023-07-15' },
    { task: 'Review student projects', due: '2023-07-20' },
    { task: 'Prepare new Data Science module', due: '2023-07-25' },
  ]

  const studentPerformance = [
    { name: 'High Performers', students: 450 },
    { name: 'Average Performers', students: 600 },
    { name: 'Struggling', students: 200 },
  ]

  const courseCompletionRate = 78 // percentage

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8']

  const [selectedTimeRange, setSelectedTimeRange] = useState('This Month')

//   const dashboardRef = useRef(null)

//   const handleExportData = async () => {
//     if (!dashboardRef.current) return

//     const pdf = new jsPDF('p', 'mm', 'a4')
//     const pdfWidth = pdf.internal.pageSize.getWidth()
//     const pdfHeight = pdf.internal.pageSize.getHeight()

//     // Add title
//     pdf.setFontSize(20)
//     pdf.text('Teacher Analytics Report', pdfWidth / 2, 15, { align: 'center' })

//     // Add summary data
//     pdf.setFontSize(12)
//     pdf.text(`Total Students: ${totalStudents}`, 20, 30)
//     pdf.text(`Total Courses: ${totalCourses}`, 20, 40)
//     pdf.text(`Total Revenue: ₹${totalRevenue.toLocaleString()}`, 20, 50)
//     pdf.text(`Course Completion Rate: ${courseCompletionRate}%`, 20, 60)

//     // Capture and add charts
//     const chartElements = dashboardRef.current.querySelectorAll('.recharts-wrapper')
//     let yOffset = 70

//     for (let i = 0; i < chartElements.length; i++) {
//       const chart = chartElements[i]
//       const canvas = await html2canvas(chart)
//       const imgData = canvas.toDataURL('image/png')
      
//       if (yOffset + 60 > pdfHeight) {
//         pdf.addPage()
//         yOffset = 20
//       }

//       pdf.addImage(imgData, 'PNG', 20, yOffset, 170, 60)
//       yOffset += 70
//     }

//     // Add tables
//     pdf.addPage()
//     pdf.autoTable({
//       head: [['Course', 'Completion Rate', 'Engagement']],
//       body: courseAnalysis.map(course => [course.name, `${course.completionRate}%`, `${course.engagement}%`]),
//       startY: 20,
//     })

//     pdf.addPage()
//     pdf.autoTable({
//       head: [['Feedback', 'Count']],
//       body: commonFeedback.map(feedback => [feedback.comment, feedback.count]),
//       startY: 20,
//     })

//     // Save the PDF
//     pdf.save('teacher_analytics.pdf')
//   }

const handleExportData = () => {
    // Combine all the data into a single object
    const exportData = {
      totalStudents,
      totalCourses,
      totalRevenue,
      studentPurchases,
      feedbackDistribution,
      courseAnalysis,
      studentEngagement,
      teacherRanking,
      teacherRating,
      studentEnrollmentTrends,
      revenueBreakdown,
      commonFeedback,
      teacherSkills,
      upcomingDeadlines,
      studentPerformance,
      courseCompletionRate,
    }

    // Convert the data to a JSON string
    const jsonString = JSON.stringify(exportData, null, 2)

    // Create a Blob with the JSON data
    const blob = new Blob([jsonString], { type: 'application/json' })

    // Create a temporary URL for the Blob
    const url = URL.createObjectURL(blob)

    // Create a temporary anchor element and trigger the download
    const a = document.createElement('a')
    a.href = url
    a.download = 'teacher_analytics.json'
    document.body.appendChild(a)
    a.click()

    // Clean up
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
   

  
  return (
    <div className="min-h-screen bg-[#f7f9fa] p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Shiksha Setu Logo"
            width={200}
            height={50}
            className="mr-4"
          />
          <div>
            <h1 className="text-3xl font-bold text-[#1c1d1f]">Shiksha Setu Enhanced Teacher Dashboard</h1>
            <p className="text-sm text-[#6a6f73]">विद्या तत्त्व ज्योतिस्मः - Knowledge is the essence of light</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Select defaultValue={selectedTimeRange} onValueChange={setSelectedTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="This Week">This Week</SelectItem>
              <SelectItem value="This Month">This Month</SelectItem>
              <SelectItem value="This Quarter">This Quarter</SelectItem>
              <SelectItem value="This Year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Badge variant="outline" className="text-[#a435f0] border-[#a435f0]">
            Government of NCT of Delhi
          </Badge>
        </div>
      </div>

      <Alert className="mb-6 bg-[#a435f0] text-white">
        <Gift className="h-4 w-4" />
        <AlertTitle>Teacher Spotlight</AlertTitle>
        <AlertDescription>Congratulations! You're in the top 5% of teachers this month. Keep up the excellent work!</AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="bg-white shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#1c1d1f]">Total Students</CardTitle>
            <Users className="h-4 w-4 text-[#a435f0]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#a435f0]">{totalStudents}</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#1c1d1f]">Total Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-[#a435f0]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#a435f0]">{totalCourses}</div>
            <p className="text-xs text-muted-foreground">2 new courses this month</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#1c1d1f]">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-[#a435f0]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#a435f0]">₹{totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#1c1d1f]">Course Completion Rate</CardTitle>
            <Target className="h-4 w-4 text-[#a435f0]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#a435f0]">{courseCompletionRate}%</div>
            <Progress value={courseCompletionRate} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="mb-6">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-[#1c1d1f]">Student Purchases & Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={studentPurchases}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="purchases" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-[#1c1d1f]">Teacher Skills Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={teacherSkills}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="skill" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="Teacher" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <Card className="bg-white shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#1c1d1f]">Teacher Ranking</CardTitle>
                <Award className="h-4 w-4 text-[#a435f0]" />
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-[#a435f0]">#{teacherRanking}</div>
                <p className="text-sm text-muted-foreground">Out of 100 teachers</p>
                <Progress value={(100 - teacherRanking) / 100 * 100} className="mt-2" />
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#1c1d1f]">Teacher Rating</CardTitle>
                <Star className="h-4 w-4 text-[#a435f0]" />
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-[#a435f0]">{teacherRating}/5</div>
                <p className="text-sm text-muted-foreground">Based on student feedback</p>
                <div className="flex items-center mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`h-5 w-5 ${star <= Math.round(teacherRating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#1c1d1f]">Upcoming Deadlines</CardTitle>
                <Calendar className="h-4 w-4 text-[#a435f0]" />
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {upcomingDeadlines.map((deadline, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span className="text-sm">{deadline.task}</span>
                      <Badge variant="outline">{deadline.due}</Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="courses">
          <div className="grid grid-cols-1 gap-4 mb-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-[#1c1d1f]">Course Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={courseAnalysis}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="completionRate" fill="#8884d8" name="Completion Rate" />
                    <Bar dataKey="engagement" fill="#82ca9d" name="Engagement" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-[#1c1d1f]">Revenue Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={revenueBreakdown}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="revenue"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {revenueBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-[#1c1d1f]">Common Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {commonFeedback.map((feedback, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <span className="text-sm">{feedback.comment}</span>
                      <Badge variant="secondary">{feedback.count}</Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="students">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-[#1c1d1f]">Student Enrollment Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={studentEnrollmentTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="enrollments" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-[#1c1d1f]">Student Performance Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={studentPerformance}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="students"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {studentPerformance.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-white shadow-md mb-6">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#1c1d1f]">Student Engagement</CardTitle>
              <Users className="h-4 w-4 text-[#a435f0]" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium">Active Students</p>
                  <div className="flex items-center">
                    <Progress value={(studentEngagement.activeStudents / totalStudents) * 100} className="mr-2" />
                    <span className="text-sm font-semibold">{studentEngagement.activeStudents}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">Inactive Students</p>
                  <div className="flex items-center">
                    <Progress value={(studentEngagement.inactiveStudents / totalStudents) * 100} className="mr-2" />
                    <span className="text-sm font-semibold">{studentEngagement.inactiveStudents}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">Average Time Spent</p>
                  <div className="text-lg font-semibold text-[#a435f0]">{studentEngagement.averageTimeSpent} min/course</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="performance">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-[#1c1d1f]">Teacher Skills Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={teacherSkills}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="skill" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="Teacher" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-[#1c1d1f]">Feedback Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={feedbackDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {feedbackDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-white shadow-md mb-6">
            <CardHeader>
              <CardTitle className="text-[#1c1d1f]">Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label>Course Completion Rate</Label>
                  <Progress value={courseCompletionRate} className="mt-2" />
                  <p className="text-sm text-muted-foreground mt-1">{courseCompletionRate}% of students complete your courses</p>
                </div>
                <div>
                  <Label>Student Satisfaction</Label>
                  <Progress value={teacherRating * 20} className="mt-2" />
                  <p className="text-sm text-muted-foreground mt-1">{teacherRating}/5 average rating from students</p>
                </div>
                <div>
                  <Label>Revenue Generation</Label>
                  <Progress value={(totalRevenue / 100000) * 100} className="mt-2" />
                  <p className="text-sm text-muted-foreground mt-1">₹{totalRevenue.toLocaleString()} total revenue generated</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 gap-4 mb-6">
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="text-[#1c1d1f]">Notifications & Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <Bell className="h-4 w-4 mr-2 text-[#a435f0]" />
                <span>New student feedback received for "Data Science" course</span>
              </li>
              <li className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-2 text-[#a435f0]" />
                <span>Course review for "Web Development" due in 2 days</span>
              </li>
              <li className="flex items-center text-sm">
                <Target className="h-4 w-4 mr-2 text-[#a435f0]" />
                <span>You're close to reaching 1500 total students!</span>
              </li>
              <li className="flex items-center text-sm">
                <Award className="h-4 w-4 mr-2 text-[#a435f0]" />
                <span>Congratulations! Your "Machine Learning" course has been featured on the homepage.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center mt-8">
        <div>
          <h2 className="text-2xl font-bold text-[#1c1d1f] mb-2">Customization Options</h2>
          <p className="text-sm text-[#6a6f73] mb-4">Personalize your dashboard view</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={handleExportData}>
            <Download className="mr-2 h-4 w-4" /> Export Data
          </Button>
          <Button>
            <PieChartIcon className="mr-2 h-4 w-4" /> Customize Widgets
          </Button>
        </div>
      </div>
    </div>
  )
}