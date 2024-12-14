'use client'
// import { FcGoogle } from 'react-icons/fc';
// import { FaApple } from 'react-icons/fa';
import React from 'react'
import Image from 'next/image'
import Navbar from '../components/NavBar';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  return (
    
    <main >
      <Navbar/>
      <div className="bg-[#26313c] h-full flex items-center justify-center p-4 sm:p-10">
      <div className="grid w-full h-full grid-cols-1 bg-white box-anim md:grid-cols-2">
        
        <div className="bg-[#16202a] text-white flex items-center justify-center flex-col p-6 sm:p-10">
          <div className="my-4 w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto">
            <Image 
              className="object-contain mx-auto mb-4" 
              src="/logo.png" 
              alt="SchoolSync Logo" 
              width={130} 
              height={100} 
            />
            <h1 className="text-3xl font-semibold text-center">Welcome to student portal</h1>
            <p className="mt-1 text-xs text-slate-400 text-center">login to access your account</p>

            {/* Login form */}
            <form className="w-full mt-6">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-slate-200 text-left"
              >
                Username 
              </label>
              <input
                className="mt-2 mb-4 w-full bg-transparent border border-gray-300 rounded-full px-4 py-2"
                type="text"
                id="username"
                placeholder="Username"
              />
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-200 text-left"
              >
                Password
              </label>
              <input
                className="mt-2 w-full bg-transparent border border-gray-300 rounded-full px-4 py-2"
                type="password"
                id="password"
                placeholder="Password"
              />
              <div className="w-full flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label className="text-sm font-medium text-slate-200">Remember me</label>
                </div>

                <label className="text-sm font-bold ml-auto text-blue-600">
                  Forgot password
                </label>
              </div>

              <button
                type="submit"
                className="w-full mt-6 mb-4 bg-[#2761c5] rounded-full py-2 text-white hover:bg-indigo-700"
              ><Link href="/dashboard">
                Login</Link>
              </button>
              <label className="text-sm font-medium text-slate-200">
                Do not have an account yet? <span className='text-blue-600 font-bold'><Link href="/register"> Register here.</Link></span>
              </label>
            </form>
          </div>
        </div>

        
        <div className="relative hidden md:block bg-[#3f5b8b]">
          <Image 
            className="object-cover" 
            fill={true} 
            src="/sideimg.png" 
            alt="bg-image" 
          />
        </div>
      </div>
      </div>
    </main>
  )
}

export default LoginPage;
