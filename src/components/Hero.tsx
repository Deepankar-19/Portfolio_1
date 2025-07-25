import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Instagram, Sparkles, Zap, Code2 } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="absolute inset-0 bg-dots opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${10 + mousePosition.y * 0.02}%`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full blur-3xl animate-float"
          style={{
            right: `${15 + mousePosition.x * -0.01}%`,
            bottom: `${20 + mousePosition.y * -0.01}%`,
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"
          style={{
            left: `${60 + mousePosition.x * 0.015}%`,
            top: `${60 + mousePosition.y * 0.015}%`,
            animationDelay: '4s'
          }}
        ></div>
      </div>

      {/* Particle System */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
         

          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-4 leading-none">
              <span className="block gradient-text animate-gradient">Deepankar</span>
              <span className="block gradient-text-secondary animate-gradient" style={{ animationDelay: '0.5s' }}>
                Sharma
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full">
                <Code2 size={16} className="text-blue-400" />
                <span className="text-sm font-mono text-gray-300">ECE Engineer</span>
              </div>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full">
                <Zap size={16} className="text-purple-400" />
                <span className="text-sm font-mono text-gray-300">ML Enthusiast</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
            Crafting intelligent solutions through
            <span className="gradient-text-accent font-semibold"> machine learning</span> and
            <span className="gradient-text font-semibold"> embedded systems</span>
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Passionate about leveraging technology to solve real-world problems through innovative engineering solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold overflow-hidden hover-lift animate-gradient"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Explore My Work</span>
                <Sparkles size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 glass-strong rounded-2xl font-semibold hover-lift border-2 border-transparent hover:border-purple-400/50 transition-all duration-300"
            >
              <span className="flex items-center space-x-2">
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Let's Connect</span>
                <Mail size={18} className="text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-16">
            {[
              { icon: Github, href: 'https://github.com/Deepankar-19', label: 'GitHub', color: 'hover:text-gray-300' },
              { icon: Linkedin, href: 'https://linkedin.com/in/deepankar-sharma19', label: 'LinkedIn', color: 'hover:text-blue-400' },
              { icon: Mail, href: 'mailto:deepankar2310559@ssn.edu.in', label: 'Email', color: 'hover:text-purple-400' },
              { icon: Instagram, href: 'https://instagram.com/Deepankar_19', label: 'Instagram', color: 'hover:text-pink-400' }
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-12 h-12 glass rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover-lift`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <social.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {social.label}
                </div>
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-mono text-gray-500">Scroll to explore</span>
            <button
              onClick={() => scrollToSection('about')}
              className="group w-8 h-12 glass rounded-full flex items-end justify-center pb-2 hover:bg-white/10 transition-colors duration-300"
            >
              <ChevronDown size={20} className="text-gray-400 group-hover:text-white animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 border border-purple-500/30 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 border border-blue-500/30 rounded-lg rotate-45 animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/2 left-10 w-1 h-20 bg-gradient-to-b from-transparent via-pink-500/50 to-transparent hidden lg:block"></div>
      <div className="absolute top-1/3 right-10 w-1 h-16 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent hidden lg:block"></div>
    </section>
  );
};

export default Hero;
