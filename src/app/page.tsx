'use client'
import React from 'react'
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '../app/components/NavBar';
import Footer from '../app/components/Footer';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  const mentors = [
    { name: 'John Doe', img: 'https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg' },
    { name: 'Jane Smith', img: 'https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg' },
    { name: 'Mike Johnson', img: 'https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg' },
    { name: 'Emily Davis', img: 'https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg' },
    { name: 'Chris Brown', img: 'https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg' }
  ];
  
  return (
    <main className="overflow-x-hidden">
      <Navbar/>
      <div className="page px-4 md:m-10">
        {/* Hero Section */}
        <div className="relative w-full bg-white">
          <div className="flex flex-col md:flex-row p-0 m-0 items-center z-10">  
            <Image   
              className="z-10 w-full md:w-1/2"
              src="/teach.gif"   
              alt="bg-image"   
              width={1000}   
              height={1000}   
            />  
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 space-y-4 mt-6 md:mt-0"> 
              <Image 
                className="object-contain p-0 mb-8 md:mb-16" 
                src="/logo.png" 
                alt="SchoolSync Logo" 
                width={200} 
                height={50} 
              />  
              <Image   
                className="w-3/4 md:w-1/2 object-cover"   
                src="/welcome.jpg"   
                alt="bg-image"   
                width={400}   
                height={200}   
              />  
              <h1 className={`${inter.className} text-3xl md:text-5xl italic text-center font-semibold text-[#3d5a80] bg-clip-text drop-shadow-lg`}>  
                To the beginning <br/> of our <br/> Learning Journey 
              </h1>  
            </div>
          </div> 
        </div>

        {/* Main Content */}
        <div className="relative w-full bg-white mt-8">
          <div className="grid w-full h-full grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* First Column */}
            <div className="space-y-8 md:space-y-12">
              <h1 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-[#3d5a80] to-[#2baffc] text-transparent bg-clip-text drop-shadow-lg">
                Student Portal
              </h1>
              <h2 className="text-2xl md:text-3xl text-[#2baffc] font-semibold drop-shadow-lg">
                Learn from anywhere, anytime!
              </h2>

              {/* Choose Classes by Grade */}
              <div className="p-4 md:p-8 bg-[#f0f4f8] rounded-xl shadow-lg">
                <h2 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold text-[#293241]">Choose Classes by Grade</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                  {[...Array(12).keys()].map(idx => (
                    <p
                      key={idx}
                      className="h-fit p-2 md:p-4 text-center text-[#293241] bg-white border-2 border-[#98c1d9] rounded-lg shadow hover:bg-[#3d5a80] hover:text-white transition"
                    >
                      Grade {idx + 1}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-center my-6 md:my-8">
                <div className="flex-grow border-t border-[#98c1d9]"></div>
                <span className="px-4 text-[#293241] font-semibold">OR</span>
                <div className="flex-grow border-t border-[#98c1d9]"></div>
              </div>

              {/* Choose Module */}
              <div className="p-4 md:p-8 bg-[#f0f4f8] rounded-xl shadow-lg">
                <h2 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold text-[#293241]">Choose a Module</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                  {['Spoken English', 'English', 'Maths', 'More...'].map((module, idx) => (
                    <p
                      key={idx}
                      className="h-fit p-2 md:p-4 text-center text-[#293241] bg-white border-2 border-[#98c1d9] rounded-lg shadow hover:bg-[#3d5a80] hover:text-white transition"
                    >
                      {module}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="space-y-8 md:space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {[...Array(3).keys()].map(idx => (
                  <div key={idx} className="group transform hover:scale-105 transition-all">
                    <div className={`p-4 md:p-6 rounded-xl shadow-lg text-center ${idx % 2 ? 'bg-black' : 'bg-[#3d5a80]'} hover:shadow-2xl`}>
                      <span className="text-3xl md:text-4xl font-bold text-white px-4 py-2 rounded-full bg-gray-700">
                        3000+
                      </span>
                      <p className="mt-2 text-white">Lessons</p>
                    </div>
                  </div>
                ))}
              </div>

              <h1 className="text-xl md:text-2xl font-bold text-center text-[#3d5a80] drop-shadow-lg">Top 6 Months Courses</h1>
              {[
                { title: 'Information Technology', instructor: 'Henry David', enrolled: 100, image: '/learn1.jpg' },
                { title: 'Spoken English', instructor: 'Anna Mary', enrolled: 120, image: '/English.jpg' }
              ].map((course, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-0 md:space-x-6 hover:shadow-2xl">
                  <Image
                    objectFit="cover"
                    src={course.image}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="rounded-lg w-full md:w-auto"
                  />
                  <div className="text-center md:text-left space-y-2">
                    <h1 className="text-lg md:text-xl font-bold text-[#293241]">{course.title}</h1>
                    <h2 className="text-sm text-gray-600">Beginner Level</h2>
                    <h1 className="font-medium text-gray-700">By {course.instructor}</h1>
                    <button className="flex items-center justify-center md:justify-start space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full md:w-auto">
                      <p>Enroll Now</p>
                      <Image
                        objectFit="cover"
                        src="/arrow2.gif"
                        alt="arrow"
                        width={20}
                        height={20}
                      />
                    </button>
                    <h3 className="text-gray-500">{course.enrolled} already enrolled. Limited spaces left</h3>
                  </div>
                </div>
              ))}

              <div className="flex justify-center mt-6">
                <button className="w-full md:w-2/5 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  View more courses...
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mentors Section */}
        <div className="flex items-center my-8">
          <div className="flex-grow border-t border-[#98c1d9]"></div>
          <span className="px-4 text-xl md:text-2xl font-semibold text-[#3d5a80] bg-clip-text drop-shadow-lg text-center">With the best mentors islandwide</span>
          <div className="flex-grow border-t border-[#98c1d9]"></div>
        </div>      
        
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Mentors</h1>
        <div className="relative w-full bg-white">
          <div className="absolute inset-0">
            <svg viewBox="0 0 500 200" className="w-full">
              <path d="M 0 30 C 150 100 280 0 500 20 L 500 0 L 0 0" fill="#3d5a80"></path>
            </svg>
          </div>

          <div className="relative z-10 flex justify-center pt-8">
            <div className="w-full md:w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {mentors.map((mentor, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-lg text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                >
                  <div className="relative z-10 p-4 md:p-6">
                    <img
                      src={mentor.img}
                      alt={mentor.name}
                      className="shadow-lg rounded-full w-20 md:w-24 h-20 md:h-24 mx-auto mb-4"
                    />
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800">{mentor.name}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Section */}
        <div className="flex items-center my-8 mt-16">
          <div className="flex-grow border-t border-[#98c1d9]"></div>
          <span className="px-4 text-xl md:text-2xl font-semibold text-[#3d5a80] bg-clip-text drop-shadow-lg text-center">Start your learning journey now!!</span>
          <div className="flex-grow border-t border-[#98c1d9]"></div>
        </div>

        <div className="flex flex-col md:flex-row p-0 m-0 items-center">
          <Image 
            className="w-full md:w-1/2 h-full object-cover" 
            src="/learn2.jpg" 
            alt="bg-image" 
            width={500} 
            height={500} 
          />
          <div className="w-full md:w-1/2 p-4 md:pr-8 space-y-4 justify-center mt-4 md:mt-0">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-500 text-center">Transform Your Learning Experience with Expert-Led Lessons</h1>
            <p className="text-base md:text-lg text-gray-700 text-center">
              Discover a wide range of lessons designed to ignite your curiosity and boost your knowledge. From essential skills to advanced courses, our interactive modules empower you to learn anytime, anywhere. Join thousands of learners on a journey toward academic and personal excellence.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default Home;