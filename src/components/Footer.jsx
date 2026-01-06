import { motion } from 'framer-motion';
import { Code, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-8 sm:py-10 md:py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 sm:space-y-6 md:space-y-0">
          {/* Left Side - Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 text-gray-400 text-sm sm:text-base"
          >
            <Code className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Built with</span>
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
            <span>by Ram Pratap</span>
          </motion.div>

          {/* Center - Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 flex-wrap justify-center"
          >
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
              About
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
              Skills
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
              Contact
            </a>
          </motion.div>

          {/* Right Side - Back to Top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group"
          >
            <span className="text-xs sm:text-sm hidden sm:inline">Back to top</span>
            <div className="p-2 glass-effect rounded-lg group-hover:bg-white/15 transition-all duration-300">
              <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
          </motion.button>
        </div>

        {/* Bottom Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>
    </footer>
  );
};

export default Footer;
