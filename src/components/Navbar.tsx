import React from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Logo from './layout/Logo';
import Button from './ui/Button';
import Container from './ui/Container';
// import Logo from './assets/logo.png'

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
  { href: '#team', label: 'Team' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <Container>
        <div className="flex justify-between h-16">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-blue-600"
                // onClick={() => setIsOpen(!isOpen)}
              >
                {link.label}
              </a>
            ))}
            <Button>Get Started</Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(!isOpen)}
              >
                {link.label}
              </a>
            ))}
            <Button fullWidth variant="primary"
            onClick={() => setIsOpen(!isOpen)}
            className="mt-2">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;