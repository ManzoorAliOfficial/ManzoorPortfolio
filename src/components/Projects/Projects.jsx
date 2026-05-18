'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Genex from '../../Assets/images/genex.jpg';
import HeptaWebsite from '../../Assets/images/HeptaWebsite.png';
import Hookmaster from '../../Assets/images/hookMaster.png';
import KhanCafe from '../../Assets/images/Khancaferesturent.jpg';
import RealState from '../../Assets/images/RealState.png';
import SmartInvoices from '../../Assets/images/smartInvoices.png';
import SpotifyClone from '../../Assets/images/SpotifyClone.png';
import Luxury from '../../Assets/images/Luxury.jpg';

import styles from './Projects.module.css';

/* ─── Icons ─── */
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
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#ffd700">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const GitFork = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" />
    <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" /><path d="M12 12v3" />
  </svg>
);
const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
const ExternalLink = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Tech Stack SVG Logos ─── */
const TechLogo = ({ tech }) => {
  const logos = {
    React: (
      <svg width="15" height="15" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="9" fill="#61DAFB" />
        <ellipse cx="50" cy="50" rx="45" ry="17" fill="none" stroke="#61DAFB" strokeWidth="5" />
        <ellipse cx="50" cy="50" rx="45" ry="17" fill="none" stroke="#61DAFB" strokeWidth="5" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="45" ry="17" fill="none" stroke="#61DAFB" strokeWidth="5" transform="rotate(120 50 50)" />
      </svg>
    ),
    HTML: (
      <svg width="15" height="15" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="4" fill="#E44D26" />
        <text x="4" y="23" fontFamily="Arial" fontWeight="bold" fontSize="13" fill="#fff">H5</text>
      </svg>
    ),
    CSS: (
      <svg width="15" height="15" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="4" fill="#1572B6" />
        <text x="5" y="23" fontFamily="Arial" fontWeight="bold" fontSize="13" fill="#fff">C3</text>
      </svg>
    ),
    JS: (
      <svg width="15" height="15" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="4" fill="#F7DF1E" />
        <text x="5" y="23" fontFamily="Arial" fontWeight="bold" fontSize="13" fill="#323330">JS</text>
      </svg>
    ),
    Next: (
      <svg width="15" height="15" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="4" fill="#000" />
        <text x="3" y="23" fontFamily="Arial" fontWeight="bold" fontSize="11" fill="#fff">NXT</text>
      </svg>
    ),
    Tailwind: (
      <svg width="15" height="15" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="4" fill="#0F172A" />
        <path
          d="M16 8c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.76.19 1.305.742 1.908 1.353C17.486 13.04 18.652 14.5 21 14.5c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.76-.19-1.305-.742-1.908-1.353C19.514 9.46 18.348 8 16 8zm-5 7.5c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.76.19 1.305.742 1.908 1.353C12.486 20.54 13.652 22 16 22c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.76-.19-1.305-.742-1.908-1.353C14.514 16.96 13.348 15.5 11 15.5z"
          fill="#38BDF8"
        />
      </svg>
    ),
  };
  return logos[tech] || null;
};

/* ─── FIX 1: Normalize parseTechs to match all language strings used in project data ─── */
const parseTechs = (language) => {
  // Normalize: trim + lowercase for reliable matching
  const normalized = language.trim().toLowerCase();

  const map = {
    'react, tailwind': ['React', 'Tailwind', 'JS'],  // FIX: was 'React ,Tailwind ' (extra spaces, no Tailwind logo returned before)
    'react, tailwind css': ['React', 'Tailwind', 'JS'],  // FIX: added — used by id 7 & 8 ("React, Tailwind CSS")
    'react ,tailwind ': ['React', 'Tailwind', 'JS'],  // kept for backward compat
    'html, css, js': ['HTML', 'CSS', 'JS'],
    'html, css, javascript': ['HTML', 'CSS', 'JS'],
    'html': ['HTML', 'CSS', 'JS'],
    'next.js': ['Next', 'React', 'JS'],
  };

  return map[normalized] || [];
};

