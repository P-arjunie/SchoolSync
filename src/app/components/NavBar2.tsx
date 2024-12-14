import Link from 'next/link';
import { MdAccountCircle } from 'react-icons/md';

export default function Navbar2() {
  return (
    <nav className="bg-[#3d5a80] border-gray-200 dark:bg-gray-900 py-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          
          <span className="self-center text-4xl font-semibold text-white">SchoolSync</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <div className='my-2'>
            <h1 className="text-2xl font-semibold text-white">Anna Heily</h1>
            <h3 className="text-sm text-gray-100">Grade 6</h3>
        </div>
          <button
            type="button"
            className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <MdAccountCircle size={50} className="text-[#f9f9f9]" />
          </button>
          
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 bg-[#3d5a80] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <Link href="/home" className="block text-lg py-2 px-3 md:p-0 text-gray-200 hover:text-blue-300" aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-lg py-2 px-3 md:p-0 text-gray-200 hover:text-blue-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/modules" className="block text-lg py-2 px-3 md:p-0 text-gray-200 hover:text-blue-300">
                Modules
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-lg py-2 px-3 md:p-0 text-gray-200 hover:text-blue-300">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="block text-lg py-2 px-3 md:p-0 text-gray-200 hover:text-blue-300">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}