'use client' 
import React from 'react'
import { MdAccountCircle } from 'react-icons/md';
import { CiCircleChevRight } from "react-icons/ci";
import ModuleCompletenessPieChart from '../components/ModulePieChart';
import { CiBellOn } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import DailyCalendar from '../components/Calender';

const Dashboard = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US");


  return (
    <main className="bg-[#3F5B8B] h-screen flex flex-col p-4 sm:p-10">
  
    <div className="w-full bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
        
        <div className="flex items-center gap-4">
        <MdAccountCircle size={80} className="text-[#3F5B8B]" />
        <div>
            <h1 className="text-2xl font-semibold text-[#3F5B8B]">Anna Heily</h1>
            <h3 className="text-sm text-gray-500">Grade 6</h3>
        </div>
        </div>

        
        <div className="flex gap-10">
        <div className="text-center">
            <h1 className="text-lg font-semibold text-gray-600">Average Score</h1>
            <p className="text-xl font-bold text-[#3F5B8B]">85%</p>
        </div> 
        <div className=" justify-center items-center ">
        <ModuleCompletenessPieChart completeness={90}  />
        </div>
        </div>
    </div>

    
    <div className="grid w-full h-full grid-cols-1 bg-[#E9EDF2] box-anim md:grid-cols-3 mt-4 rounded-lg p-4 gap-6">
  {/* Enrolled Modules  */}
  <div className="w-full p-6 flex flex-col items-start">
    <div className="rounded-lg shadow-2xl p-6 w-full">
      <h1 className="text-2xl font-bold text-[#3F5B8B] mb-4 border-b-2 border-gray-300 pb-2">
        Enrolled Modules
      </h1>
      <div className="mt-4 space-y-4">
        <div className="flex items-center justify-between bg-[#96A4C5] rounded-lg hover:scale-105 transform transition-all duration-300 shadow-md cursor-pointer pr-4">
          <div className="rounded-lg p-2 pl-4 pr-4 font-medium text-lg">
            Cloud computing
          </div>
          <CiCircleChevRight size={20} />
        </div>
        <div className="flex items-center justify-between bg-[#D0797F] rounded-lg hover:scale-105 transform transition-all duration-300 shadow-md cursor-pointer pr-4">
          <div className="rounded-lg p-2 pl-4 pr-4 font-medium text-lg">
            Data analytics
          </div>
          <CiCircleChevRight size={20} />
        </div>
        <div className="flex items-center justify-between bg-[#6C5E82] rounded-lg hover:scale-105 transform transition-all duration-300 shadow-md cursor-pointer pr-4">
          <div className="rounded-lg p-2 pl-4 pr-4 font-medium text-lg">
            UI/UX
          </div>
          <CiCircleChevRight size={20} />
        </div>
      </div>
    </div>

    <div className="mt-6 w-full text-center">
      <a
        href="/enroll-modules"
        className="text-[#3F5B8B] font-bold text-lg underline hover:text-indigo-600 transition-all duration-300"
      >
        Enroll to New Modules
      </a>
    </div>
  </div>

  {/* Today Classes */}
  <div className="w-full p-6 flex flex-col items-start">
    <h1 className="text-sm text-gray-500 mb-2 text-center">Date: {formattedDate}</h1>
    <div className="rounded-lg shadow-2xl p-6 w-full">
      <h1 className="text-2xl font-bold text-[#3F5B8B] mb-3 text-center">
        Today Classes
      </h1>
      <div className="border-b-2 border-gray-300 pb-4 mb-4 hover:bg-[#96A4C5] hover:text-white rounded-lg transition-all duration-300 cursor-pointer p-4">
        <h2 className="text-lg font-semibold">Cloud Computing</h2>
        <p className="text-sm mt-2">
          2.00 p.m.
          <br />
          <span className="text-gray-600">2-hour session</span>
        </p>
        <h3 className="mt-3 text-indigo-600 font-medium hover:underline">
          Click to join
        </h3>
      </div>
      <div className="border-b-2 border-gray-300 pb-4 hover:bg-[#96A4C5] hover:text-white rounded-lg transition-all duration-300 cursor-pointer p-4">
        <h2 className="text-lg font-semibold">Data Analytics</h2>
        <p className="text-sm mt-2">
          10.00 a.m.
          <br />
          <span className="text-gray-600">3-hour session</span>
        </p>
        <h3 className="mt-3 text-indigo-600 font-medium hover:underline">
          Click to join
        </h3>
      </div>
    </div>
  </div>

  {/* Upcoming Submissions  */}
  <div className="w-full p-6 flex flex-col items-start">
    <div className="rounded-lg shadow-2xl p-6 w-full">
      <h1 className="text-2xl font-bold text-[#3F5B8B] mb-4 border-b-2 border-gray-300 pb-2">
        Upcoming Submissions
      </h1>
      <div className="mt-4 space-y-4">
        <div className="border-b-2 border-gray-300 pb-4 hover:bg-[#ae97e5] hover:text-white rounded-lg transition-all duration-300 cursor-pointer p-4">
          <h2 className="text-lg font-semibold">Cloud Computing</h2>
          <h3 className="text-lg font-semibold">Report SUbmission</h3>
          <p className="text-sm mt-2">
            Due: 10th Dec, 2024
            <br />
            <span className="text-gray-600 hover:underline">Submit on portal</span>
          </p>
          <h3 className="mt-3 text-indigo-600 font-medium hover:underline">
            View details
          </h3>
        </div>
        <div className="border-b-2 border-gray-300 pb-4 hover:bg-[#ae97e5] hover:text-white rounded-lg transition-all duration-300 cursor-pointer p-4">
          <h2 className="text-lg font-semibold">UI/UX</h2>
          <h3 className="text-lg font-semibold">Project SUbmission</h3>
          <p className="text-sm mt-2">
            Due: 15th Dec, 2024
            <br />
            <span className="text-gray-600 hover:underline">Submit on portal</span>
          </p>
          <h3 className="mt-3 text-indigo-600 font-medium hover:underline">
            View details
          </h3>
        </div>
      </div>
    </div>
  </div>
</div>
<DailyCalendar/>



</main>


  )
}

export default Dashboard;