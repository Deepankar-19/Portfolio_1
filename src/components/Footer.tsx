import React from 'react';
import { Heart, Code, Coffee, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      <div className="absolute top-0 left-1/2 w-96 h-32 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl transform -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Code size={20} className="text-white" />
              </div>
              <div>
                <div className="text-xl font-bold gradient-text">Deepankar Sharma</div>
                <div className="text-xs text-gray-400 font-mono">ECE • ML Engineer</div>
              </div>
            </div>
            
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              Crafting intelligent solutions through machine learning and embedded systems. 
              Always excited to work on innovative projects that make a difference.
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              {[
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
                { label: 'Resume', href: '#' }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>&copy; {currentYear} Deepankar Sharma.</span>
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-current animate-pulse" />
              <span>and</span>
              <Coffee size={16} className="text-yellow-500" />
              <span>in Chennai</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Code size={16} className="text-blue-400" />
                <span className="text-sm">Built with React & Tailwind</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Sparkles size={16} className="text-purple-400" />
                <span className="text-sm">Powered by passion</span>
              </div>
            </div>
          </div>

          {/* Fun Element */}
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm font-mono">
              "The best way to predict the future is to invent it." - Alan Kay
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;