import Link from 'next/link';
import { MdAccountCircle } from 'react-icons/md';
import { useState } from 'react';

export default function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#3d5a80] border-gray-200 dark:bg-gray-900 py-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl sm:text-4xl font-semibold text-white">SchoolSync</span>
        </Link>

        {/* User Info and Account Icon */}
        <div className="flex items-center md:order-2 space-x-4">
          <div className="hidden sm:block text-white">
            <h1 className="text-lg sm:text-2xl font-semibold">Anna Heily</h1>
            <h3 className="text-xs sm:text-sm text-gray-100">Grade 6</h3>
          </div>
          <button className="focus:outline-none">
            <MdAccountCircle size={40} className="text-gray-100" />
          </button>

          {/* Burger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-200 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:flex md:items-center md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 bg-[#3d5a80] md:bg-transparent p-4 md:p-0 rounded-lg">
            <li>
              <Link
                href="/home"
                className="block text-lg py-2 px-3 text-gray-200 hover:text-blue-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block text-lg py-2 px-3 text-gray-200 hover:text-blue-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/modules"
                className="block text-lg py-2 px-3 text-gray-200 hover:text-blue-300"
              >
                Modules
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block text-lg py-2 px-3 text-gray-200 hover:text-blue-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="block text-lg py-2 px-3 text-gray-200 hover:text-blue-300"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
