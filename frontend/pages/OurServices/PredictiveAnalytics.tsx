import React from 'react';

const PredictiveAnalytics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center" style={{ paddingTop: '70px', backgroundColor: '#050231' }}>
      <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-lg" style={{ backgroundColor: '#050231' }}>
        <h1 className="text-3xl font-bold text-center text-pink-500 mb-4">Predictive Analytics</h1>
        <p className="text-white mb-6 text-center">
          Our predictive analytics service utilizes advanced algorithms to analyze historical data,
          identify patterns, and forecast future outcomes. This helps businesses make informed decisions
          and stay ahead of potential challenges.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Key Features</h2>
        <ul className="list-disc list-inside mb-6">
          <li className="mb-2 text-white">🔍 In-depth Data Analysis</li>
          <li className="mb-2 text-white">📈 Forecasting Trends and Outcomes</li>
          <li className="mb-2 text-white">⚙️ Customizable Analytics Dashboards</li>
          <li className="mb-2 text-white">📊 Visualization Tools for Easy Interpretation</li>
          <li className="mb-2 text-white">🛠️ Automated Reporting</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-2">How It Works</h2>
        <p className="text-white mb-4">
          Our system collects data from various sources, processes it using machine learning models,
          and delivers actionable insights through user-friendly dashboards.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Get Started</h2>
        <p className="text-white mb-4">
          To learn more about how our predictive and smart analytics service can benefit your organization,
          please contact us for a consultation.
        </p>

        <div className="mt-6 text-center">
          <a
            href="/Contact"
            className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full transition duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;
