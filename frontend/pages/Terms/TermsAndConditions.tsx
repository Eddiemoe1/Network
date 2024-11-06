// TermsAndConditions.tsx
import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="px-4 py-8 text-white" style={{ paddingTop: '70px', backgroundColor: '#050231' }}>
      <h1 className="text-3xl font-bold text-center mb-6 text-pink-500">Terms and Conditions</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. Introduction</h2>
        <p className="text-lg leading-relaxed">
          Welcome to the AI Self-Healing Network. By accessing or using our services, you agree to comply with these terms and conditions. Please read them carefully to understand your rights and obligations.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. Service Description</h2>
        <p className="text-lg leading-relaxed">
          Our AI self-healing network leverages artificial intelligence to monitor, detect, and autonomously resolve network issues in real-time. This ensures minimal downtime and improved system efficiency. While we strive for high reliability, the service is not infallible and is subject to certain limitations and conditions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. User Responsibilities</h2>
        <p className="text-lg leading-relaxed">
          As a user, you agree to: (a) provide accurate information; (b) maintain the security of your login credentials; and (c) comply with applicable laws and regulations while using our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. Service Limitations</h2>
        <p className="text-lg leading-relaxed">
          While we strive to provide reliable network management, our AI self-healing network may occasionally face limitations, including but not limited to unexpected technical issues, incompatibility with certain network configurations, and third-party system errors. We are not liable for any damages or losses resulting from such limitations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">5. Data Collection and Privacy</h2>
        <p className="text-lg leading-relaxed">
          We collect and process data to enhance network performance and troubleshoot issues. All data handling is done in compliance with our <a href="/privacy-policy" className="text-blue-500 underline">Privacy Policy</a>. By using our service, you consent to our data collection practices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">6. Intellectual Property</h2>
        <p className="text-lg leading-relaxed">
          All intellectual property rights related to the AI self-healing network, including patents, copyrights, trademarks, and trade secrets, are owned by us. Unauthorized reproduction, distribution, or modification of any part of our service is strictly prohibited.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">7. Disclaimer of Warranties</h2>
        <p className="text-lg leading-relaxed">
          The service is provided "as-is" without warranties of any kind, either express or implied. We do not warrant that the service will be error-free, secure, or uninterrupted. We disclaim all liability for damages resulting from the use or inability to use our service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">8. Limitation of Liability</h2>
        <p className="text-lg leading-relaxed">
          To the fullest extent permitted by law, we are not liable for any direct, indirect, incidental, special, consequential, or punitive damages, including lost profits or data, arising from your use of our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">9. Modifications to Terms</h2>
        <p className="text-lg leading-relaxed">
          We reserve the right to modify these terms at any time. Changes will be posted on this page, and continued use of the service constitutes acceptance of the modified terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">10. Governing Law</h2>
        <p className="text-lg leading-relaxed">
          These terms are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these terms shall be resolved exclusively in the courts of [Your Jurisdiction].
        </p>
      </section>

      <div className="text-center mt-8">
        <p className="text-sm text-gray-400">Last Updated: 02/11/2024</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
