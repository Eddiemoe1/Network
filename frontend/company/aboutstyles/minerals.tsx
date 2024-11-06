import Link from "next/link";
import { GoBrowser } from "react-icons/go";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaUsers } from 'react-icons/fa6';

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

const MineralPage = () => {
    return (
        <div>
            <section
                className="py-8 px-6"
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#130F40',
                }}
            >
                <div className="flex flex-wrap justify-center gap-8 text-white">
                    <Card
                        title="Autonomous Monitoring"
                        content="Our AI Self-Healing Network continuously monitors performance metrics, ensuring seamless operations and rapid issue detection."
                        icon={
                            <Link href="/">
                                <FaMobileScreenButton size={50} color="white" />
                            </Link>
                        }
                        className="text-white"
                    />
                    <Card
                        title="Automated Issue Resolution"
                        content="Leverage advanced AI algorithms to automatically identify and resolve network issues without human intervention, reducing downtime."
                        icon={
                            <Link href="/">
                                <FaUsers size={50} color="white" />
                            </Link>
                        }
                        className="text-white"
                    />
                    <Card
                        title="Predictive Analytics"
                        content="Utilize predictive analytics to foresee potential network disruptions and optimize resource allocation to mitigate risks effectively."
                        icon={
                            <Link href="/">
                                <GoBrowser size={50} color="white" />
                            </Link>
                        }
                        className="text-white"
                    />
                </div>
            </section>
        </div>
    )
}

export default MineralPage;