/* ─── Project Data ─── */
const demoProjects = [
  {
    id: 1,
    name: "SmartInvoices",
    description: "Modern invoicing app with real-time analytics and inventory management.",
    image: SmartInvoices,
    link: "https://smart-invoice.pages.dev/dashboard",
    github: "https://github.com/manzooralii/smart-invoice",
    language: "React, Tailwind",   // FIX: was "React, Tailwind" — now matches map key
    stars: 14,
    forks: 32,
  },
  {
    id: 2,
    name: "HookMaster",
    description: "A utility library for custom React hooks with live documentation and examples.",
    image: Hookmaster,
    link: "https://hookmaster-io-s8c2-git-main-manzooraliis-projects.vercel.app/",
    github: "https://github.com/manzooralii/hookmaster",
    language: "HTML, CSS, JS",
    stars: 89,
    forks: 21,
  },
  {
    id: 3,
    name: "Genex Digital Solutions",
    description: "Corporate digital agency website showcasing services and portfolio.",
    image: Genex,
    link: "http://genex-eta.vercel.app/",
    github: "https://github.com/manzooralii/genex",
    language: "HTML, CSS, JS",
    stars: 156,
    forks: 45,
  },
  {
    id: 4,
    name: "Khan Cafe",
    description: "Restaurant website for Khan Cafe with menu, gallery, and contact section.",
    image: KhanCafe,
    link: "https://timely-cascaron-2499fd.netlify.app/",
    github: "https://github.com/manzooralii/khan-cafe",
    language: "HTML",
    stars: 67,
    forks: 18,
  },
  {
    id: 5,
    name: "RealState",
    description: "Real estate listing website with property search and detail pages.",
    image: RealState,
    link: "https://first-project-mk.netlify.app/",
    github: "https://github.com/manzooralii/realstate",
    language: "HTML",
    stars: 58,
    forks: 27,
  },
  {
    id: 6,
    name: "Hepta Websites",
    description: "Modern travel & hotel booking site with responsive UI and smooth animations.",
    image: HeptaWebsite,
    link: "https://heptaa-websites.netlify.app/",
    github: "https://github.com/manzooralii/hepta-websites",
    language: "HTML, CSS, JavaScript",
    stars: 10,
    forks: 18,
  },
  {
    id: 7,
    name: "Luxury E-Commerce",
    description: "Modern luxury travel and hotel booking website with a fully responsive UI, smooth animations, and elegant user experience.",
    image: Luxury,
    link: "https://luxora-ecommerce-ebon.vercel.app/",
    github: "https://github.com/ManzoorAliOfficial/luxora-ecommerce",
    language: "React, Tailwind CSS",  // FIX: now matched by parseTechs via normalized key
    stars: 10,
    forks: 18,
  },
  {
    id: 8,
    name: "SpotifyClone",
    description: "Modern luxury travel and hotel booking website with a fully responsive UI, smooth animations, and elegant user experience.",
    image: SpotifyClone,
    link: "https://code-alpha-spotify-clone-oblj.vercel.app/",
    github: "https://github.com/ManzoorAliOfficial/CodeAlpha-SpotifyClone",
    language: "React, Tailwind CSS",  // FIX: now matched by parseTechs via normalized key
    stars: 10,
    forks: 18,
  },
];

/* ─── Framer variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};
const tagVariant = {
  hidden: { opacity: 0, scale: 0.8, y: -10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "backOut" } },
};
const dividerVariant = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1, transition: { delay: 0.3, duration: 0.7, ease: "easeOut" } },
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

function Projects() {
  const [projects] = useState(demoProjects);
  const [startIndex, setStartIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const isMobile = useIsMobile();

  const visibleCount = isMobile ? 1 : 3;
  const maxStartIndex = projects.length - visibleCount;

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
    setTimeout(() => setIsAutoPlaying(true), 7000);
  };
  const handleNext = () => {
    setIsAutoPlaying(false);
    setStartIndex((prev) => Math.min(maxStartIndex, prev + 1));
    setTimeout(() => setIsAutoPlaying(true), 7000);
  };

  const visibleProjects = projects.slice(startIndex, startIndex + visibleCount);

  return (
    <section id="projects" className={styles.projectsSection} ref={sectionRef}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <motion.div
            className={styles.neonTag}
            variants={tagVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className={styles.tagDot} />
            Projects
          </motion.div>

          <motion.div
            className={styles.divider}
            variants={dividerVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />

          <motion.p
            className={styles.description}
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            I build fast and scalable web applications and have solid experience
            in website cloning, having replicated multiple real-world projects
            with pixel-perfect design.
          </motion.p>
        </div>

        {/* Slider */}
        <div
          className={styles.sliderWrapper}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <button
            onClick={handlePrev}
            className={styles.navButton}
            disabled={startIndex === 0}
            aria-label="Previous projects"
          >
            <ArrowLeft />
          </button>

          <div className={`${styles.projectsContainer} ${isMobile ? styles.projectsContainerMobile : ''}`}>
            <AnimatePresence mode="wait">
              {visibleProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  className={`${styles.projectCard} ${isMobile ? styles.projectCardMobile : ''}`}
                  initial={{ opacity: 0, y: 70, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -70, scale: 0.92 }}
                  transition={{ duration: 0.55, delay: idx * 0.07 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  {/* Image */}
                  <div className={styles.imageWrapper}>
                    <img
                      src={project.image}
                      alt={project.name}
                      className={styles.projectImage}
                      loading="lazy"
                    />
                    <div className={styles.imageOverlay} />

                    {/* Tech stack logos — top-right corner of image */}
                    <div className={styles.techBadge}>
                      {parseTechs(project.language).map((tech) => (
                        <div key={tech} className={styles.techLogo} title={tech}>
                          <TechLogo tech={tech} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={styles.cardContent}>
                    <h3 className={styles.projectTitle}>{project.name}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>

                    <div className={styles.meta}>
                      <span className={styles.language}>{project.language}</span>
                      <span className={styles.stats}>
                        <Star /> {project.stars}
                        &nbsp;•&nbsp;
                        <GitFork /> {project.forks}
                      </span>
                    </div>

                    {/* Action buttons */}
                    <div className={styles.actions}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btnGithub}
                        aria-label={`GitHub repo for ${project.name}`}
                      >
                        <GithubIcon />
                        GitHub
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btnLive}
                        aria-label={`Live demo for ${project.name}`}
                      >
                        <span className={styles.liveDot} />
                        Live Demo
                        <ExternalLink />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button
            onClick={handleNext}
            className={styles.navButton}
            disabled={startIndex >= maxStartIndex}
            aria-label="Next projects"
          >
            <ArrowRight />
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dotsContainer}>
          {projects.map((_, i) => {
            const isActive = isMobile
              ? i === startIndex
              : i >= startIndex && i < startIndex + visibleCount;
            return (
              <button
                key={i}
                className={`${styles.dot} ${isActive ? styles.activeDot : ''}`}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setStartIndex(Math.min(i, maxStartIndex));
                  setTimeout(() => setIsAutoPlaying(true), 7000);
                }}
                aria-label={`Go to project ${i + 1}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Projects;