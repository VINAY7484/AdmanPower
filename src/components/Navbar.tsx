import React from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Logo from './layout/Logo';
import Button from './ui/Button';
import Container from './ui/Container';
import { Link } from 'react-router-dom';
// import Logo from './assets/logo.png'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/services', label: 'Services' },
  { href: '/employers', label: 'Employers' },
  { href: '/candidates', label: 'Candidates' },
  { href: '/about', label: 'About' },
  // { href: '/contact', label: 'Contact' },
  // { href: '/industries', label: 'Industries' },
  // { href: '/blog', label: 'Blog' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg  w-full z-50">
      <Container>
        <div className="flex justify-between h-16">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className=" font-bold hover:text-blue-600"
                // onClick={() => setIsOpen(!isOpen)}
              >
                {link.label}
              </Link>
            ))}
            <Button>Get Started</Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="font-bold hover:text-blue-600">
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-3 py-2 font-bold  hover:text-blue-600"
                onClick={() => setIsOpen(!isOpen)}
              >
                {link.label}
              </Link>
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