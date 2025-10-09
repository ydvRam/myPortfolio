import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart, Database, Smartphone } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
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

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "I write maintainable, scalable, and well-documented code following industry best practices and SOLID principles."
    },
    {
      icon: Database,
      title: "Full Stack",
      description: "Expertise in both frontend and backend development, creating complete web applications from scratch."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and seamless user interactions across all devices."
    },
    {
      icon: Heart,
      title: "Innovation",
      description: "Passionate about learning new technologies and implementing cutting-edge solutions to solve real problems."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              A passionate developer dedicated to creating exceptional digital experiences
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Profile Image */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Simplified Background Circle */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full opacity-20"
                  style={{
                    width: '420px',
                    height: '420px',
                    transform: 'rotate(-15deg)',
                    transformOrigin: 'center'
                  }}
                />

                {/* Main Profile Container */}
                <div className="relative w-96 h-96 lg:w-[380px] lg:h-[380px]">
                  <div 
                    className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
                      backdropFilter: 'blur(10px)',
                      transform: 'rotate(-15deg)',
                      clipPath: 'circle(50% at 50% 50%)'
                    }}
                  >
                    <img 
                      src="/profile_pic.png" 
                      alt="Ram Pratap - Full Stack Developer"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      style={{
                        transform: 'rotate(15deg)',
                        objectPosition: 'center top'
                      }}
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to placeholder if image not found
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div 
                      className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold" 
                      style={{display: 'none', transform: 'rotate(15deg)'}}
                    >
                      RP
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Description and Cards */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Description */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  I'm <span className="gradient-text">Ram Pratap</span>, a passionate full-stack developer who loves creating interactive, user-friendly web applications that solve real-world problems.
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  With expertise in <span className="text-blue-500 font-semibold">React</span>, <span className="text-blue-500 font-semibold">Node.js</span>, <span className="text-blue-500 font-semibold">MongoDB</span>, and <span className="text-blue-500 font-semibold">Tailwind CSS</span>, I'm always eager to learn new technologies and deliver scalable, efficient solutions.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I believe in writing clean, maintainable code and creating seamless user experiences that make a positive impact on people's lives.
                </p>
              </div>

              {/* 4 Feature Cards */}
              {/* <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    className="card group"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
