import React from 'react';

const Card = ({
  title,
  content,
  icon,
  className,
}: {
  title: string;
  content: string;
  icon?: React.ReactNode;  // Optional icon source
  className: string;
}) => (
  <div className={`relative p-6 rounded-lg shadow-lg w-full max-w-xs mx-auto bg-transparent ${className}`} style={{ minHeight: '300px' }}>
    {/* Icon Container at the top */}
    {icon && (
      <div className="flex justify-center mb-4">
        <div className="bg-blue-500 rounded-full p-2">
          {icon}
        </div>
      </div>
    )}
    <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#00B4D8' }}>{title}</h3>
    <p className="text-white text-center">{content}</p>
  </div>
);

const AiSelfHealingNetworkPage = () => {
  return (
    <div style={{ backgroundColor: '#050231' }}>
      <section>
        <div>
          <h2 className="text-5xl font-bold mb-12 mt-12 flex justify-center" style={{ color: '#00B4D8', fontSize: '2rem',paddingTop:'20px', paddingBottom:'20px' }}>
            What is AI Self-Healing Network?
          </h2>
        </div>
      </section>
      <section
        className="py-8 px-4"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '4rem 2rem',
          backgroundColor: '#130F40',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', // Added shadow for depth
        }}
      >
        <div className="text-start mb-8">
          <h2 className="text-5xl font-bold mb-4" style={{ color: '#7CFC00', fontSize: '2rem' }}>
            What is AI Self-Healing Network?
          </h2>
          <h5 className="text-lg font-medium mb-6">
            An AI self-healing network leverages advanced machine learning to automatically detect and resolve issues within the network infrastructure, reducing downtime and enhancing efficiency.
          </h5>
        </div>

        <div className="flex flex-wrap justify-start text-start gap-8 text-white">
          <Card
            title="Automated Anomaly Detection"
            content="The AI self-healing network continuously monitors data traffic patterns to identify unusual behaviors, using predictive analytics to prevent potential failures and maintain network stability."
            className="bg-[#130F40] text-white"
            icon=""
          />
          <Card
            title="Failure Prediction & Prevention"
            content="Utilizing AI algorithms, the system predicts potential network failures based on historical data, taking preemptive actions to reroute traffic or reconfigure network settings for uninterrupted service."
            className="bg-[#130F40] text-white"
            icon=""
          />
          <Card
            title="Intelligent Data Processing"
            content="With robust data collection and real-time analysis, the network self-healing system processes large volumes of information, providing actionable insights and optimizing network performance."
            className="bg-[#130F40] text-white"
            icon=""
          />
        </div>
      </section>
    </div>
  );
}

export default AiSelfHealingNetworkPage;
