import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { 
      name: 'Services', 
      href: '#services',
      dropdown: [
        { name: 'Financial Planning', href: '#financial-planning' },
        { name: 'Insurance', href: '#investment-advisory' },
        { name: 'Tax Consultation', href: '#tax-consultation' },
        { name: 'Mutual Funds', href: '#retirement-planning' },
        { name: 'Wealth Management', href: '#wealth-management' },
        { name: 'Stock Market', href: '#business-consulting' },
      ]
    },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-primary">Artha Advisory</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="flex items-center text-gray-700 hover:text-primary font-medium"
                    >
                      {link.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="absolute top-full left-0 w-56 mt-2 bg-white rounded-md shadow-lg py-2 z-50">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-primary font-medium"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href="#contact" className="btn-primary">
              Book Consultation
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.dropdown ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="flex items-center text-gray-700 hover:text-primary font-medium"
                      >
                        {link.name}
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </button>
                      {activeDropdown === link.name && (
                        <div className="ml-4 space-y-2">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block text-gray-700 hover:text-primary"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-700 hover:text-primary font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              <a href="#contact" className="btn-primary inline-block w-full text-center">
                Book Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;