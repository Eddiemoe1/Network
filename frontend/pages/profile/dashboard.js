import React from 'react';
import { Chart } from 'chart.js';

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <header className="flex justify-between items-center py-6 border-b border-gray-700 px-8">
        <h1 className="text-3xl font-bold text-blue-500">Network Dashboard</h1>
        <div className="flex space-x-4">
          <button className="bg-blue-600 py-2 px-4 rounded-lg">Alerts</button>
          <button className="bg-gray-800 border border-gray-600 py-2 px-4 rounded-lg">Settings</button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="flex space-x-4 px-8 mt-4 border-b border-gray-700 pb-4">
        <button className="text-blue-400">Network Collection</button>
        <button className="text-gray-500">Packet Loss</button>
        <button className="text-gray-500">System Caution</button>
        <button className="text-gray-500">Collection</button>
        <button className="text-gray-500">Alerts</button>
      </nav>

      <main className="mt-8 px-8">
        {/* Top Row Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h2 className="text-lg font-semibold text-blue-400">Throughput</h2>
            <p className="text-3xl font-bold">120 Mbps</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h2 className="text-lg font-semibold text-blue-400">Latency</h2>
            <p className="text-3xl font-bold">45 ms</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h2 className="text-lg font-semibold text-blue-400">Packet Loss</h2>
            <p className="text-3xl font-bold">0.3%</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h2 className="text-lg font-semibold text-blue-400">CPU Usage</h2>
            <p className="text-3xl font-bold">75%</p>
          </div>
        </div>

        {/* Circular Gauge */}
        <div className="mt-8 grid grid-cols-4 gap-6">
  {/* Card 1 */}
  <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center">
    <h2 className="text-lg font-semibold text-blue-400">System Status 1</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
      {/* First Progress Gauge */}
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 flex items-center justify-center"> {/* Further reduced size */}
          <svg className="absolute inset-0" width="96" height="96"> {/* Further reduced size */}
            <circle cx="48" cy="48" r="42" stroke="#4B5563" strokeWidth="6" fill="none" /> {/* Adjusted radius and strokeWidth */}
            <circle
              cx="48"
              cy="48"
              r="42"
              stroke="#3B82F6"
              strokeWidth="6"
              fill="none"
              strokeDasharray="264" // Circumference of the circle (2 * Math.PI * 42)
              strokeDashoffset={264 - (264 * 65) / 100} // Adjust based on the percentage (65%)
              style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
            />
          </svg>
          <p className="text-2xl font-bold text-gray-300">65%</p> {/* Adjusted font size */}
        </div>
      </div>

      {/* Second Progress Gauge */}
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 flex items-center justify-center"> {/* Further reduced size */}
          <svg className="absolute inset-0" width="96" height="96"> {/* Further reduced size */}
            <circle cx="48" cy="48" r="42" stroke="#4B5563" strokeWidth="6" fill="none" />
            <circle
              cx="48"
              cy="48"
              r="42"
              stroke="#3B82F6"
              strokeWidth="6"
              fill="none"
              strokeDasharray="264"
              strokeDashoffset={264 - (264 * 80) / 100} // Adjust based on the percentage (80%)
              style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
            />
          </svg>
          <p className="text-2xl font-bold text-gray-300">80%</p> {/* Adjusted font size */}
        </div>
      </div>

      {/* Third Progress Gauge */}
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 flex items-center justify-center"> {/* Further reduced size */}
          <svg className="absolute inset-0" width="96" height="96"> {/* Further reduced size */}
            <circle cx="48" cy="48" r="42" stroke="#4B5563" strokeWidth="6" fill="none" />
            <circle
              cx="48"
              cy="48"
              r="42"
              stroke="#3B82F6"
              strokeWidth="6"
              fill="none"
              strokeDasharray="264"
              strokeDashoffset={264 - (264 * 90) / 100} // Adjust based on the percentage (90%)
              style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
            />
          </svg>
          <p className="text-2xl font-bold text-gray-300">90%</p> {/* Adjusted font size */}
        </div>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center">
    <h2 className="text-lg font-semibold text-blue-400">System Status 2</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
      {/* First Progress Gauge */}
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 flex items-center justify-center"> {/* Further reduced size */}
          <svg className="absolute inset-0" width="96" height="96"> {/* Further reduced size */}
            <circle cx="48" cy="48" r="42" stroke="#4B5563" strokeWidth="6" fill="none" />
            <circle
              cx="48"
              cy="48"
              r="42"
              stroke="#3B82F6"
              strokeWidth="6"
              fill="none"
              strokeDasharray="264"
              strokeDashoffset={264 - (264 * 70) / 100} // Adjust based on the percentage (70%)
              style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
            />
          </svg>
          <p className="text-2xl font-bold text-gray-300">70%</p> {/* Adjusted font size */}
        </div>
      </div>

      {/* Second Progress Gauge */}
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 flex items-center justify-center"> {/* Further reduced size */}
          <svg className="absolute inset-0" width="96" height="96"> {/* Further reduced size */}
            <circle cx="48" cy="48" r="42" stroke="#4B5563" strokeWidth="6" fill="none" />
            <circle
              cx="48"
              cy="48"
              r="42"
              stroke="#3B82F6"
              strokeWidth="6"
              fill="none"
              strokeDasharray="264"
              strokeDashoffset={264 - (264 * 75) / 100} // Adjust based on the percentage (75%)
              style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
            />
          </svg>
          <p className="text-2xl font-bold text-gray-300">75%</p> {/* Adjusted font size */}
        </div>
      </div>

      {/* Third Progress Gauge */}
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 flex items-center justify-center"> {/* Further reduced size */}
          <svg className="absolute inset-0" width="96" height="96"> {/* Further reduced size */}
            <circle cx="48" cy="48" r="42" stroke="#4B5563" strokeWidth="6" fill="none" />
            <circle
              cx="48"
              cy="48"
              r="42"
              stroke="#3B82F6"
              strokeWidth="6"
              fill="none"
              strokeDasharray="264"
              strokeDashoffset={264 - (264 * 80) / 100} // Adjust based on the percentage (80%)
              style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
            />
          </svg>
          <p className="text-2xl font-bold text-gray-300">80%</p> {/* Adjusted font size */}
        </div>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center">
    <h2 className="text-lg font-semibold text-blue-400">System Status 3</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
      {/* First Progress Gauge */}
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 flex items-center justify-center"> {/* Further reduced size */}
          <svg className="absolute inset-0" width="96" height="96"> {/* Further reduced size */}
            <circle cx="48" cy="48" r="42" stroke="#4B5563" strokeWidth="6" fill="none" />
            <circle
              cx="48"
              cy="48"
              r="42"
              stroke="#3B82F6"
              strokeWidth="6"
              fill="none"
              strokeDasharray="264"
              strokeDashoffset={264 - (264 * 85) / 100} // Adjust based on the percentage (85%)
              style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
            />
          </svg>
          <p className="text-2xl font-bold text-gray-300">85%</p> {/* Adjusted font size */}
        </div>
      </div>

      {/* Second Progress Gauge */}
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 flex items-center justify-center"> {/* Further reduced size */}
          <svg className="absolute inset-0" width="96" height="96"> {/* Further reduced size */}
            <circle cx="48" cy="48" r="42" stroke="#4B5563" strokeWidth="6" fill="none" />
            <circle
              cx="48"
              cy="48"
              r="42"
              stroke="#3B82F6"
              strokeWidth="6"
              fill="none"
              strokeDasharray="264"
              strokeDashoffset={264 - (264 * 70) / 100} // Adjust based on the percentage (70%)
              style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
            />
          </svg>
          <p className="text-2xl font-bold text-gray-300">70%</p> {/* Adjusted font size */}
        </div>
      </div>

      {/* Third Progress Gauge */}
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 flex items-center justify-center"> {/* Further reduced size */}
          <svg className="absolute inset-0" width="96" height="96"> {/* Further reduced size */}
            <circle cx="48" cy="48" r="42" stroke="#4B5563" strokeWidth="6" fill="none" />
            <circle
              cx="48"
              cy="48"
              r="42"
              stroke="#3B82F6"
              strokeWidth="6"
              fill="none"
              strokeDasharray="264"
              strokeDashoffset={264 - (264 * 60) / 100} // Adjust based on the percentage (60%)
              style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
            />
          </svg>
          <p className="text-2xl font-bold text-gray-300">60%</p> {/* Adjusted font size */}
        </div>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center">
    <h2 className="text-lg font-semibold text-blue-400">System Status 4</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
      {/* First Progress Gauge */}
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 flex items-center justify-center"> {/* Further reduced size */}
          <svg className="absolute inset-0" width="96" height="96"> {/* Further reduced size */}
            <circle cx="48" cy="48" r="42" stroke="#4B5563" strokeWidth="6" fill="none" />
            <circle
              cx="48"
              cy="48"
              r="42"
              stroke="#3B82F6"
              strokeWidth="6"
              fill="none"
              strokeDasharray="264"
              strokeDashoffset={264 - (264 * 75) / 100} // Adjust based on the percentage (75%)
              style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
            />
          </svg>
          <p className="text-2xl font-bold text-gray-300">75%</p> {/* Adjusted font size */}
        </div>
      </div>

      {/* Second Progress Gauge */}
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 flex items-center justify-center"> {/* Further reduced size */}
          <svg className="absolute inset-0" width="96" height="96"> {/* Further reduced size */}
            <circle cx="48" cy="48" r="42" stroke="#4B5563" strokeWidth="6" fill="none" />
            <circle
              cx="48"
              cy="48"
              r="42"
              stroke="#3B82F6"
              strokeWidth="6"
              fill="none"
              strokeDasharray="264"
              strokeDashoffset={264 - (264 * 80) / 100} // Adjust based on the percentage (80%)
              style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
            />
          </svg>
          <p className="text-2xl font-bold text-gray-300">80%</p> {/* Adjusted font size */}
        </div>
      </div>

      {/* Third Progress Gauge */}
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 flex items-center justify-center"> {/* Further reduced size */}
          <svg className="absolute inset-0" width="96" height="96"> {/* Further reduced size */}
            <circle cx="48" cy="48" r="42" stroke="#4B5563" strokeWidth="6" fill="none" />
            <circle
              cx="48"
              cy="48"
              r="42"
              stroke="#3B82F6"
              strokeWidth="6"
              fill="none"
              strokeDasharray="264"
              strokeDashoffset={264 - (264 * 90) / 100} // Adjust based on the percentage (90%)
              style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
            />
          </svg>
          <p className="text-2xl font-bold text-gray-300">90%</p> {/* Adjusted font size */}
        </div>
      </div>
    </div>
  </div>
