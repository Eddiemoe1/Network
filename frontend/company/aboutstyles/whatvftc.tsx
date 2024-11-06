import Link from "next/link";
import { AiOutlineRobot } from 'react-icons/ai';  // Icon for AI
import { BsShieldFill } from 'react-icons/bs';   // Icon for security
import { GiNetworkBars } from 'react-icons/gi';   // Icon for networking

const WhatPage = () => {
    return (
        <section className="py-16" style={{ backgroundColor: '#050231' }}>
            {/* Full-width flex container */}
            <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                <div className="flex-1 mb-8 lg:mb-0">
                    <img src="/images/background/network2.jpg" alt="Illustration" className="w-full h-full animate-float" />
                </div>
                <div className="flex-1 relative" style={{ marginTop: '30px' }}>
                    <h2 className="text-3xl font-bold text-white mb-6" style={{ color: '#db2777' }}>
                        What is AI Self-Healing Network?
                    </h2>
                    <p className="text-md text-gray-300 mb-8">
                        An AI-powered network that autonomously detects, predicts, and resolves network issues, ensuring continuous performance and reliability.
                    </p>
                    <div className="space-y-8 relative">
                        {/* Vertical dotted line */}
                        <div className="absolute left-6 top-12 h-[calc(100%-2.5rem)] w-0.5 border-l-2 border-dotted border-blue-500"></div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-16 w-16 flex justify-center items-center"> {/* Increased size */}
                                    <Link href="/">
                                        <AiOutlineRobot size={30} color="white" /> {/* Increased icon size */}
                                    </Link>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold text-white">Automated Anomaly Detection</h3>
                                <p className="mt-2 text-base text-gray-300">
                                    The AI network uses machine learning to continuously monitor and detect irregularities, addressing issues before they impact performance.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-16 w-16 flex justify-center items-center"> {/* Increased size */}
                                    <Link href="/">
                                        <GiNetworkBars size={30} color="white" /> {/* Increased icon size */}
                                    </Link>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold text-white">Predictive Failure Analysis</h3>
                                <p className="mt-2 text-base text-gray-300">
                                    Utilizing historical and real-time data, the network predicts potential failures, enabling proactive measures and preemptive maintenance.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-16 w-16 flex justify-center items-center"> {/* Increased size */}
                                    <Link href="/">
                                        <BsShieldFill size={30} color="white" /> {/* Increased icon size */}
                                    </Link>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold text-white">Enhanced Security and Reliability</h3>
                                <p className="mt-2 text-base text-gray-300">
                                    The AI-driven network employs advanced security protocols, ensuring data integrity and resilience for secure, uninterrupted connectivity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatPage;
