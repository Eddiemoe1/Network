// pages/AnomalyDetection.tsx

import React from 'react';

const AnomalyDetection: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100" style={{ paddingTop: '70px', backgroundColor: '#050231' }}>
      <div className="max-w-2xl w-full p-6 bg-white rounded-lg shadow-md" style={{backgroundColor:'#050231'}}>
        <h1 className="text-3xl font-bold text-center text-pink-500 mb-4">
          Anomaly Detection
        </h1>
        <p className="text-white mb-6">
          Anomaly detection is a critical component of our AI self-healing network. It helps identify unusual patterns and behaviors in real-time, ensuring that potential issues are addressed before they escalate.
        </p>
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
         <b> How It Works</b>
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li className="text-white mb-2">
            Utilizes machine learning algorithms to analyze data.
          </li>
          <li className="text-white mb-2">
            Monitors network traffic and performance metrics continuously.
          </li>
          <li className="text-white mb-2">
            Flags anomalies for immediate attention and remediation.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          Benefits
        </h2>
        <p className="text-white mb-4">
          By implementing anomaly detection, we can:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li className="text-white mb-2">Reduce downtime significantly.</li>
          <li className="text-white mb-2">Enhance overall system reliability.</li>
          <li className="text-white mb-2">Improve user experience by preemptively resolving issues.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          Get Started
        </h2>
        <p className="text-white">
          For more information on how to implement anomaly detection in your systems, contact us or check out our documentation.
        </p>
      </div>
    </div>
  );
};

export default AnomalyDetection;
