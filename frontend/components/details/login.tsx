import Link from 'next/link';
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative" style={{backgroundColor:'#050231'}}>
      <div className="bg-white p-8 rounded-3xl shadow-lg max-w-sm w-full mt-8" style={{ minHeight: '620px' }}>
      <div className="flex justify-center mb-4">
        <img
          src="/images/logos/logo.PNG"
          alt="Logo"
          className="h-12 w-12 rounded-full"
          style={{ position: 'relative', zIndex: 1, marginTop: '8px' }}
        />
      <i>  <h4 className="pl-2" style={{ paddingTop: '20px' }}>AI Self Healing Network</h4> </i>
      </div>
        <hr className="border-t-1 border-black mb-8" />
        <form>
          <div className="mb-4">
            <label className="block text-gray-400 text-xs font-bold mb-2" htmlFor="email">
              EMAIL
            </label>
            <input
              className="shadow appearance-none border border-black rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email address"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 text-xs font-bold mb-2 mt-5" htmlFor="password">
              PASSWORD
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border border-black rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 py-2 text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 00-6 0"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.478 5 12 5c4.522 0 8.268 2.943 9.542 7-1.274 4.057-5.02 7-9.542 7-4.522 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 00-6 0"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.478 5 12 5c4.522 0 8.268 2.943 9.542 7-1.274 4.057-5.02 7-9.542 7-4.522 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                )}
              </button>
            </div>
          </div>
          
          <div className="mb-6 flex justify-between items-center">
            <label className="inline-flex items-center text-sm text-gray-700">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Remember Me</span>
            </label>
          </div>
          <div>
            <a href="#" className="text-sm text-blue-500 hover:text-blue-800 font-bold flex items-end justify-end mb-6">
              Forget password?
            </a>
          </div>
          <div className="flex items-center justify-center mb-4">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-800 text-white font-bold shadow-lg rounded-bl-full rounded-tr-full"
            >
              Login
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-pink-500 hover:to-blue-700 text-white font-bold shadow-lg rounded-bl-full rounded-tr-full transition-colors duration-300"
            >
              Signup
            </button>
          </div>
           {/* HOME Button */}
           <div className="mt-6 flex justify-end bottom-10">
  <Link href="/">
    <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold py-2 px-10 rounded-bl-2xl rounded-tr-2xl hover:bg-blue-800 transition-colors duration-300">
      Home
    </button>
  </Link>
</div>

        </form>
      </div>
     
     
    </div>
  );
};

export default Login;
