import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './Projects.module.css';
import { ProjectorIcon } from 'lucide-react';

// SVG Icons
const Shield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const ArrowLeft = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ArrowRight = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const Star = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const GitFork = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="6" r="3" />
    <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
    <path d="M12 12v3" />
  </svg>
);

// 10 Demo Projects
const demoProjects = [
  { id: 1, name: "E-Commerce Dashboard", description: "Modern admin dashboard with real-time analytics and inventory management.", image: "https://picsum.photos/id/1015/800/600", language: "React", stars: 124, forks: 32 },
  { id: 2, name: "AI Chat Application", description: "Intelligent chatbot with GPT integration and memory.", image: "https://picsum.photos/id/201/800/600", language: "Next.js", stars: 89, forks: 21 },
  { id: 3, name: "TaskFlow - Kanban Board", description: "Drag & drop project management with team collaboration.", image: "https://picsum.photos/id/237/800/600", language: "TypeScript", stars: 156, forks: 45 },
  { id: 4, name: "Crypto Portfolio Tracker", description: "Real-time cryptocurrency tracking with price alerts.", image: "https://picsum.photos/id/870/800/600", language: "React", stars: 67, forks: 18 },
  { id: 5, name: "Fitness Tracker App", description: "Complete workout planner and progress tracking.", image: "https://picsum.photos/id/1018/800/600", language: "Flutter", stars: 98, forks: 27 },
  { id: 6, name: "Restaurant Booking System", description: "Online table reservation with live availability.", image: "https://picsum.photos/id/106/800/600", language: "Node.js", stars: 74, forks: 19 },
  { id: 7, name: "Weather & Climate App", description: "Beautiful weather app with 10-day forecast.", image: "https://picsum.photos/id/1016/800/600", language: "JavaScript", stars: 112, forks: 34 },
  { id: 8, name: "Social Media Dashboard", description: "Unified analytics for multiple social platforms.", image: "https://picsum.photos/id/133/800/600", language: "Vue.js", stars: 65, forks: 22 },
  { id: 9, name: "Online Learning Platform", description: "Interactive course platform with video lessons and quizzes.", image: "https://picsum.photos/id/201/800/600", language: "Next.js", stars: 143, forks: 51 },
  { id: 10, name: "Smart Parking System", description: "IoT-based real-time parking slot booking.", image: "https://picsum.photos/id/1074/800/600", language: "Python", stars: 81, forks: 24 },
];

function Projects() {
  const [projects] = useState(demoProjects);
  const [startIndex, setStartIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const visibleCount = 3;
  const maxStartIndex = projects.length - visibleCount;

  // Auto Scroll
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxStartIndex]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setStartIndex((prev) => Math.min(maxStartIndex, prev + 1));
  };

  const visibleProjects = projects.slice(startIndex, startIndex + visibleCount);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        {/* Neon Header */}
        <div className={styles.header}>
          <motion.div className={styles.neonTag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <ProjectorIcon/> PROJECTS
          </motion.div>
        </div>

        <div className={styles.sliderWrapper}>
          <button onClick={handlePrev} className={styles.navButton} disabled={startIndex === 0}>
            <ArrowLeft />
          </button>

          <div className={styles.projectsContainer}>
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, idx) => (
                <motion.div
                  key={`${project.id}-${startIndex}`}
                  className={styles.projectCard}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 60 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={styles.imageWrapper}>
                    <img src={project.image} alt={project.name} className={styles.projectImage} />
                    <div className={styles.imageOverlay} />
                  </div>

                  <div className={styles.cardContent}>
                    <h3 className={styles.projectTitle}>{project.name}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>

                    <div className={styles.meta}>
                      <span className={styles.language}>{project.language}</span>
                      <span className={styles.stats}>
                        <Star /> {project.stars} • <GitFork /> {project.forks}
                      </span>
                    </div>

                    <a href="#" className={styles.viewButton}>View Project →</a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button onClick={handleNext} className={styles.navButton} disabled={startIndex >= maxStartIndex}>
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;