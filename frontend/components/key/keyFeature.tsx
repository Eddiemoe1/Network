import React from 'react';

const KeyFeatures: React.FC = () => {
  return (
    <section className="py-12 bg-gray-800 text-white " style={{backgroundColor:'#050231'}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-700 p-6 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-600" style={{backgroundColor:'#050278'}}>
            <h3 className="text-2xl font-bold mb-4">Self-Healing Capabilities</h3>
            <p>Automatically resolves issues without manual intervention.</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-gray-700 p-6 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-600" style={{backgroundColor:'#050278'}}>
            <h3 className="text-2xl font-bold mb-4">Performance Monitoring</h3>
            <p>Real-time analytics for proactive issue detection.</p>
          </div>
          {/* Feature 3 */}
          <div className="bg-gray-700 p-6 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-600" style={{backgroundColor:'#050278'}}>
            <h3 className="text-2xl font-bold mb-4">Scalability</h3>
            <p>Grows seamlessly with your business needs.</p>
          </div>
          {/* Feature 4 */}
          <div className="bg-gray-700 p-6 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-600" style={{backgroundColor:'#050278'}}>
            <h3 className="text-2xl font-bold mb-4">Security</h3>
            <p>Advanced measures to protect your data and privacy.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
