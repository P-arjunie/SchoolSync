'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/NavBar';

const Login: React.FC = () => {
  return (
    <main >
      <Navbar/>
      <div className="bg-[#26313c] h-full flex items-center justify-center p-4 sm:p-10">
      <div className="grid w-full h-full grid-cols-1 bg-white box-anim md:grid-cols-2">
        
        <div className="bg-white text-black flex items-center justify-center flex-col p-6 sm:p-10">
          <div className="my-4 w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-center">Create Your Account</h1>

            {/* Signup form */}
            <form className="w-full mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium text-black text-left"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="mt-2 mb-4 w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black"
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-black text-left"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className="mt-2 mb-4 w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black"
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <label className="block text-sm font-medium text-black text-left" htmlFor="school">
                School
              </label>
              <input
                className="mt-2 mb-4 w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black"
                type="text"
                id="school"
                placeholder="School"
              />

              <label className="block text-sm font-medium text-black text-left" htmlFor="grade">
                Grade
              </label>
              <input
                className="mt-2 mb-4 w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black"
                type="text"
                id="grade"
                placeholder="Grade"
              />

              <label className="block text-sm font-medium text-black text-left" htmlFor="email">
                Email
              </label>
              <input
                className="mt-2 mb-4 w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black"
                type="email"
                id="email"
                placeholder="Email"
              />

              <label className="block text-sm font-medium text-black text-left" htmlFor="password">
                Password
              </label>
              <input
                className="mt-2 mb-4 w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black"
                type="password"
                id="password"
                placeholder="Password"
              />

              <label className="block text-sm font-medium text-black text-left" htmlFor="rePassword">
                Re-enter Password
              </label>
              <input
                className="mt-2 mb-4 w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black"
                type="password"
                id="rePassword"
                placeholder="Re-enter Password"
              />

              <button
                type="submit"
                className="w-full mt-6 mb-4 bg-[#2761c5] rounded-lg py-2 text-white hover:bg-indigo-700"
              ><Link href="/home">
                Sign Up
              </Link>
              </button>
              <label className="text-sm font-medium text-black">
                Already have an account? <span className="text-blue-600 font-bold cursor-pointer"><Link href="/login">
                Login here.
              </Link></span>
              </label>
            </form>
          </div>
        </div>

        <div className="relative hidden md:block ">
          <Image 
            className="object-cover" 
            fill={true} 
            src="/side.png" 
            alt="bg-image" 
          />
        </div>
      </div>
      </div>
    </main>
  );
};

export default Login;
