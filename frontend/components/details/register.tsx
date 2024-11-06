import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

 const handleRegister = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
  //  await createUserWithEmailAndPassword(auth, email, password);
    router.push('/dashboard'); 
  } catch (err) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError('An unexpected error occurred');
    }
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center" style={{backgroundColor:'#050231'}}>
      <div className="flex flex-col items-center">
        <div className="relative bg-white p-8 rounded-3xl shadow-lg max-w-sm w-full mt-8 border-2 border-gray-700" style={{ minHeight: '620px' }}>
          <div className="absolute top-[-1.5rem] right-[-0.5rem] text-right">
            <p className="text-sm text-white">
              Already have an account?{' '}
              <b>
                <a href="/Login" className="text-blue-500 hover:text-blue-800">
                  Login
                </a>
              </b>
            </p>
          </div>

          <div className="flex justify-center mb-4">
        <img
          src="/images/logos/logo.PNG"
          alt="Logo"
          className="h-12 w-12 rounded-full"
          style={{ position: 'relative', zIndex: 1, marginTop: '8px' }}
        />
      <i>  <h4 className="pl-2" style={{ paddingTop: '20px' }}>AI Self Healing Network</h4> </i>
      </div>
          <hr className="border-t border-black mb-8" />
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-gray-400 text-xs font-bold mb-2" htmlFor="email">
                EMAIL
              </label>
              <input
                className="shadow appearance-none border-gray-900 border-2 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-400 text-xs font-bold mb-2" htmlFor="password">
                PASSWORD
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border-black border-2 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                >
                  {passwordVisible ? (
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
            <div className="mb-4">
              <label className="inline-flex items-center text-sm text-gray-700">
                <input type="checkbox" className="form-checkbox text-blue-500" required />
                <span className="ml-2 text-xs text-gray-700">
                  By signing up I agree that I’m 18 years of age or older, to the User Agreements, Privacy Policy, Cookie Policy, E-Sign Consent
                </span>
              </label>
            </div>
            {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
            <div className="flex items-center justify-center mb-4">
              <button
                type="submit"
                className="w-full mt-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 hover:to-blue-700 text-white font-bold shadow-lg rounded-bl-full rounded-tr-full transition-colors duration-300"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
