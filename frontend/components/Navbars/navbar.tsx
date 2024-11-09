import React, { useState } from 'react';
import Link from 'next/link';
import { HiChevronDown } from 'react-icons/hi';

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveDropdown(null);
    }, 5000);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-35 shadow-md z-50 text-black" style={{ backgroundColor: 'white' }}>
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center mb-4">
        <img
          src="/images/logos/logo.PNG"
          alt="Logo"
          className="h-12 w-12 rounded-full"
          style={{ position: 'relative', zIndex: 1, marginTop: '8px' }}
        />
      <i>  <h4 className="pl-2" style={{ paddingTop: '20px' }}>AI Self Healing Network</h4> </i>
      </div>
        <div className="hidden md:flex md:space-x-8 text-base font-bold">
          <Link href="/" className="text-black hover:text-pink-500 px-3 py-2 rounded-md ml-8">
            Home
          </Link>

          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-black hover:text-pink-500 px-3 py-2 rounded-md flex items-center">
              Services
              <HiChevronDown className="ml-1" />
            </button>
            {activeDropdown === 'services' && (
              <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48">
                <Link
                  href="/OurServices/AnomalyDetection"
                  className="block hover:text-pink-500 px-4 py-2 text-sm font-bold border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Anomaly Detection
                </Link>
                <Link
                  href="/OurServices/AutomatedRemediation"
                  className="block hover:text-pink-500 px-4 py-2 text-sm font-bold border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Automated Remediation
                </Link>
                <Link
                  href="/OurServices/PerformanceMonitoring"
                  className="block hover:text-pink-500 px-4 py-2 text-sm font-bold border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Performance Monitoring
                </Link>
                <Link
                  href="/OurServices/CapacityPlanning"
                  className="block hover:text-pink-500 px-4 py-2 text-sm font-bold border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Capacity Planning
                </Link>
                <Link
                  href="/OurServices/PredictiveAnalytics"
                  className="block hover:text-pink-500 px-4 py-2 text-sm font-bold border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Predictive Analytics
                </Link>
              </div>
            )}
          </div>

          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter('company')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-black hover:text-pink-500 px-3 py-2 rounded-md flex items-center">
              Company
              <HiChevronDown className="ml-1" />
            </button>
            {activeDropdown === 'company' && (
              <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48">
                <Link
                  href="/About"
                  className="block hover:text-pink-500 px-4 py-2 text-sm font-bold border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  About Us
                </Link>
                <Link
                  href="/Privacy"
                  className="block hover:text-pink-500 px-4 py-2 text-sm font-bold border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Privacy Policy
                </Link>
              </div>
            )}
          </div>


          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter('pages')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-black hover:text-pink-500 px-3 py-2 rounded-md flex items-center">
              Pages
              <HiChevronDown className="ml-1" />
            </button>
            {activeDropdown === 'pages' && (
              <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48">
                <Link
                  href="/Login"
                  className="block hover:text-pink-500 px-4 py-2 text-sm font-bold border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Sign In
                </Link>
                <Link
                  href="/Register"
                  className="block hover:text-pink-500 px-4 py-2 text-sm font-bold border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          <Link href="/Contact" className="text-black hover:text-pink-500 px-3 py-2 rounded-md text-base font-bold">
            Contact Us
          </Link>
          <Link href="/AppsDownload" className="text-black hover:text-pink-500 px-3 py-2 rounded-md text-base font-bold">
            Apps Download
          </Link>
        </div>
        <div className="hidden md:flex items-center">
          <Link
            href="/Login"
            className="text-black px-10 py-2 rounded-full text-lg font-bold bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-600 hover:to-blue-600"
          >
            LOGIN
          </Link>
        </div>
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setOpen(!open)}
            className="text-black hover:text-gray-300 focus:outline-none focus:text-gray-300"
          >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
       
      </div>
      {open && (
        <div className="md:hidden">
          <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-black hover:text-pink-500 px-3 py-2 rounded-md text-lg font-bold">
              Home
            </Link>
            {/* Repeated Dropdown Sections for Mobile View */}
          </div>
          <div className="hidden md:flex items-center">
          <Link
            href="/Login"
            className="text-white px-10 py-2 rounded-full text-lg font-bold bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-600 hover:to-blue-600"
          >
            LOGIN
          </Link>
        </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
