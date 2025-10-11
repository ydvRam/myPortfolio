import { motion } from 'framer-motion';
import { memo } from 'react';

const Skills = memo(() => {
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

  const skills = [
    {
      name: "HTML5",
      glowColor: "#E34F26",
      icon: (
        <div className="w-16 h-16 flex items-center justify-center">
          <svg className="w-14 h-14" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
            <path fill="#E34F26" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/>
          </svg>
        </div>
      )
    },
    {
      name: "CSS3",
      glowColor: "#1572B6",
      icon: (
        <div className="w-16 h-16 flex items-center justify-center">
          <svg className="w-14 h-14" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
            <path fill="#1572B6" d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/>
          </svg>
        </div>
      )
    },
    {
      name: "JavaScript",
      glowColor: "#F7DF1E",
      icon: (
        <div className="w-16 h-16 flex items-center justify-center">
          <svg className="w-14 h-14" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F7DF1E" d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 59.1-69.7 59.1z"/>
          </svg>
        </div>
      )
    },
    {
      name: "React",
      glowColor: "#61DAFB",
      icon: (
        <div className="w-12 h-12 flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
            <path d="M12 2C12 2 16.5 6 16.5 12S12 22 12 22S7.5 18 7.5 12S12 2 12 2Z" stroke="#61DAFB" strokeWidth="1" fill="none"/>
            <path d="M2 12C2 12 6 7.5 12 7.5S22 12 22 12S18 16.5 12 16.5S2 12 2 12Z" stroke="#61DAFB" strokeWidth="1" fill="none"/>
            <path d="M2 12C2 12 6 16.5 12 16.5S22 12 22 12S18 7.5 12 7.5S2 12 2 12Z" stroke="#61DAFB" strokeWidth="1" fill="none"/>
          </svg>
        </div>
      )
    },
    {
      name: "Node.js",
      glowColor: "#339933",
      icon: (
        <div className="w-12 h-12 flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#339933"/>
          </svg>
        </div>
      )
    },
    {
      name: "Express.js",
      glowColor: "#000000",
      icon: (
        <div className="w-12 h-12 flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-6.659 3.888-14.64-3.61-9.085-7.617z" fill="#000000"/>
          </svg>
        </div>
      )
    },
    {
      name: "MongoDB",
      glowColor: "#47A248",
      icon: (
        <div className="w-12 h-12 flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.193 9.555c-1.264-5.58-7.524-7.617-7.524-7.617s-6.26 2.037-7.524 7.617c-.844 3.728.3 6.93 2.17 8.569a7.14 7.14 0 003.354 1.523c.179-.053.353-.113.522-.179a7.14 7.14 0 003.354-1.523c1.87-1.639 3.014-4.841 2.17-8.569z" fill="#47A248"/>
            <path d="M12 2.938s6.26 2.037 7.524 7.617c.844 3.728-.3 6.93-2.17 8.569a7.14 7.14 0 01-3.354 1.523c-.179-.053-.353-.113-.522-.179a7.14 7.14 0 01-3.354-1.523c-1.87-1.639-3.014-4.841-2.17-8.569C5.74 4.975 12 2.938 12 2.938z" fill="#4CAF50"/>
          </svg>
        </div>
      )
    },
    {
      name: "Redux",
      glowColor: "#764ABC",
      icon: (
        <div className="w-12 h-12 flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 12c0-2.485-2.015-4.5-4.5-4.5S7.5 9.515 7.5 12s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5zM12 15c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" fill="#764ABC"/>
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" fill="#764ABC"/>
          </svg>
        </div>
      )
    },
    {
      name: "Tailwind",
      glowColor: "#06B6D4",
      icon: (
        <div className="w-16 h-16 flex items-center justify-center">
          <svg className="w-14 h-14" viewBox="0 0 256 154" xmlns="http://www.w3.org/2000/svg">
            <path fill="#06B6D4" d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"/>
          </svg>
        </div>
      )
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
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
              Skills & Technologies
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="bg-gray-800/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 h-32 flex flex-col items-center justify-center space-y-3 border border-gray-700/50 hover:bg-gray-800/90 dark:hover:bg-gray-900/90 transition-all duration-300">
                  {/* Logo */}
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-white text-sm font-medium text-center leading-tight">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;
