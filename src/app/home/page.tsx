'use client';
import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  const mentors = [
    { name: 'John Doe', img: 'https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg' },
    { name: 'Jane Smith', img: 'https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg' },
    { name: 'Mike Johnson', img: 'https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg' },
    { name: 'Emily Davis', img: 'https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg' },
    { name: 'Chris Brown', img: 'https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg' },
  ];

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="page px-4 sm:px-6 lg:px-10 overflow-x-hidden">
        {/* Hero Section */}
        <div className="relative w-full bg-white py-8 md:py-12">
          <div className="flex flex-col items-center gap-8">
            {/* Top: Small Logo */}
            <div className="w-full flex justify-center">
              <Image
                className="w-28 h-auto"
                src="/logo.png"
                alt="SchoolSync Logo"
                width={112}
                height={28}
                priority
              />
            </div>

            {/* Middle: Welcome Text */}
            <div className="text-center">
              <h1
                className={`${inter.className} text-3xl md:text-5xl font-bold italic text-[#3d5a80]`}
              >
                Welcome to the Beginning of <br /> Our Learning Journey!
              </h1>
            </div>
          </div>
        </div>


        {/* Main Content Grid */}
        <div className="relative w-full bg-white mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 z-11">
            {/* First Column */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-[#3d5a80] to-[#2baffc] text-transparent bg-clip-text drop-shadow-lg text-center md:text-left">
                Student Portal
              </h1>
              <h2 className="text-2xl md:text-3xl text-[#2baffc] font-semibold drop-shadow-lg text-center md:text-left">
                Learn from anywhere, anytime!
              </h2>

              {/* Choose Classes by Grade */}
              <div className="p-6 md:p-8 bg-[#f0f4f8] rounded-xl shadow-lg">
                <h2 className="mb-6 text-xl md:text-2xl font-bold text-[#293241] text-center">
                  Choose Classes by Grade
                </h2>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                  {[...Array(12).keys()].map((idx) => (
                    <p
                      key={idx}
                      className="h-fit p-2 md:p-4 text-center text-sm md:text-base text-[#293241] bg-white border-2 border-[#98c1d9] rounded-lg shadow hover:bg-[#3d5a80] hover:text-white transition"
                    >
                      Grade {idx + 1}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-center my-6">
                <div className="flex-grow border-t border-[#98c1d9]"></div>
                <span className="px-4 text-[#293241] font-semibold">OR</span>
                <div className="flex-grow border-t border-[#98c1d9]"></div>
              </div>

              {/* Choose Module */}
              <div className="p-6 md:p-8 bg-[#f0f4f8] rounded-xl shadow-lg">
                <h2 className="mb-6 text-xl md:text-2xl font-bold text-[#293241] text-center">
                  Choose a Module
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {['Spoken English', 'English', 'Maths', 'More...'].map(
                    (module, idx) => (
                      <p
                        key={idx}
                        className="h-fit p-2 md:p-4 text-center text-sm md:text-base text-[#293241] bg-white border-2 border-[#98c1d9] rounded-lg shadow hover:bg-[#3d5a80] hover:text-white transition"
                      >
                        {module}
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="space-y-8">
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                {[...Array(3).keys()].map((idx) => (
                  <div
                    key={idx}
                    className="group transform hover:scale-105 transition-all"
                  >
                    <div
                      className={`p-4 md:p-6 rounded-xl shadow-lg text-center ${
                        idx % 2 ? 'bg-black' : 'bg-[#3d5a80]'
                      } hover:shadow-2xl`}
                    >
                      <span className="text-2xl md:text-4xl font-bold text-white px-2 md:px-4 py-1 md:py-2 rounded-full bg-gray-700">
                        3000+
                      </span>
                      <p className="mt-2 text-white text-sm md:text-base">
                        Lessons
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <h1 className="text-xl md:text-2xl font-bold text-center text-[#3d5a80] drop-shadow-lg">
                Top 6 Months Courses
              </h1>
              {[
                {
                  title: 'Information Technology',
                  instructor: 'Henry David',
                  enrolled: 100,
                  image: '/learn1.jpg',
                },
                {
                  title: 'Spoken English',
                  instructor: 'Anna Mary',
                  enrolled: 120,
                  image: '/English.jpg',
                },
              ].map((course, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-4 md:p-6 space-y-4 md:space-y-0 md:space-x-6 hover:shadow-2xl"
                >
                  <Image
                    objectFit="cover"
                    src={course.image}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="rounded-lg w-full md:w-auto"
                  />
                  <div className="text-center md:text-left space-y-2 w-full">
                    <h1 className="text-lg md:text-xl font-bold text-[#293241]">
                      {course.title}
                    </h1>
                    <h2 className="text-xs md:text-sm text-gray-600">
                      Beginner Level
                    </h2>
                    <h1 className="font-medium text-gray-700 text-sm md:text-base">
                      By {course.instructor}
                    </h1>
                    <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full md:w-auto">
                      <p>Enroll Now</p>
                      <Image
                        className="unoptimized"
                        objectFit="cover"
                        src="/arrow2.gif"
                        alt="arrow"
                        width={20}
                        height={20}
                      />
                    </button>
                    <h3 className="text-xs md:text-sm text-gray-500 text-center md:text-left">
                      {course.enrolled} already enrolled. Limited spaces left
                    </h3>
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
        <div className="my-16">
          <div className="flex items-center mb-12">
            <div className="flex-grow border-t border-[#98c1d9]"></div>
            <span className="px-4 text-lg md:text-2xl font-semibold text-[#3d5a80] text-center">
              With the best mentors islandwide
            </span>
            <div className="flex-grow border-t border-[#98c1d9]"></div>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Our Mentors
          </h1>

          <div className="relative w-full bg-white">
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
              {mentors.map((mentor, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-lg p-4 text-center transform hover:scale-105 transition-all duration-300"
                >
                  <div className="aspect-square relative mb-4">
                    <Image
                      src={mentor.img}
                      alt={mentor.name}
                      className="rounded-full object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h2 className="text-sm md:text-lg font-semibold text-gray-800">
                    {mentor.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Section */}
        <div className="flex items-center my-8 mt-16">
          <div className="flex-grow border-t border-[#98c1d9]"></div>
          <span className="px-4 text-lg md:text-2xl font-semibold text-[#3d5a80] bg-clip-text drop-shadow-lg text-center">
            Start your learning journey now!!
          </span>
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
          <div className="w-full md:w-1/2 p-4 md:pr-8 space-y-4 justify-center text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-500">
              Transform Your Learning Experience with Expert-Led Lessons
            </h1>
            <p className="text-base md:text-lg text-gray-700">
              Discover a wide range of lessons designed to ignite your curiosity and boost your
              knowledge. From essential skills to advanced courses, our interactive modules
              empower you to learn anytime, anywhere. Join thousands of learners on a journey
              toward academic and personal excellence.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
