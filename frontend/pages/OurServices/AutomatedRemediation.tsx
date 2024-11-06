import React from 'react';

const AutomatedRemediation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center" style={{ paddingTop: '70px', backgroundColor: '#050231' }}>
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full" style={{backgroundColor:'#050231'}}>
        <h1 className="text-3xl font-bold text-center text-pink-500 mb-6">
          Automated Remediation
        </h1>
        <p className="text-white mb-4">
          Automated remediation refers to the processes and technologies that enable systems to automatically resolve issues or improve performance without human intervention. This capability is crucial for maintaining system reliability and efficiency in modern IT environments.
        </p>
        <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-4">
          Key Features:
        </h2>
        <ul className="list-disc list-inside mb-4 text-white">
          <li>Real-time issue detection and resolution</li>
          <li>Integration with monitoring tools</li>
          <li>Customizable remediation workflows</li>
          <li>Analytics and reporting on remediation actions</li>
          <li>Improved operational efficiency and uptime</li>
        </ul>
        <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-4">
          Benefits:
        </h2>
        <p className="text-white mb-4">
          Implementing automated remediation can significantly reduce the time and resources required to manage and maintain systems, enabling IT teams to focus on strategic initiatives rather than routine maintenance tasks.
        </p>
        <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-4">
          Get Started:
        </h2>
        <p className="text-white mb-4">
          For more information on how to implement automated remediation in your environment, please contact our support team or visit our documentation.
        </p>
        <div className="flex justify-center mt-6">
          <a
            href="/Contact"
            className="bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold py-2 px-4 rounded-lg hover:from-pink-600 hover:to-blue-600 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AutomatedRemediation;