</div>



        {/* Graph Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
  <div className="bg-gray-800 p-6 rounded-lg">
    <h2 className="text-lg font-semibold text-blue-400">System Collection</h2>
    <div className="h-48 bg-gray-700 mt-4 rounded-lg">
      {/* Placeholder for System Collection Graph */}
    </div>
  </div>
  <div className="bg-gray-800 p-6 rounded-lg">
    <h2 className="text-lg font-semibold text-blue-400">Latency Over Time</h2>
    <div className="h-48 bg-gray-700 mt-4 rounded-lg">
      {/* Placeholder for Latency Graph */}
    </div>
  </div>
  <div className="bg-gray-800 p-6 rounded-lg">
    <h2 className="text-lg font-semibold text-blue-400">Packet Loss Over Time</h2>
    <div className="h-48 bg-gray-700 mt-4 rounded-lg">
      {/* Placeholder for Packet Loss Graph */}
    </div>
  </div>
  <div className="bg-gray-800 p-6 rounded-lg">
    <h2 className="text-lg font-semibold text-blue-400">Recent Alerts</h2>
    <ul className="mt-4 space-y-3">
      <li className="p-4 bg-red-600 rounded-lg">
        <p>High latency detected on Router 2</p>
        <p className="text-sm text-gray-300">Occurred: 5 mins ago</p>
      </li>
      <li className="p-4 bg-yellow-600 rounded-lg">
        <p>Increased packet loss detected on Node 7</p>
        <p className="text-sm text-gray-300">Occurred: 10 mins ago</p>
      </li>
    </ul>
  </div>
</div>


        {/* System Status Indicators */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <p className="text-blue-400">Memory Usage</p>
            <p className="text-2xl font-bold">68%</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <p className="text-blue-400">Disk Usage</p>
            <p className="text-2xl font-bold">47%</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <p className="text-blue-400">Temperature</p>
            <p className="text-2xl font-bold">55°C</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <p className="text-blue-400">CPU Cores</p>
            <p className="text-2xl font-bold">8</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <p className="text-blue-400">Network Status</p>
            <p className="text-2xl font-bold">Active</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <p className="text-blue-400">Uptime</p>
            <p className="text-2xl font-bold">99.9%</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
