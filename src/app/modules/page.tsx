'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar2 from '../components/NavBar2';
import Footer from '../components/Footer';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Star, 
  Award, 
  CheckCircle 
} from 'lucide-react';

// Sample data with more detailed information
const recommendedClasses = [
  {
    id: 1,
    name: 'Mathematics',
    grade: 'Grade 6',
    mentor: 'Dr. Sarah Johnson',
    fee: 299,
    rating: 4.7,
    students: 250,
    description: 'Comprehensive math course covering algebra, geometry, and problem-solving strategies',
    difficulty: 'Intermediate',
    imageUrl: '/maths.jpg',
    highlights: ['Interactive Lessons', 'Weekly Assessments', 'Personalized Feedback']
  },
  {
    id: 2,
    name: 'Science ',
    grade: 'Grade 6',
    mentor: 'Prof. Michael Lee',
    fee: 349,
    rating: 4.9,
    students: 320,
    description: 'Engaging scientific exploration of biology, chemistry, and earth sciences',
    difficulty: 'Advanced',
    imageUrl: '/science.jpg',
    highlights: ['Lab Experiments', 'Real-world Applications', 'Expert Mentorship']
  },
  {
    id: 3,
    name: 'English ',
    grade: 'Grade 6',
    mentor: 'Ms. Emily Rodriguez',
    fee: 279,
    rating: 4.5,
    students: 200,
    description: 'Advanced reading, writing, and communication skill development',
    difficulty: 'Beginner',
    imageUrl: '/english6.jpg',
    highlights: ['Creative Writing', 'Literature Analysis', 'Public Speaking']
  },
  {
    id: 4,
    name: 'Mathematics',
    grade: 'Grade 6',
    mentor: 'Dr. Sarah Johnson',
    fee: 299,
    rating: 4.7,
    students: 250,
    description: 'Comprehensive math course covering algebra, geometry, and problem-solving strategies',
    difficulty: 'Intermediate',
    imageUrl: '/maths.jpg',
    highlights: ['Interactive Lessons', 'Weekly Assessments', 'Personalized Feedback']
  },
  {
    id: 5,
    name: 'Mathematics',
    grade: 'Grade 6',
    mentor: 'Dr. Sarah Johnson',
    fee: 299,
    rating: 4.7,
    students: 250,
    description: 'Comprehensive math course covering algebra, geometry, and problem-solving strategies',
    difficulty: 'Intermediate',
    imageUrl: '/maths.jpg',
    highlights: ['Interactive Lessons', 'Weekly Assessments', 'Personalized Feedback']
  },
  {
    id: 6,
    name: 'Mathematics',
    grade: 'Grade 6',
    mentor: 'Dr. Sarah Johnson',
    fee: 299,
    rating: 4.7,
    students: 250,
    description: 'Comprehensive math course covering algebra, geometry, and problem-solving strategies',
    difficulty: 'Intermediate',
    imageUrl: '/maths.jpg',
    highlights: ['Interactive Lessons', 'Weekly Assessments', 'Personalized Feedback']
  },
];

const commonModules = [
  { name: 'Mathematics', icon: BookOpen },
  { name: 'Science', icon: Star },
  { name: 'English', icon: Award },
  { name: 'Social Studies', icon: CheckCircle },
  { name: 'Computer Science', icon: BookOpen }
];

const Modules = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState('');
  const [selectedMedium, setSelectedMedium] = useState('');
  const [maxFee, setMaxFee] = useState(500);
  const [selectedGrade,setSelectedGrade] = useState('');

  const fields = ['Mathematics', 'Science', 'Language', 'Social Studies'];
  const mediums = ['Online', 'In-Person', 'Hybrid'];
  const grades = ['Grade 1','Grade 2','Grade 3','Grade 4','Grade 5','Grade 6','Grade 7','Grade 8','Grade 9','Grade 10','Grade 11','Grade 12','Grade 13'];

  return (
    <main>
    <Navbar2 />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Explore all the Modules
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover personalized learning paths tailored to your academic goals. 
            Enhance your skills with expert-led courses designed specifically for students.
          </p>
        </header>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="bg-white shadow-xl rounded-2xl p-8 border-2 border-blue-100">
            <div className="flex items-center mb-6 space-x-4">
              <div className="relative flex-grow">
                <input 
                  type="text" 
                  placeholder="Search modules..." 
                  className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-3.5 text-gray-400" />
              </div>
              <button>Search</button>
              <Filter className="text-gray-600" />
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-4 gap-4">
              <select 
                className="px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
              >
                <option value="">Select Field</option>
                {fields.map((field) => (
                  <option key={field} value={field}>{field}</option>
                ))}
              </select>
              
              <select 
                className="px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedMedium}
                onChange={(e) => setSelectedMedium(e.target.value)}
              >
                <option value="">Select Medium</option>
                {mediums.map((medium) => (
                  <option key={medium} value={medium}>{medium}</option>
                ))}
              </select>

              <select 
                className="px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
              >
                <option value="">Select Grade</option>
                {grades.map((grade) => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
              
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2">Max Fee: ${maxFee}</label>
                <input 
                  type="range" 
                  min="0" 
                  max="500" 
                  value={maxFee}
                  onChange={(e) => setMaxFee(Number(e.target.value))}
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Common Module Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              {commonModules.map((module) => {
                const Icon = module.icon;
                return (
                  <button 
                    key={module.name} 
                    className="flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-100 transition"
                  >
                    <Icon size={16} />
                    <span>{module.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Recommended Classes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Recommended for You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {recommendedClasses.map((classItem) => (
              <div 
                key={classItem.id} 
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative">
                  <Image 
                    src={classItem.imageUrl} 
                    alt={classItem.name} 
                    width={400} 
                    height={250} 
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full flex items-center">
                    <Star size={16} className="mr-1" />
                    {classItem.rating}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{classItem.name}</h3>
                  <span className="text-sm text-gray-800 mb-5 font-bold">{classItem.grade}</span><br/>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                   
                    <span>Mentor: {classItem.mentor}</span>
                    <span>Difficulty: {classItem.difficulty}</span>
                  </div>
                  <p className="text-gray-500 mb-4">{classItem.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-blue-600">${classItem.fee}</span>
                    <span className="text-gray-500">{classItem.students} Students</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {classItem.highlights.map((highlight) => (
                      <span 
                        key={highlight} 
                        className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    <Footer/>
    </main>
  );
};

export default Modules;