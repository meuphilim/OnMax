import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-gray-900/60 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className={`w-10 h-10 bg-gradient-to-r from-primary to-blue-light rounded-lg flex items-center justify-center transition-colors duration-500 ${
              isScrolled ? '' : 'bg-opacity-80'
            }`}>
              <Code2 className={`w-6 h-6 transition-colors duration-500 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`} />
            </div>
            <span className={`text-xl lg:text-2xl font-bold font-poppins transition-colors duration-500 ${
              isScrolled ? 'text-gray-950' : 'text-white'
            }`}>
              OnMax
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-500 relative group ${
                  isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className={`btn-primary ml-4 transition-colors duration-500 ${
                isScrolled ? '' : 'bg-primary/80 text-white'
              }`}
            >
              Fale Conosco
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg animate-slide-up">
            <nav className="container-custom py-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary w-full mt-4"
              >
                Fale Conosco
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
