import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Palette, Zap } from 'lucide-react';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      title: "Investment Portfolio Tracker",
      description: "A comprehensive crypto portfolio management application with real-time price tracking, portfolio analytics, and investment insights. Features include price alerts, portfolio performance metrics, and market analysis tools.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Node.js", "MongoDB", "Express", "REST API"],
      github: "https://github.com/ydvRam/crypto-portfolio",
      live: "https://crypto-portfolio-frontend-52gk.onrender.com/",
      category: "Full Stack"
    },
    {
      title: "Educational Gamification",
      description: "An interactive educational platform that gamifies learning experiences with quizzes, achievements, leaderboards, and progress tracking. Built with modern web technologies to enhance student engagement and learning outcomes.",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Node.js", "CSS", "HTML"],
      github: "https://github.com/ydvRam/gamification",
      live: "https://edugame-frontend.onrender.com/",
      category: "Full Stack"
    },
    {
      title: "Gardenlly",
      description: "A beautiful and modern gardening platform that helps users discover, plan, and manage their gardens. Features plant identification, garden planning tools, seasonal planting guides, and community features for garden enthusiasts.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Netlify", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/ydvRam/gardenlly",
      live: "https://gardenlly.netlify.app/",
      category: "Frontend"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
              Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </motion.div>

          {/* Projects */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="glass-effect p-6 rounded-xl hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg overflow-hidden relative group">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to gradient background with icon if image fails to load
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center absolute inset-0" style={{display: 'none'}}>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Code className="w-6 h-6 text-white" />
                          </div>
                          <p className="text-gray-400 text-sm">Project Preview</p>
                        </div>
                      </div>
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex space-x-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300"
                            aria-label="View on GitHub"
                          >
                            <Github className="w-5 h-5 text-white" />
                          </a>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300"
                            aria-label="View Live Demo"
                          >
                            <ExternalLink className="w-5 h-5 text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-blue-400 font-medium">{project.category}</span>
                        <div className="flex space-x-2">
                          <a
                            href={project.github}
                            className="p-1 text-gray-400 hover:text-white transition-colors duration-300"
                            aria-label="GitHub"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                          <a
                            href={project.live}
                            className="p-1 text-gray-400 hover:text-white transition-colors duration-300"
                            aria-label="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-white/10 text-gray-400 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-white/10 text-gray-400 rounded text-xs">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* More Projects Button */}
            <motion.div 
              variants={itemVariants} 
              className="text-center mt-12"
            >
              <a
                href="https://github.com/ydvRam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Github className="w-5 h-5" />
                <span>View More Projects on GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
