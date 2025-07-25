import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Calendar, Users, CheckCircle, Clock, Building, Zap } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'PLC-Based HMI System for Sodium Storage Automation',
      description: 'Programmed PLCs using Ladder Logic and Structured Text in CoDeSys. Built HMI using SILVERINA SCADA for automated control and monitoring of sodium storage tanks.',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['CoDeSys', 'SCADA', 'Ladder Logic', 'HMI'],
      client: 'IGCAR',
      status: 'Completed',
      date: 'June 2025',
      teamSize: 'Individual',
      category: 'Industrial Automation',
      impact: 'Automated sodium storage monitoring system',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'ML Model for Flaw Detection in Amplitude Data',
      description: 'Trained a Gradient Boosting model for flaw detection in eddy current signals. Preprocessed time-series amplitude data using Python and scikit-learn.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'scikit-learn', 'Gradient Boosting', 'Signal Processing'],
      client: 'IGCAR',
      status: 'Completed',
      date: 'June 2025 – July 2025',
      teamSize: 'Individual',
      category: 'Machine Learning',
      impact: 'Enhanced flaw detection accuracy by 25%',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Real-time ROV Control System',
      description: 'Built a joystick-controlled interface for a 6-thruster ROV using Python. Implemented PWM mapping (1100–1900µs) and integrated live orientation tracking using AHRS sensors.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'PWM Control', 'AHRS Sensors', 'Real-time Systems'],
      client: 'Vikra Oceans',
      status: 'Completed',
      date: 'July 2025',
      teamSize: '4 members',
      category: 'Robotics',
      impact: 'Precise underwater vehicle control',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Bathymetric Data Collection Using Ping Echosounder',
      description: 'Integrated Blue Robotics\' Ping Echosounder on an ROV for depth data collection. Working on sensor interfacing, data acquisition, and navigation assistance for underwater mapping.',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Blue Robotics', 'Sensor Integration', 'Data Acquisition', 'Navigation'],
      client: 'SSN',
      status: 'On-going',
      date: 'Jan 2025 – Present',
      teamSize: '4 members',
      category: 'Marine Technology',
      impact: 'Advanced underwater mapping capabilities',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getStatusIcon = (status: string) => {
    return status === 'Completed' ? CheckCircle : Clock;
  };

  const getStatusColor = (status: string) => {
    return status === 'Completed' ? 'text-green-400' : 'text-yellow-400';
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-20"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
              <Zap size={16} className="text-blue-400" />
              <span className="text-sm font-mono text-gray-300">Featured Work</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="gradient-text">Projects That</span>
              <br />
              <span className="gradient-text-secondary">Make Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Showcasing innovative solutions across machine learning, embedded systems, and industrial automation.
            </p>
          </div>

          {/* Project Navigation */}
          <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeProject === index
                    ? 'glass-strong text-white scale-105'
                    : 'glass text-gray-400 hover:text-white hover:scale-105'
                }`}
              >
                {project.category}
              </button>
            ))}
          </div>

          {/* Featured Project */}
          <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-strong rounded-3xl overflow-hidden hover-lift">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-80 lg:h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6 flex space-x-3">
                    <a
                      href={projects[activeProject].liveUrl}
                      className="w-12 h-12 glass rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={projects[activeProject].githubUrl}
                      className="w-12 h-12 glass rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-4 text-white">
                      <div className="flex items-center space-x-2">
                        <Building size={16} />
                        <span className="text-sm font-medium">{projects[activeProject].client}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users size={16} />
                        <span className="text-sm font-medium">{projects[activeProject].teamSize}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm font-medium">
                      {projects[activeProject].category}
                    </span>
                    <div className={`flex items-center space-x-2 ${getStatusColor(projects[activeProject].status)}`}>
                      {React.createElement(getStatusIcon(projects[activeProject].status), { size: 16 })}
                      <span className="text-sm font-medium">{projects[activeProject].status}</span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                    {projects[activeProject].title}
                  </h3>

                  <div className="flex items-center space-x-4 mb-6 text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span className="text-sm">{projects[activeProject].date}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {projects[activeProject].description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-3">Impact</h4>
                    <p className="text-purple-400 font-medium">{projects[activeProject].impact}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {projects[activeProject].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 glass rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:scale-105 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={projects[activeProject].liveUrl}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-center hover-lift transition-all duration-300"
                    >
                      View Project
                    </a>
                    <a
                      href={projects[activeProject].githubUrl}
                      className="px-6 py-3 glass border-2 border-purple-400/50 text-purple-400 rounded-2xl font-semibold hover:bg-purple-400/10 transition-all duration-300"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Projects Grid */}
          <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {projects.map((project, index) => (
              <div
                key={index}
                className={`glass-strong rounded-2xl overflow-hidden hover-lift interactive-card cursor-pointer transition-all duration-300 ${
                  activeProject === index ? 'ring-2 ring-purple-400/50 scale-105' : ''
                }`}
                onClick={() => setActiveProject(index)}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className={`flex items-center space-x-1 px-2 py-1 glass rounded-full ${getStatusColor(project.status)}`}>
                      {React.createElement(getStatusIcon(project.status), { size: 12 })}
                      <span className="text-xs font-medium">{project.status}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs text-blue-300 font-medium">{project.category}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Building size={14} />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>{project.teamSize}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-purple-600/20 text-purple-300 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-gray-600/20 text-gray-400 rounded-lg">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-strong rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold gradient-text mb-4">Interested in My Work?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how we can collaborate on your next innovative project.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-semibold hover-lift animate-gradient"
              >
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;