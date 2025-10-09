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
        <div className="w-12 h-12 flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 0h21L20.25 21L12 24L3.75 21L1.5 0z" fill="#E34F26"/>
            <path d="M12 2.25V22.5L19.5 20.25L21 2.25H12z" fill="#EF652A"/>
            <path d="M12 7.5V9.75H6.75L6.375 13.5H12V15.75H3.375L3.75 7.5H12z" fill="white"/>
            <path d="M12 13.5V15.75H8.25L8.625 19.5L12 20.25V18L9.75 17.25L9.375 13.5H12z" fill="white"/>
            <path d="M20.625 7.5L20.25 15.75H16.5L16.875 13.5H12V15.75H15L14.625 19.5L12 20.25V22.5L19.5 20.25L20.625 7.5z" fill="white"/>
          </svg>
        </div>
      )
    },
    {
      name: "CSS3",
      glowColor: "#1572B6",
      icon: (
        <div className="w-12 h-12 flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 0h21L20.25 21L12 24L3.75 21L1.5 0z" fill="#1572B6"/>
            <path d="M12 2.25V22.5L19.5 20.25L21 2.25H12z" fill="#33A9DC"/>
            <path d="M12 7.5V9.75H6.75L6.375 13.5H12V15.75H3.375L3.75 7.5H12z" fill="white"/>
            <path d="M12 13.5V15.75H8.25L8.625 19.5L12 20.25V18L9.75 17.25L9.375 13.5H12z" fill="white"/>
            <path d="M20.625 7.5L20.25 15.75H16.5L16.875 13.5H12V15.75H15L14.625 19.5L12 20.25V22.5L19.5 20.25L20.625 7.5z" fill="white"/>
          </svg>
        </div>
      )
    },
    {
      name: "JavaScript",
      glowColor: "#F7DF1E",
      icon: (
        <div className="w-12 h-12 flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
            <path d="M17.5 17.5C17.5 18.5 16.5 19.5 15.5 19.5C14.5 19.5 13.5 18.5 13.5 17.5V16.5H15.5V17.5C15.5 17.8 15.8 18.1 16.1 18.1C16.4 18.1 16.7 17.8 16.7 17.5C16.7 17.2 16.4 16.9 16.1 16.9C15.5 16.9 14.9 16.3 14.9 15.7V14.7C14.9 14.1 15.5 13.5 16.1 13.5H17.5V15.5H16.1V14.7H16.1C16.1 14.4 15.8 14.1 15.5 14.1C15.2 14.1 14.9 14.4 14.9 14.7V15.7C14.9 16.3 15.5 16.9 16.1 16.9C16.7 16.9 17.3 16.3 17.3 15.7V14.7C17.3 14.1 16.7 13.5 16.1 13.5H14.9V11.5H16.1C17.1 11.5 18.1 12.5 18.1 13.5V15.7C18.1 16.7 17.1 17.7 16.1 17.7C15.1 17.7 14.1 16.7 14.1 15.7V14.7H16.1V15.7C16.1 16 16.4 16.3 16.7 16.3C17 16.3 17.3 16 17.3 15.7V14.7C17.3 14.4 17 14.1 16.7 14.1H15.5V12.1H16.7C17.7 12.1 18.7 13.1 18.7 14.1V15.7C18.7 16.7 17.7 17.7 16.7 17.7H14.9V19.7H16.7C18.7 19.7 20.7 17.7 20.7 15.7V14.1C20.7 12.1 18.7 10.1 16.7 10.1H14.9V8.1H16.7C18.7 8.1 20.7 10.1 20.7 12.1V13.7C20.7 15.7 18.7 17.7 16.7 17.7H15.5V17.5Z" fill="black"/>
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
        <div className="w-12 h-12 flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 6.75c-3.75 0-6 2.25-6.75 6.75 1.5-2.25 3.75-3 6-3 1.5 0 3 .75 4.5 2.25 3-4.5 7.5-6 11.25-6s6 2.25 6.75 6.75c-1.5 2.25-3.75 3-6 3-1.5 0-3-.75-4.5-2.25-3 4.5-7.5 6-11.25 6z" fill="#06B6D4"/>
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
