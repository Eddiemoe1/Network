import React from 'react';

const PerformanceMonitoring: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6" style={{ paddingTop: '70px', backgroundColor: '#050231' }}>
      <h1 className="text-4xl font-bold text-pink-500 mb-6">Performance Monitoring</h1>
      <p className="text-lg text-white mb-4">
        Monitor the performance of your network with real-time analytics and insights.
      </p>
      
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl" style={{ backgroundColor: '#050231' }}>
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Current Metrics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
          <div className="bg-blue-50 p-4 rounded-lg shadow" style={{backgroundColor:'#050278'}}>
            <h3 className="text-xl font-semibold text-blue-600">CPU Usage</h3>
            <p className="text-gray-500">75%</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow" style={{backgroundColor:'#050278'}}>
            <h3 className="text-xl font-semibold text-green-600">Memory Usage</h3>
            <p className="text-gray-500">60%</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg shadow" style={{backgroundColor:'#050278'}}>
            <h3 className="text-xl font-semibold text-yellow-600">Network Latency</h3>
            <p className="text-gray-500">120ms</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg shadow" style={{backgroundColor:'#050278'}}>
            <h3 className="text-xl font-semibold text-red-600">Disk I/O</h3>
            <p className="text-gray-500">80%</p>
          </div>
        </div>

        <div className="mt-6" >
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Trends Over Time</h2>
          <div className="h-64 bg-gray-200 rounded-lg" style={{backgroundColor:'#050278'}}>
            {/* Placeholder for a chart or graph component */}
            <p className="text-center text-gray-500">Chart or Graph goes here</p>
          </div>
        </div>

        <div className="mt-6" >
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Alerts</h2>
          <ul className="bg-white rounded-lg shadow p-4" style={{backgroundColor:'#050278'}}>
            <li className="text-red-600 mb-2">High CPU usage detected!</li>
            <li className="text-orange-600 mb-2">Memory usage above 75%.</li>
            <li className="text-yellow-600">Network latency is increasing.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitoring;
