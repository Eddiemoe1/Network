import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <div className="relative top-12 text-white mb-8 mt-8 h-[80vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover opacity-100"
        style={{ backgroundImage: 'url(/images/background/datanet.png)' }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 h-full flex items-center">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
              WELCOME TO AI SELF-HEALING NETWORK
            </h1>
            <p className="mt-4 text-lg lg:text-xl text-white text-bold">
              Ensuring seamless connectivity, efficiency, automation, and real-time issue resolution using automated monitoring, seamless optimization, and intelligent self-healing.
            </p>
            <Link
              href="/Register"
              className="mt-6 inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-600 hover:to-blue-600 text-white font-bold py-2 px-10 rounded-full text-lg"
            >
              CLICK TO REGISTER
              <span
                className="inline-flex items-center justify-center bg-white rounded-full ml-4 text-blue-600 text-3xl"
                style={{ transform: 'translateY(1px)' }}
              ></span>
            </Link>
          </div>

          <div className="relative mb-8 mt-6">
            <div className="absolute w-full top-6 left-0 flex justify-between px-4 text-sm text-gray-300">
              <div className="relative">
                <span className="absolute right-0 top-0 w-px bg-white"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
