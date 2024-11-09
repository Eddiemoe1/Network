import React from 'react';

const MissionSection: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#050231', padding: '40px 0' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '40px 20px',
        backgroundImage: 'url(/images/background/bg-features.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        margin: '0 20px'
      }}>
        <div style={{
          flex: 0.5,
          color: 'white',
          padding: '20px',
          backgroundColor: 'rgba(19, 15, 64, 0.8)',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Our Mission</h2>
          <p style={{ fontSize: '1.2rem' }}>
            Ensuring seamless connectivity, efficiency, automation, and real-time issue resolution using automated monitoring,
            seamless optimization, and intelligent self-healing.
          </p>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          flex: 1,
        }}>
          {/* Each feature item styled consistently */}
          {[
            { imgSrc: '/images/background/navigation.webp', text: 'Navigate through your network with ease' },
            { imgSrc: '/images/background/registration.webp', text: 'Register and be a member today' },
            { imgSrc: '/images/background/network-flow.png', text: 'Chase the flow of unlimited network' }
          ].map((feature, index) => (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              backgroundColor: 'transparent',
              padding: '20px',
              borderRadius: '8px',
              border: '12px solid transparent',
              borderImage: 'url(/images/background/bg-iconbox.png) 10 stretch',
              margin: '0 10px',
              transition: 'transform 0.3s',
            }}>
              <img src={feature.imgSrc} alt={feature.text} style={{ maxWidth: '60px', marginBottom: '10px' }} />
              <p style={{ color: 'white', marginTop: '10px', fontSize: '1rem' }}>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MissionSection;

