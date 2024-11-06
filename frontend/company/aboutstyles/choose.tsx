import Link from "next/link";
import { FaRobot, FaShieldAlt, FaGlobeAmericas } from 'react-icons/fa'; // Using more relevant icons
import { SiPluscodes } from "react-icons/si";
import { RiShieldUserLine } from "react-icons/ri";

const ChoosePage = () => {
    return (
        <div style={{ backgroundColor: '#050231', width: '100%' }}>
            <section>
                <div>
                    <h2 className="text-4xl font-bold mb-0 mt-0 pt-5 pb-5 items-center flex justify-center" style={{ color: '#00B4D8' }}>
                        Why Choose Our AI-Self Healing Network
                    </h2>
                </div>
            </section>
            <section className="py-16" style={{ backgroundColor: '#130F40', position: 'relative', width: '100%' }}>
                <div className="flex flex-col lg:flex-row items-start w-full">
                    <div className="flex-1" style={{ maxWidth: '500px', position: 'relative', top: '40px', left: '20px' }}>
                        <div className="relative">
                            <img src="/images/background/network 6.jpg" alt="AI Self-Healing Network" className="w-full h-auto" />
                            <button
                                onClick={() => window.open('https://www.youtube.com/watch?v=YOUR_VIDEO_ID', '_blank')}
                                className="absolute inset-0 flex items-center justify-center"
                                style={{ background: 'white', borderRadius: '50%', width: '80px', height: '80px', top: '100px', left: '200px' }} // Moved up by 40px and right by 40px
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-blue-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-4.505 2.597A1 1 0 019 12.82V9.182a1 1 0 011.247-.968l4.505 2.597a1 1 0 010 1.737z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 lg:pl-15 relative" style={{ maxWidth: '50%', marginTop: '30px', marginRight: '20px', marginLeft: '320px' }}>
                        <h5 className="text-blue-400 text-bold" style={{ color: 'cyan', paddingTop: '30px', paddingBottom: '30px' }}>ABOUT OUR NETWORK</h5>
                        <h2 className="text-4xl font-bold text-white mb-6" style={{ color: '#db2777' }}>Why Choose Our AI-Self Healing Network?</h2>
                        <div className="space-y-8 relative">
                            {/* Content sections */}
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="bg-gray-600 rounded-full h-16 w-16 flex justify-center items-center"> {/* Circular background for the icon */}
                                        <Link href="/">
                                            <SiPluscodes size={36} color="#60a5fa" /> {/* Light blue color */}
                                        </Link>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-white">Proactive Issue Detection</h3>
                                    <p className="mt-2 text-base text-gray-300">
                                        Our AI-self healing network employs advanced machine learning algorithms to proactively detect anomalies and potential issues before they affect network performance. This ensures minimal downtime and maximizes operational efficiency.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="bg-gray-600 rounded-full h-16 w-16 flex justify-center items-center"> {/* Circular background for the icon */}
                                        <Link href="/">
                                            <FaRobot size={36} color="#60a5fa" /> {/* AI relevant icon */}
                                        </Link>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-white">Automated Remediation</h3>
                                    <p className="mt-2 text-base text-gray-300">
                                        Our network utilizes automation tools to implement real-time fixes, ensuring that issues are resolved quickly without manual intervention. This reduces operational costs and enhances reliability.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="bg-gray-600 rounded-full h-16 w-16 flex justify-center items-center"> {/* Circular background for the icon */}
                                        <Link href="/">
                                            <FaGlobeAmericas size={36} color="#60a5fa" /> {/* More relevant globe icon */}
                                        </Link>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-white">Scalable and Flexible</h3>
                                    <p className="mt-2 text-base text-gray-300">
                                        Designed to adapt to changing demands, our AI-self healing network can scale seamlessly as your organization grows. Its flexible architecture supports diverse applications and services, ensuring a future-proof solution.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ChoosePage;
