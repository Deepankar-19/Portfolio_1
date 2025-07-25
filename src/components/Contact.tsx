import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle, Sparkles, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'deepankar2310559@ssn.edu.in',
      href: 'mailto:deepankar2310559@ssn.edu.in',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9445473914',
      href: 'tel:+919445473914',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, India',
      href: '#',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Deepankar-19',
      color: 'hover:text-gray-300',
      username: '@Deepankar-19'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/deepankar-sharma19',
      color: 'hover:text-blue-400',
      username: 'deepankar-sharma19'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/Deepankar_19',
      color: 'hover:text-pink-400',
      username: '@Deepankar_19'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
              <MessageCircle size={16} className="text-purple-400" />
              <span className="text-sm font-mono text-gray-300">Get In Touch</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="gradient-text">Let's Create</span>
              <br />
              <span className="gradient-text-secondary">Something Amazing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className={`space-y-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Intro */}
              <div className="glass-strong rounded-3xl p-8 hover-lift">
                <h3 className="text-3xl font-bold gradient-text mb-6">Ready to Collaborate?</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, creative projects, 
                  or just having a friendly chat about technology and innovation. Let's connect and explore 
                  how we can work together to create something extraordinary.
                </p>
                <div className="flex items-center space-x-2 text-purple-400">
                  <Sparkles size={20} />
                  <span className="font-medium">Available for new projects</span>
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="block glass-strong rounded-2xl p-6 hover-lift interactive-card group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold mb-1 group-hover:gradient-text transition-all duration-300">
                          {info.label}
                        </h4>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="glass-strong rounded-3xl p-8 hover-lift">
                <h3 className="text-2xl font-bold gradient-text-accent mb-6">Follow My Journey</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <social.icon size={20} className={`text-gray-400 ${social.color} transition-colors duration-300`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium group-hover:gradient-text transition-all duration-300">
                          {social.label}
                        </div>
                        <div className="text-gray-400 text-sm">{social.username}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="glass-strong rounded-3xl p-8 hover-lift">
                <h3 className="text-3xl font-bold gradient-text-secondary mb-8">Send Me a Message</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Message Sent!</h4>
                    <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-white font-medium">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 glass rounded-2xl border border-white/10 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-400 transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-white font-medium">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 glass rounded-2xl border border-white/10 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-400 transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-white font-medium">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 glass rounded-2xl border border-white/10 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-white font-medium">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-4 glass rounded-2xl border border-white/10 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-400 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project, ideas, or just say hello..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-semibold hover-lift transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-strong rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold gradient-text mb-4">Prefer a Quick Chat?</h3>
              <p className="text-gray-300 mb-8 text-lg">
                Sometimes a conversation is worth a thousand messages. Feel free to reach out directly!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:deepankar2310559@ssn.edu.in"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover-lift animate-gradient"
                >
                  Email Me Directly
                </a>
                <a
                  href="tel:+919445473914"
                  className="px-8 py-4 glass border-2 border-purple-400/50 text-purple-400 rounded-2xl font-semibold hover:bg-purple-400/10 hover-lift transition-all duration-300"
                >
                  Call Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;