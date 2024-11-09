import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-2 relative" style={{ backgroundColor: '#050231' }}>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-start">
        <div className="flex flex-col items-start space-y-4 lg:space-y-6 lg:items-start lg:mr-8 relative">
        <div className="flex justify-center mb-4">
        <img
          src="/images/logos/logo.PNG"
          alt="Logo"
          className="h-12 w-12 rounded-full"
          style={{ position: 'relative', zIndex: 1, marginTop: '8px' }}
        />
      <i>  <h4 className="pl-2" style={{ paddingTop: '20px' }}>AI Self Healing Network</h4> </i>
      </div>
          <div className="flex space-x-2 mt-6 h-16">
            {socialIcons.map((icon, index) => (
              <a href={icon.href} key={index} className="bg-gray-600 py-4 px-4 rounded-md hover:bg-gray-500">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-8 h-8 filter invert"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 lg:mt-0 text-left">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-teal-300 mb-2 text-xl lg:text-2xl">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-lg text-white hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-600 mt-8 py-4 text-center h-30">
        <p className="text-white">© 2024. All rights reserved </p>
      </div>

      <a href="#top" className="absolute bottom-8 right-8 bg-pink-600 p-3 rounded-full shadow-lg hover:bg-pink-500">
        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 15l7-7 7 7"></path>
        </svg>
      </a>
    </footer>
  );
};

const socialIcons = [
  { href: 'https://x.com/NyambaneEdinah?s=09', src: '/icons/X.webp', alt: 'X' },
  { href: 'https://www.facebook.com/share/1C8JCFy5xE/', src: '/icons/fb.png', alt: 'Facebook' },
  { href: 'https://t.me/Moeednah', src: '/icons/telegram.png', alt: 'Telegram' },
  { href: 'https://youtube.com/@edinahnyambane?feature=shared', src: '/icons/youtube.png', alt: 'YouTube' },
  { href: 'https://tiktok.com', src: '/icons/tiktok.png', alt: 'TikTok' },
  { href: 'https://discord.com', src: '/icons/discord.png', alt: 'Discord' },
];

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About US', href: '/About' },
      { label: 'Contact US', href: '/Contact' },
    ],
  },
  {
    title: 'Useful Links',
    links: [
      { label: 'Our Services', href: '/OurServices/PerformanceMonitoring' },
      { label: 'FAQs', href: '/Home' },
    ],
  },
  {
    title: 'Privacy',
    links: [
      { label: 'Privacy Policy', href: '/Privacy' },
      { label: 'Terms & Conditions', href: '/Terms/TermsAndConditions' },
    ],
  },
];

export default Footer;
