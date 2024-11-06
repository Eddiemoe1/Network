import React from 'react';

const UseCases: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-gray-900 text-white" style={{backgroundColor:'#050231'}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Use Case 1 */}
          <div className="bg-gray-700 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-600" style={{backgroundColor:'#050278'}}>
            <h3 className="text-2xl font-bold mb-4">E-Commerce</h3>
            <p>Maintain uptime during peak traffic and transactions.</p>
          </div>
          {/* Use Case 2 */}
          <div className="bg-gray-700 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-600" style={{backgroundColor:'#050278'}}>
            <h3 className="text-2xl font-bold mb-4">Telecommunications</h3>
            <p>Enhance network reliability for seamless communication.</p>
          </div>
          {/* Use Case 3 */}
          <div className="bg-gray-700 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-600" style={{backgroundColor:'#050278'}}>
            <h3 className="text-2xl font-bold mb-4">Cloud Services</h3>
            <p>Ensure data integrity and availability across platforms.</p>
          </div>
          {/* Use Case 4 */}
          <div className="bg-gray-700 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-600" style={{backgroundColor:'#050278'}}>
            <h3 className="text-2xl font-bold mb-4">Healthcare</h3>
            <p>Guarantee continuous access to critical patient data.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
