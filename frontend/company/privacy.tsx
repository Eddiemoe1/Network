import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#050231' }}>
      {/* Hero Section */}
      <div className="w-full flex justify-center bg-cover bg-center" style={{ height: '400px' }}>
        <div
          className="flex items-center justify-center w-full"
          style={{
            backgroundImage: 'url("/images/background/Slider.jpg")',
          }}
        >
          <div className="text-center px-4" style={{ maxWidth: '600px' }}>
            <h1 className="text-6xl font-bold mb-4" style={{ fontSize: '2rem', color: '#FF69B4' }}>Privacy Policy</h1>
            <p className="text-lg font-medium">
              By using our AI self-healing network services, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your personal information as described herein.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full px-4 py-12">
        <div className="p-8 rounded-md" style={{ marginLeft: '0', backgroundColor: '#050231' }}>
          <h2 className="text-2xl font-bold mb-4" style={{ fontSize: '2rem', color: '#FF69B4' }}>Introduction</h2>
          <p className="text-sm mb-6">
            The AI Self-Healing Network is committed to protecting the privacy and security of our users' personal information. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of personal information when you use our services.
          </p>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2" style={{ color: 'blue' }}>Information We Collect</h2>
            <h3 className="font-semibold" style={{ color: 'aqua' }}>Personal Information</h3>
            <p className="text-sm">
              Registration Information: When you create an account, we collect personal information such as your name, email address, and other contact details to tailor our services to your needs.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2" style={{ color: 'blue' }}>Technical Information</h3>
            <p className="text-sm">
              Device Information: We collect information about the devices you use to access our services, including IP address, browser type, and operating system, to enhance your user experience and improve service reliability.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2" style={{ color: 'blue' }}>Usage Data</h3>
            <p className="text-sm">
              We track user interaction data such as usage patterns, time spent on the platform, and the features used to enhance our self-healing capabilities and optimize our services.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2" style={{ color: 'blue' }}>How We Use Your Information</h2>
            <h3 className="font-semibold" style={{ color: 'aqua' }}>To Provide and Improve Our Services</h3>
            <p className="text-sm">
              We use your personal and usage information to improve the functionality and performance of our self-healing network, providing you with a personalized experience.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2" style={{ color: 'blue' }}>To Enhance AI Capabilities</h3>
            <p className="text-sm">
              Your usage data helps us train our AI algorithms to better predict and resolve issues autonomously, leading to a more efficient network.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2" style={{ color: 'blue' }}>Sharing Your Information</h2>
            <h3 className="font-semibold" style={{ color: 'aqua' }}>With Third-Party Service Providers</h3>
            <p className="text-sm">
              We may share your information with trusted third-party service providers who assist us in operating our network and providing customer support. These providers are required to protect your information and use it only for the purposes specified by the AI Self-Healing Network.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2" style={{ color: 'blue' }}>With Your Consent</h3>
            <p className="text-sm">
              We will share your personal information with third parties only when we have your explicit consent to do so.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2" style={{ color: 'blue' }}>Data Security</h2>
            <h3 className="font-semibold" style={{ color: 'aqua' }}>Security Measures</h3>
            <p className="text-sm">
              We implement robust security measures, including encryption, firewalls, and secure socket layer (SSL) technology, to protect your personal and usage information from unauthorized access, disclosure, or misuse.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2" style={{ color: 'blue' }}>Data Retention</h2>
            <p className="text-sm">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2" style={{ color: 'blue' }}>Your Rights and Choices</h2>
            <h3 className="font-semibold" style={{ color: 'aqua' }}>Access and Correction</h3>
            <p className="text-sm">
              You have the right to access and correct your personal information. You can update your information through your account settings or by contacting our support team.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2" style={{ color: 'blue' }}>Deletion</h2>
            <p className="text-sm">
              You have the right to request the deletion of your personal information, subject to certain legal and regulatory requirements.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2" style={{ color: 'blue' }}>Changes to This Privacy Policy</h2>
            <p className="text-sm">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our platform and, where appropriate, by sending you a notification.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2" style={{ color: 'blue' }}>Contact Us</h2>
            <p className="text-sm">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at the contact information provided below.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
