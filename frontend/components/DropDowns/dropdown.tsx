import React, { useState } from 'react';
import Link from 'next/link';

interface DropdownMenuProps {
  title: string;
  items: { label: string, href: string }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      <button
        className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex items-center"
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
        onClick={toggleDropdown}
      >
        <span className="mr-1">{title}</span>
        <i
          className={`fas fa-chevron-down transform transition-transform duration-600 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          id="dropdown-menu"
          className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
