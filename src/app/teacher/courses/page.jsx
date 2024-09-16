'use client'

import React, { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { PlusCircle, Book, Edit, Trash2, Upload } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const TeacherCoursesPage = () => {
  const [courses, setCourses] = useState([])
  const [isCreating, setIsCreating] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [courseData, setCourseData] = useState({
    name: '',
    description: '',
    isFree: true,
    price: '',
    thumbnail: null,
    tags: [],
    prerequisites: '',
  })

  const fileInputRef = useRef(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCourseData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (checked) => {
    setCourseData((prev) => ({ ...prev, isFree: checked }))
  }

  const handleTagChange = (value) => {
    setCourseData((prev) => ({ ...prev, tags: [...prev.tags, value] }))
  }

  const handleThumbnailUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setCourseData((prev) => ({ ...prev, thumbnail: e.target.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCreateCourse = () => {
    const newCourse = { ...courseData, id: Date.now() }
    setCourses((prev) => [...prev, newCourse])
    setIsCreating(false)
    setCurrentStep(1)
    setCourseData({
      name: '',
      description: '',
      isFree: true,
      price: '',
      thumbnail: null,
      tags: [],
      prerequisites: '',
    })
  }

  const handleDeleteCourse = (id) => {
    setCourses((prev) => prev.filter(course => course.id !== id))
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <Label htmlFor="name">Course Name</Label>
            <Input id="name" name="name" value={courseData.name} onChange={handleInputChange} className="mb-4" />
            
            <Label htmlFor="description">Course Description</Label>
            <Textarea id="description" name="description" value={courseData.description} onChange={handleInputChange} className="mb-4" />
            
            <div className="flex items-center space-x-2 mb-4">
              <Switch id="isFree" checked={courseData.isFree} onCheckedChange={handleSwitchChange} />
              <Label htmlFor="isFree">Free Course</Label>
            </div>
            
            {!courseData.isFree && (
              <>
                <Label htmlFor="price">Course Price (₹)</Label>
                <Input id="price" name="price" type="number" value={courseData.price} onChange={handleInputChange} className="mb-4" />
              </>
            )}
          </>
        )
      case 2:
        return (
          <>
            <Label htmlFor="thumbnail">Course Thumbnail</Label>
            <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {courseData.thumbnail ? (
                  <Image src={courseData.thumbnail} alt="Course Thumbnail" width={200} height={200} className="mx-auto" />
                ) : (
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                )}
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="thumbnail-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <span>Upload a file</span>
                    <input id="thumbnail-upload" name="thumbnail-upload" type="file" className="sr-only" onChange={handleThumbnailUpload} ref={fileInputRef} accept="image/*" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </>
        )
      case 3:
        return (
          <>
            <Label htmlFor="tags">Course Tags</Label>
            <Select onValueChange={handleTagChange}>
              <SelectTrigger className="mb-2">
                <SelectValue placeholder="Select a tag" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="programming">Programming</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex flex-wrap gap-2 mb-4">
              {courseData.tags.map((tag, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{tag}</span>
              ))}
            </div>
            
            <Label htmlFor="prerequisites">Course Prerequisites</Label>
            <Textarea id="prerequisites" name="prerequisites" value={courseData.prerequisites} onChange={handleInputChange} className="mb-4" />
          </>
        )
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Courses</h1>
      
      {!isCreating && (
        <Button onClick={() => setIsCreating(true)} className="mb-6">
          <PlusCircle className="mr-2 h-4 w-4" /> Create New Course
        </Button>
      )}

      <AnimatePresence>
        {isCreating && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Create New Course - Step {currentStep} of 3</CardTitle>
              </CardHeader>
              <CardContent>
                {renderStep()}
                <div className="flex justify-between mt-4">
                  {currentStep > 1 && (
                    <Button variant="outline" onClick={() => setCurrentStep((prev) => prev - 1)}>
                      Previous
                    </Button>
                  )}
                  {currentStep < 3 ? (
                    <Button onClick={() => setCurrentStep((prev) => prev + 1)}>
                      Next
                    </Button>
                  ) : (
                    <Button onClick={handleCreateCourse}>
                      Create Course
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{course.name}</CardTitle>
              </CardHeader>
              <CardContent>
                {course.thumbnail ? (
                  <Image src={course.thumbnail} alt={course.name} width={300} height={200} className="w-full h-40 object-cover rounded-md mb-4" />
                ) : (
                  <div className="w-full h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                    <Book className="h-12 w-12 text-gray-400" />
                  </div>
                )}
                <p className="text-sm text-gray-500 mb-2">{course.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {course.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{tag}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">{course.isFree ? 'Free' : `₹${course.price}`}</span>
                  <div>
                    <Button variant="ghost" size="icon" className="mr-2">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteCourse(course.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TeacherCoursesPage