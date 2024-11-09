const IntroPage = () => {
    return (
        <div style={{ backgroundColor: '#050231', paddingTop: '20px' }}>
            {/* Title Section */}
            <section className="text-center py-12">
            <h2 className="font-bold mb-12" style={{ color: '#00B4D8', fontSize: '2rem' }}>
                AI-Self Healing Network Introduction
            </h2>


            </section>

            {/* Main Content Section */}
            <section className="py-16 px-8" style={{ backgroundColor: '#130F40', width: '100%' }}>
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Left Side: Introduction and Image */}
                    <div className="flex-1 mb-12 lg:mb-0 text-white lg:pr-12" style={{ marginTop: '20px' }}>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#db2777' }}>
                            Allow Us to Introduce Our Technology
                        </h2>
                        <p className="text-xl lg:text-2xl mb-6">
                            Our AI-Self Healing Network leverages cutting-edge artificial intelligence to autonomously monitor and manage network performance. 
                            Established to enhance reliability and efficiency, this innovative network minimizes downtime and optimizes resource allocation.
                        </p>
                        <div className="flex items-center justify-center lg:justify-start">
                        <img
                            src="/images/background/network1.jpg"
                            alt="Network Architecture"
                            className="w-full h-auto max-w-md rounded-lg shadow-md"
                            style={{ height: '400px' }} // Set the desired height
                        />
                    </div>

                    </div>

                    {/* Right Side: Features List */}
                    <div className="flex-3 space-y-12">
                        {[
                            {
                                number: "01",
                                title: "Real-Time Monitoring and Analysis",
                                description: "Our AI systems continuously monitor network traffic and performance metrics to detect anomalies in real time, ensuring prompt issue identification.",
                            },
                            {
                                number: "02",
                                title: "Automated Problem Resolution",
                                description: "Our network is equipped with automated remediation tools that address issues without human intervention, significantly reducing downtime.",
                            },
                            {
                                number: "03",
                                title: "Predictive Analytics for Future Growth",
                                description: "Utilizing advanced machine learning, our network predicts potential future issues and automatically allocates resources to mitigate risks.",
                            },
                            {
                                number: "04",
                                title: "Seamless Scalability and Flexibility",
                                description: "Designed to scale effortlessly, our AI-self healing network adapts to your business's evolving needs, providing a future-proof solution.",
                            },
                        ].map((feature, index) => (
                            <div key={index} className="text-white">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="border-4 border-pink-600 rounded-lg h-16 w-16 flex justify-center items-center font-bold text-4xl text-pink-500">
                                            {feature.number}
                                        </div>
                                    </div>
                                    <div className="ml-6">
                                        <h6 className="text-2xl font-semibold" style={{ color: '#00B4D8' }}>
                                            {feature.title}
                                        </h6>
                                        <p className="mt-2 text-lg text-gray-300">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                                {/* Horizontal line after each feature */}
                                <hr className="my-6 border-t border-gray-600" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IntroPage;
