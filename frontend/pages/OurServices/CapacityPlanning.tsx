import React from 'react';

const CapacityPlanning: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10" style={{ paddingTop: '70px', backgroundColor: '#050231' }}>
      <div className="container mx-auto px-4" style={{ backgroundColor: '#050231' }}>
        <h1 className="text-3xl font-bold text-center text-pink-500 mb-8">Capacity Planning</h1>
        <p className="text-lg text-white mb-4">
          Capacity planning is the process of determining the production capacity needed by an organization to meet changing demands for its products. 
        </p>
        <p className="text-lg text-white mb-4">
          It involves understanding current resource levels and evaluating future capacity requirements to ensure that operations run smoothly.
        </p>
        
        <div className="bg-white shadow-md rounded-lg p-6 mb-6" style={{backgroundColor:'#050248'}}>
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Key Objectives</h2>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>Ensure optimal resource utilization.</li>
            <li>Minimize production bottlenecks.</li>
            <li>Forecast future demands accurately.</li>
            <li>Balance cost with capacity.</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6" style={{backgroundColor:'#050248'}}>
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Strategies for Effective Capacity Planning</h2>
          <ol className="list-decimal list-inside space-y-2 text-white">
            <li>Conduct regular reviews of current capacity.</li>
            <li>Utilize historical data to predict future trends.</li>
            <li>Implement flexible manufacturing systems.</li>
            <li>Collaborate across departments for better insights.</li>
          </ol>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6" style={{backgroundColor:'#050248'}}>
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Tools and Techniques</h2>
          <p className="text-lg text-white mb-4">
            Various tools and techniques can be utilized for capacity planning, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>Forecasting Software</li>
            <li>Demand Planning Tools</li>
            <li>Resource Management Systems</li>
            <li>Simulation Models</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CapacityPlanning;
