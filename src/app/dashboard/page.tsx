'use client'
import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { CiCircleChevRight } from "react-icons/ci";
import ModuleCompletenessPieChart from '../components/ModulePieChart';
import DailyCalendar from '../components/Calender';
import Navbar2 from '../components/NavBar2';
import Footer from '../components/Footer';

const Dashboard = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US");

  return (
    <main className="bg-gradient-to-r from-[#f9fafb] to-[#e3efff] text-black min-h-screen">
      <Navbar2 />

      <div className="flex justify-center items-center my-8">
        <div className="w-fit bg-white rounded-lg shadow-lg p-8 flex items-center">
          <div className="text-center pr-8 border-r-2 border-[#a4b5c4]">
            <p className="font-bold text-lg text-[#3d5a80]">Current Status</p>
          </div>

          <div className="flex gap-10 pl-8 items-center">
            <div className="text-center">
              <h1 className="text-lg font-semibold text-[#a4b5c4]">Average Score</h1>
              <p className="text-xl font-bold text-[#3d5a80]">85%</p>
            </div>

            <div className="flex justify-center items-center">
              <ModuleCompletenessPieChart completeness={90} />
            </div>
          </div>

          <div className="pl-8 text-center">
            <p className="text-lg font-semibold text-[#a4b5c4]">Ongoing Modules</p>
            <p className="text-xl font-bold text-[#3d5a80]">3</p>
          </div>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center mb-8 text-[#3d5a80]">{formattedDate}</h1>

      <div className="w-full rounded-lg shadow-xl bg-white p-8 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-[#3d5a80]">Active Courses</h1>
          <button className="text-[#2baffc] font-medium">See All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
            img: "/UI1.jpg", title: "Learn UI UX with ZHF Design Studio", tutorials: 35, hours: 0.3, next: "30 mins"
          }, {
            img: "/cloud1.jpg", title: "Structure Expert - 3D Design", tutorials: 120, hours: 0.6, next: "8.6 mins"
          }, {
            img: "/data1.jpg", title: "Learn Programming FAST!", tutorials: 55, hours: 0.3, next: "22.24 hrs"
          }].map((course, index) => (
            <div key={index} className="rounded-2xl bg-gradient-to-r from-[#3d5a80] to-[#5071a4] p-6 text-white">
              <img src={course.img} alt={course.title} className="h-72 object-cover w-full rounded-md mb-4" />
              <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
              <div className="flex items-center text-sm mb-4">
                <span className="mr-2">{course.tutorials} Tutorials</span>
                <span>{course.hours} hours/Day</span>
              </div>
              <button className="bg-[#2baffc] text-white rounded-lg px-4 py-2 w-full">
                Next class starting in {course.next}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-8 p-4">
        <div className="rounded-lg shadow-xl p-8 bg-white">
          <h1 className="text-2xl font-bold text-[#3d5a80] mb-4 text-center">Today's Classes</h1>
          {[{
            subject: 'Cloud Computing', time: '2:00 p.m.', duration: '2-hour session'
          }, {
            subject: 'Data Analytics', time: '10:00 a.m.', duration: '3-hour session'
          }].map((cls, index) => (
            <div key={index} className="border-b-2 border-[#a4b5c4] pb-4 mb-4 hover:bg-gradient-to-r from-[#3d5a80] to-[#5071a4] hover:text-white rounded-lg transition-all duration-300 cursor-pointer p-4">
              <h2 className="text-lg font-semibold">{cls.subject}</h2>
              <p className="text-sm mt-2">{cls.time}<br /><span className="text-gray-600">{cls.duration}</span></p>
              <h3 className="mt-3 text-[#2baffc] font-medium hover:underline">Click to join</h3>
            </div>
          ))}
        </div>

        <div className="rounded-lg shadow-xl p-8 bg-white">
          <h1 className="text-2xl font-bold text-[#3d5a80] mb-4 text-center">Upcoming Submissions</h1>
          {[{
            subject: 'Cloud Computing', task: 'Report Submission', due: '10th Dec, 2024'
          }, {
            subject: 'UI/UX', task: 'Project Submission', due: '15th Dec, 2024'
          }].map((sub, index) => (
            <div key={index} className="border-2 border-[#a4b5c4] p-4 rounded-lg hover:bg-gradient-to-r from-[#2baffc] to-[#3d5a80] hover:text-white transition-all duration-300 cursor-pointer">
              <h2 className="text-lg font-semibold">{sub.subject}</h2>
              <h3 className="text-lg font-semibold">{sub.task}</h3>
              <p className="text-sm mt-2">Due: {sub.due}</p>
              <h3 className="mt-3 text-[#2baffc] font-medium hover:underline">View details</h3>
            </div>
          ))}
        </div>
      </div>

      <DailyCalendar />
      <Footer />
    </main>
  );
}

export default Dashboard;
