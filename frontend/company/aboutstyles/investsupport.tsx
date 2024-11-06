const Insupport = () => {
  return (
    <div
      className="w-full py-12 relative"
      style={{
        backgroundImage: 'url(/images/background/Slider.jpg)',
        backgroundSize: '300% auto',
        backgroundPosition: 'center',
        height: '80vh',
        backgroundColor: '#050231', 
      }}
    >
      {/* Full-width Text Container */}
      <div className="absolute inset-0 flex justify-center items-center w-full">
        <div className="text-center bg-opacity-70 p-6 rounded-md w-full" style={{ maxWidth: '100%' }}>
          <h1 className="text-5xl font-bold mb-6" style={{ color: '#00B4D8', fontSize: '2rem' }}>About Us</h1>
          
          {/* About Us Content in Paragraphs */}
          <p className="text-lg font-medium mb-4">
            At AI Self-Healing Network, we’re pioneering the future of connectivity with cutting-edge technology that ensures networks run seamlessly, autonomously, and intelligently. Our mission is to redefine network reliability by incorporating advanced AI-driven solutions capable of monitoring, diagnosing, and resolving issues in real-time—without manual intervention.
          </p>
          <p className="text-lg font-medium mb-4">
            In a world where connectivity is mission-critical, we are dedicated to creating networks that can learn, adapt, and self-correct. Our self-healing solutions use machine learning algorithms and automated optimization to detect potential disruptions before they impact performance. Whether it's identifying bandwidth bottlenecks, optimizing resource allocation, or dynamically rerouting traffic, our technology is built to keep your network running at peak efficiency.
          </p>
          <p className="text-lg font-medium mb-4">
            We believe in empowering organizations to focus on growth, innovation, and strategic goals rather than troubleshooting network issues. Our approach enables IT teams to achieve new levels of resilience and efficiency, while minimizing downtime and human intervention. With AI Self-Healing Network, your network doesn’t just adapt—it continuously evolves to deliver superior connectivity and unmatched reliability.
          </p>
          <p className="text-lg font-medium">
            Join us on this journey towards a smarter, more reliable, and resilient network experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Insupport;
