import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download, Code2 } from 'lucide-react';
import { BorderBeam } from "@/components/lightswind/border-beam";
import LightweightBubbles from './LightweightBubbles';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ['Full Stack Developer ', 'Problem Solver ', 'Tech Enthusiast '];
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = words[currentWordIndex];
      
      if (!isDeleting) {
        // Typing
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100); // Optimized speed for performance
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ydvRam', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ramyadav7457/', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' },
  ];

  const handleResumeClick = (e) => {
    e.preventDefault();
    // Open in new tab
    window.open('/Resume.pdf', '_blank', 'noopener,noreferrer');
    // Also trigger download
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Ram_Pratap_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero-section">
      {/* Lightweight Bubble Particles */}
      <LightweightBubbles />
      
      {/* Background Elements */}
      <div className="hero-bg">
        <div className="hero-bg-element"></div>
        <div className="hero-bg-element"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 font-medium">
              Hello, I'm
            </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display">
                  <span className="gradient-text">Ram Pratap</span>
                </h1>
            <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium font-heading">
              <span className="inline-block">And I'm </span>
              <span className="inline-block text-blue-500 dark:text-blue-400 font-semibold font-typewriter">
                {currentText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block ml-1"
                >
                  |
                </motion.span>
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions and building scalable applications. 
            I love turning complex problems into simple, beautiful, and intuitive designs.
          </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#projects" className="relative inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300">
                  <span>View My Work</span>
                  <ChevronDown className="w-4 h-4" />
                  <BorderBeam 
                    colorFrom="#3b82f6"
                    colorTo="#8b5cf6"
                    borderThickness={1}
                    beamBorderRadius={8}
                  />
                </a>
                <a href="#contact" className="relative inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300">
                  <Download className="w-4 h-4" />
                  <span>Get In Touch</span>
                  <BorderBeam 
                    colorFrom="#10b981"
                    colorTo="#3b82f6"
                    borderThickness={1}
                    beamBorderRadius={8}
                  />
                </a>
                <a 
                  href="/Resume.pdf" 
                  onClick={handleResumeClick}
                  className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Code2 className="w-4 h-4" />
                  <span>Resume</span>
                  <BorderBeam 
                    colorFrom="#8b5cf6"
                    colorTo="#3b82f6"
                    borderThickness={1}
                    beamBorderRadius={8}
                  />
                </a>
              </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6 pt-8">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                <div className="social-tooltip">
                  {social.label}
                </div>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span className="text-sm">Scroll Down</span>
        <div className="scroll-arrow">
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
