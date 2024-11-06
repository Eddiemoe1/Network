import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-12 px-4 bg-gray-900 text-white" style={{ backgroundColor: '#050245' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-blue-600 text-center">How It Works</h2>
        <p className="text-lg mb-6 text-center">
          Our network continuously monitors performance, identifies issues, and
          automatically implements solutions to ensure optimal operation.
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src="/images/background/Working.PNG"
            alt="How It Works Diagram"
            className="mb-6 md:mb-0"
            style={{ maxWidth: '300px', marginLeft: '40px' }}
          />
          <ol className="list-decimal list-inside text-left max-w-lg md:ml-16">
            <li>Data Collection: Gather performance metrics in real-time.</li>
            <li>Issue Detection: Identify anomalies and potential issues.</li>
            <li>Automatic Resolution: Implement solutions without human intervention.</li>
            <li>Feedback Loop: Analyze outcomes to improve future performance.</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
