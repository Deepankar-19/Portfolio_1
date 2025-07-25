import React, { useState, useEffect, useRef } from 'react';
import { Code, Palette, Zap, Users, Brain, Cpu, Database, Award } from 'lucide-react';

const About = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Machine Learning', level: 85, icon: Brain, color: 'from-purple-500 to-pink-500', description: 'Advanced ML algorithms and model optimization' },
    { name: 'Embedded Systems', level: 80, icon: Cpu, color: 'from-blue-500 to-cyan-500', description: 'Hardware-software integration and IoT solutions' },
    { name: 'Signal Processing', level: 75, icon: Zap, color: 'from-yellow-500 to-orange-500', description: 'Digital signal analysis and filtering techniques' },
    { name: 'Data Analysis', level: 82, icon: Database, color: 'from-green-500 to-teal-500', description: 'Statistical analysis and data visualization' },
    { name: 'Leadership', level: 78, icon: Users, color: 'from-indigo-500 to-purple-500', description: 'Team management and project coordination' },
  ];

  const techStack = {
    'Programming Languages': ['Python', 'C++'],
    'Tools & Frameworks': ['SCADA', 'CoDeSys', 'Arduino IDE', 'MATLAB', 'Spyder', 'scikit-learn'],
    'Technical Skills': ['Machine Learning', 'Data Analysis', 'Signal Processing', 'Embedded Systems'],
    'Soft Skills': ['Communication', 'Teamwork', 'Leadership']
  };

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
              <Award size={16} className="text-yellow-400" />
              <span className="text-sm font-mono text-gray-300">About Me</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="gradient-text">Crafting Tomorrow's</span>
              <br />
              <span className="gradient-text-secondary">Technology Today</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Aspiring Electronics and Communication Engineer with strong foundations in Python, machine learning, and embedded systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Story & Skills */}
            <div className={`space-y-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Story */}
              <div className="glass-strong rounded-3xl p-8 hover-lift">
                <h3 className="text-2xl font-bold gradient-text mb-6">My Journey</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Seeking to leverage technical skills in real-world applications, particularly in software and 
                    data-driven roles. Experienced in developing control systems and building machine learning models 
                    for signal and time-series data.
                  </p>
                  <p>
                    Passionate about problem-solving, continuous learning, and contributing to impactful 
                    technology-driven solutions. Active member of SSN's tech club design team with 70+ hours 
                    of social outreach through NSS activities.
                  </p>
                </div>
              </div>

              {/* Interactive Skills */}
              <div className="glass-strong rounded-3xl p-8 hover-lift">
                <h3 className="text-2xl font-bold gradient-text-secondary mb-8">Core Expertise</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className={`relative p-4 rounded-2xl cursor-pointer transition-all duration-500 ${
                        activeSkill === index ? 'glass scale-105' : 'hover:bg-white/5'
                      }`}
                      onClick={() => setActiveSkill(index)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                            <skill.icon size={20} className="text-white" />
                          </div>
                          <div>
                            <span className="text-white font-semibold">{skill.name}</span>
                            <p className="text-sm text-gray-400">{skill.description}</p>
                          </div>
                        </div>
                        <span className="text-gray-400 font-mono text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out ${
                            activeSkill === index ? 'animate-pulse' : ''
                          }`}
                          style={{ 
                            width: activeSkill === index ? `${skill.level}%` : '0%',
                            transitionDelay: activeSkill === index ? '0.2s' : '0s'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Tech Stack & Experience */}
            <div className={`space-y-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Tech Stack */}
              <div className="glass-strong rounded-3xl p-8 hover-lift">
                <h3 className="text-2xl font-bold gradient-text-accent mb-8">Technical Arsenal</h3>
                <div className="space-y-8">
                  {Object.entries(techStack).map(([category, items], index) => (
                    <div key={category} className="space-y-4">
                      <h4 className="text-lg font-semibold text-purple-400 flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>{category}</span>
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {items.map((item, itemIndex) => (
                          <span
                            key={item}
                            className="px-4 py-2 glass rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:scale-105 transition-all duration-300 cursor-default"
                            style={{ animationDelay: `${(index * items.length + itemIndex) * 0.1}s` }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Experience */}
              <div className="space-y-6">
                {[
                  {
                    title: 'Sri Sivasubramaniya Nadar College of Engineering, Chennai',
                    subtitle: 'B.E. in Electronics and Communication Engineering',
                    type: 'Education',
                    color: 'from-blue-500 to-purple-500'
                  },
                  {
                    title: 'Kendriya Vidyalaya No 2 Kalpakkam',
                    subtitle: 'Secondary Education',
                    type: 'Education',
                    color: 'from-green-500 to-blue-500'
                  },
                  {
                    title: 'Intern at IGCAR',
                    subtitle: 'Working on ML algorithms for sodium tank control systems',
                    type: 'Experience',
                    color: 'from-purple-500 to-pink-500'
                  },
                  {
                    title: 'SSN Tech Club Design Team',
                    subtitle: 'Active member contributing to technical projects and innovation',
                    type: 'Leadership',
                    color: 'from-yellow-500 to-orange-500'
                  }
                ].map((item, index) => (
                  <div key={index} className="glass-strong rounded-2xl p-6 hover-lift interactive-card">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white font-bold text-sm">{item.type[0]}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.subtitle}</p>
                        <div className="mt-2">
                          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${item.color} text-white`}>
                            {item.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Community Service */}
              <div className="glass-strong rounded-3xl p-8 hover-lift bg-gradient-to-br from-teal-500/10 to-green-500/10">
                <h3 className="text-2xl font-bold gradient-text-accent mb-4">Community Impact</h3>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-black gradient-text">70+</div>
                  <div>
                    <p className="text-white font-semibold">Hours of Social Outreach</p>
                    <p className="text-gray-400 text-sm">Through NSS activities, demonstrating commitment to community development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-strong rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold gradient-text mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-gray-300 mb-8 text-lg">
                I'm always excited to work on innovative projects and collaborate with creative minds. 
                Let's turn your ideas into reality!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-semibold hover-lift animate-gradient">
                  Download Resume
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 glass border-2 border-purple-400/50 text-purple-400 rounded-2xl font-semibold hover:bg-purple-400/10 hover-lift transition-all duration-300"
                >
                  Let's Collaborate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;