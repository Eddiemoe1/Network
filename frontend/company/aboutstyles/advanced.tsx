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
        <div className="absolute top-0 left-0 mt-4 ml-4">
          <img src="/images/logos/logo-main.png" alt="Logo" className="h-12 w-auto" />
        </div>

        <div className="flex justify-between items-start space-x-8 w-full px-0">
          {/* Play Button */}
          <div className="flex-1 flex justify-center items-center relative">
            {/* Outward pink ring */}
            <div
              className="absolute rounded-full"
              style={{
                width: '110px',
                height: '110px',
                top: 'calc(85% + 80px)', // Moved down by 80px
                left: '50%',
                transform: 'translate(-50%, -50%)',
                border: '5px solid pink',
                boxSizing: 'border-box',
              }}
            ></div>

            {/* Outward black ring */}
            <div
              className="absolute rounded-full border-4 border-black ${styles.animate-ring}"
              style={{
                width: '100px',
                height: '100px',
                top: 'calc(85% + 80px)', // Moved down by 80px
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            ></div>

            {/* Play Button */}
            <div
              className="absolute flex justify-center items-center rounded-full cursor-pointer transform transition-transform hover:scale-110 hover:bg-pink-500"
              onClick={handlePlayClick}
              style={{
                width: '80px',
                height: '80px',
                top: 'calc(85% + 80px)', // Moved down by 80px
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(128, 128, 128, 0.5)',
                transition: 'background-color 0.3s',
              }}
            >
              <div className="absolute inset-0 rounded-full border-4 border-gray-300 ring-animation"></div>
              <div
                style={{
                  width: '0',
                  height: '0',
                  borderLeft: '25px solid white',
                  borderTop: '12.5px solid transparent',
                  borderBottom: '12.5px solid transparent',
                }}
              ></div>
            </div>
          </div>

          {/* Advanced Technology and Tools Text */}
          <div className="flex-1 text-left" style={{ marginTop: '30px', marginRight: '20px' }}>
            <h5 className="font-bold text-2xl mt-12" style={{ color: '#9e219e' }}>ABOUT US</h5>
            <h3 className="text-5xl font-bold mb-4">ADVANCED TECHNOLOGY AND TOOLS</h3>
            <p className="text-xl font-medium mb-12" style={{ margin: '0' }}>
              AI-self-healing networks leverage a combination of artificial intelligence, machine learning, and automation tools to autonomously detect, diagnose, and resolve network issues, ensuring enhanced reliability and efficiency. Key technologies include predictive analytics for anticipating failures, anomaly detection for identifying irregular network behavior, and orchestration platforms like Kubernetes for automated resource management. These networks also utilize data collection tools, such as SolarWinds, alongside big data technologies like Apache Hadoop for analyzing extensive performance data. Furthermore, integration with software-defined networking (SDN) and network functions virtualization (NFV) enables centralized management and dynamic configuration changes, while cloud computing provides the scalable infrastructure needed to support AI-driven applications. Together, these components facilitate seamless communication and rapid decision-making, revolutionizing the way networks operate and maintain themselves.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedPage;
