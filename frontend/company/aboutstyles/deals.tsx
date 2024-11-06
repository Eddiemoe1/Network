import Link from "next/link";
import { FaBrain, FaTools, FaCloud } from "react-icons/fa"; // Updated icons to available options in 'react-icons/fa'

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
          <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full p-4 flex justify-center items-center">
            {icon}
          </div>
        </div>
      )}
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-white text-center">{content}</p>
    </div>
  );

const DealsPage = () => {
    return (
        <div style={{ backgroundColor: '#050231' }}>
            <section>
                <div>
                    <h2 className="text-4xl font-bold mb-12 mt-12 items-center flex justify-center" style={{ color: '#00B4D8' }}>AI Self-Healing Network</h2>
                </div>
            </section>
            <section
                className="py-8 px-6"
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#130F40',
                }}
            >
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold mb-4" style={{ color: '#db2777' }}>
                        Revolutionizing Network Resilience
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-white">
                    <Card
                        title="Predictive Analytics"
                        content="Using AI-powered predictive analytics to anticipate network failures and proactively address potential issues."
                        icon={
                            <Link href="/">
                                <FaBrain size={50} color="white" />
                            </Link>
                        }
                        className="text-white"
                    />
                    <Card
                        title="Automated Diagnostics"
                        content="Leveraging machine learning to automatically diagnose network anomalies, enhancing detection and response."
                        icon={
                            <Link href="/">
                                <FaTools size={50} color="white" />
                            </Link>
                        }
                        className="text-white"
                    />
                    <Card
                        title="Cloud Infrastructure Integration"
                        content="Utilizing cloud platforms and big data for scalable AI-driven network management and enhanced infrastructure."
                        icon={
                            <Link href="/">
                                <FaCloud size={50} color="white" />
                            </Link>
                        }
                        className="text-white"
                    />
                </div>
            </section>
        </div>
    );
};

export default DealsPage;
