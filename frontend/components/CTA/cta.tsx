import React from 'react';
import { useRouter } from 'next/router';

const CallToAction: React.FC = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/Register');
  };

  return (
    <section className="py-12 bg-gray-800 text-white text-center" style={{backgroundColor:'#050245'}}>
      <h2 className="text-3xl font-bold mb-4 text-blue-600">Ready to Transform Your Network?</h2>
      <p className="mb-4">Experience the benefits of our AI self-healing network today!</p>
      <button 
        className="bg-blue-600 text-white py-2 px-4 rounded-lg"
        onClick={handleGetStarted}
      >
        Get Started
      </button>
      <button className="bg-transparent border border-blue-600 text-blue-600 py-2 px-4 rounded-lg ml-4">
        Request a Demo
      </button>
    </section>
  );
};

export default CallToAction;
