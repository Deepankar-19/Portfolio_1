import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Zap } from 'lucide-react';

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-strong shadow-2xl' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Code size={20} className="text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse">
                <Zap size={10} className="text-white m-0.5" />
              </div>
            </div>
            <div>
              <div className="text-xl font-bold gradient-text">Deepankar</div>
              <div className="text-xs text-gray-400 font-mono">ECE • ML Engineer</div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { id: 'home', label: 'Home', icon: '01' },
              { id: 'about', label: 'About', icon: '02' },
              { id: 'projects', label: 'Work', icon: '03' },
              { id: 'contact', label: 'Contact', icon: '04' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative px-6 py-3 text-gray-300 hover:text-white transition-all duration-300"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span className="text-xs font-mono text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 glass-strong rounded-2xl p-6 animate-fade-in-up">
            <div className="space-y-4">
              {[
                { id: 'home', label: 'Home', desc: 'Welcome & Introduction' },
                { id: 'about', label: 'About', desc: 'Skills & Experience' },
                { id: 'projects', label: 'Work', desc: 'Featured Projects' },
                { id: 'contact', label: 'Contact', desc: 'Get In Touch' }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left p-4 rounded-xl hover:bg-white/5 transition-colors duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium group-hover:gradient-text transition-all duration-300">
                        {item.label}
                      </div>
                      <div className="text-sm text-gray-400">{item.desc}</div>
                    </div>
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;