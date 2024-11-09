const AdvancedPage = () => {
  const handlePlayClick = () => {
    window.open('https://youtu.be/Cbb3ri72nCw', '_blank');
  };

  return (
    <div>
      <section className="flex justify-center items-center h-[50vh] mt-10" style={{ backgroundColor: '#050231' }}>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12 mt-12" style={{ color: '#00B4D8', paddingTop: '40px', paddingBottom: '40px' }}>
            ADVANCED TECHNOLOGY
          </h2>
        </div>
      </section>

      <section
        className="relative w-full text-white py-16 px-0"
        style={{ backgroundColor: '#130F40', minHeight: '60vh' }}
      >
        <div className="absolute top-0 left-0 mt-4 ml-4 hidden">
          <img src="/images/logos/logo-main.png" alt="Logo" className="h-12 w-auto" />
        </div>

        <div className="flex justify-between items-start space-x-8 w-full px-0">
        
          {/* Advanced Technology and Tools Text */}
          <div className="flex-1 text-left" style={{ marginTop: '30px', marginRight: '20px' }}>
            <h5 className="font-bold text-2xl mt-12" style={{ color: '#9e219e' }}>ABOUT US</h5>
            <h3 className="text-5xl font-bold mb-4">ADVANCED TECHNOLOGY AND TOOLS</h3>
            <p className="text-xl font-medium mb-12" style={{ margin: '0' }}>
              AI-self-healing networks leverage a combination of artificial intelligence, machine learning,
               and automation tools to autonomously detect, diagnose, and resolve network issues, ensuring enhanced reliability and efficiency. 
               Key technologies include predictive analytics for anticipating failures, anomaly detection for identifying irregular network behavior,
                and orchestration platforms like Kubernetes for automated resource management. These networks also utilize data collection tools, 
                such as SolarWinds, alongside big data technologies like Apache Hadoop for analyzing extensive performance data. Furthermore,
                 integration with software-defined networking (SDN) and network functions virtualization (NFV) enables centralized management and dynamic configuration changes,
                  while cloud computing provides the scalable infrastructure needed to support AI-driven applications. Together,
                   these components facilitate seamless communication and rapid decision-making, revolutionizing the way networks operate and maintain themselves.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedPage;
