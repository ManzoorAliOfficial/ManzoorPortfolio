import React, { useRef } from 'react';
import styles from './Skills.module.css';
import { motion, useInView } from "framer-motion";
import { SkullIcon } from 'lucide-react';

/* ── Animation Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const tagVariant = {
  hidden: { opacity: 0, scale: 0.8, y: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "backOut" },
  },
};

const dividerVariant = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { delay: 0.3, duration: 0.7, ease: "easeOut" },
  },
};

/* ── Hook: triggers animation when element scrolls into view ── */
function useScrollInView(threshold = 0.15) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  return { ref, inView };
}

const Skills = () => {

  const { ref: sectionRef, inView: sectionInView } = useScrollInView(0.1);

  return (
    <section
      ref={sectionRef}   // ✅ FIXED
      id="skills"
      className={styles.skillsSection}
    >
      <div className={styles.skillsContainer}>

        {/* ── Header ── */}
        <div className={styles.header}>

          {/* Neon tag */}
          <motion.div
            className={styles.neonTag}
            variants={tagVariant}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
          >
            <span className={styles.tagDot} />
            Skills & Technologies
          </motion.div>

          {/* Divider */}
          <motion.div
            className={styles.divider}
            variants={dividerVariant}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
          />

          

          {/* Description */}
          <motion.p
            className={styles.description}
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
          >
           I build fast and scalable web applications and have solid experience in website cloning, having replicated multiple real-world projects with pixel-perfect design.
          </motion.p>
        </div>
  {/* Skills Grid */}
        <div className={styles.skillsGrid}>
          
          {/* HTML5 */}
          <div className={styles.skillItem}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 200 200" fill="#E34F26">
                <path d="M30 20 L45 170 L100 185 L155 170 L170 20 Z"/>
                <path fill="#EF652A" d="M100 35 L100 165 L140 155 L150 45 Z"/>
                <path fill="#FFFFFF" d="M70 60 L75 110 L100 115 L125 110 L130 85 H85 L88 70 H130 L135 50 H65 Z"/>
                <path fill="#FFFFFF" d="M70 125 L73 140 L100 150 L127 140 L130 125 H100 L73 125 Z"/>
              </svg>
            </div>
            <p className={styles.skillName}>HTML</p>
          </div>

          {/* CSS3 */}
          <div className={styles.skillItem}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 200 200" fill="#1572B6">
                <path d="M30 20 L45 170 L100 185 L155 170 L170 20 Z"/>
                <path fill="#33A9DC" d="M100 35 L100 165 L140 155 L150 45 Z"/>
                <path fill="#FFFFFF" d="M70 60 L75 110 L100 115 L125 110 L130 85 H85 L88 70 H130 L135 50 H65 Z"/>
              </svg>
            </div>
            <p className={styles.skillName}>CSS</p>
          </div>
{/* Tailwind CSS */}
<div className={styles.skillItem}>
  <div className={styles.iconWrapper}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      viewBox="0 0 48 48"
    >
      <path
        fill="#38BDF8"
        d="M24 16c-4 0-6 2-8 6 2-2 4-3 6-3 2 0 3 1 5 3 2 2 4 3 7 3 4 0 6-2 8-6-2 2-4 3-6 3-2 0-3-1-5-3-2-2-4-3-7-3z"
      />
      <path
        fill="#0EA5E9"
        d="M16 24c-4 0-6 2-8 6 2-2 4-3 6-3 2 0 3 1 5 3 2 2 4 3 7 3 4 0 6-2 8-6-2 2-4 3-6 3-2 0-3-1-5-3-2-2-4-3-7-3z"
      />
    </svg>
  </div>
  <p className={styles.skillName}>Tailwind CSS</p>
</div>


          {/* JavaScript */}
          <div className={styles.skillItem}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 200 200">
                <rect width="200" height="200" rx="30" fill="#F7DF1E"/>
                <text x="100" y="135" fontFamily="Arial Black, sans-serif" fontSize="95" fill="#000" textAnchor="middle" fontWeight="900">JS</text>
              </svg>
            </div>
            <p className={styles.skillName}>JAVASCRIPT</p>
          </div>


{/* React */}
<div className={styles.skillItem}>
  <div className={styles.iconWrapper}>
    <svg
      width="70"
      height="70"
      viewBox="0 0 841.9 595.3"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Atom Orbits */}
      <g fill="none" stroke="#61DAFB" strokeWidth="30">
        <ellipse cx="420.9" cy="296.5" rx="250" ry="100"/>
        <ellipse cx="420.9" cy="296.5" rx="250" ry="100" transform="rotate(60 420.9 296.5)"/>
        <ellipse cx="420.9" cy="296.5" rx="250" ry="100" transform="rotate(120 420.9 296.5)"/>
      </g>

      {/* Center Dot */}
      <circle cx="420.9" cy="296.5" r="40" fill="#61DAFB"/>
    </svg>
  </div>

  <p className={styles.skillName}>React</p>
</div>


          {/* GitHub */}
          <div className={styles.skillItem}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577 0-.285-.01-1.044-.015-2.049-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.652 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <p className={styles.skillName}>GITHUB</p>
          </div>

          {/* Node.js */}
          <div className={styles.skillItem}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="75" height="70" viewBox="0 0 600 360" fill="#3C873A">
                <path d="M100 80 L200 20 L300 80 L400 20 L500 80 L550 140 L500 260 L400 200 L300 260 L200 200 L100 260 Z"/>
                <text x="325" y="240" fontFamily="Arial Black, sans-serif" fontSize="85" fill="#ffffff" textAnchor="middle" fontWeight="bold">node</text>
              </svg>
            </div>
            <p className={styles.skillName}>NODE JS</p>
          </div>

          {/* Firebase */}
          <div className={styles.skillItem}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
                <path fill="#FFCA28" d="M12 2L2 21h20L12 2z"/>
                <path fill="#F57C00" d="M12 2L22 21H12z"/>
              </svg>
            </div>
            <p className={styles.skillName}>FIREBASE</p>
          </div>

          {/* MongoDB */}
          <div className={styles.skillItem}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 200 200" fill="#00ED64">
                <path d="M100 40 Q55 70 60 120 Q70 160 100 170 Q130 160 140 120 Q145 70 100 40 Z"/>
                <path fill="#ffffff" d="M100 55 Q75 80 78 115 Q85 140 100 150 Q115 140 122 115 Q125 80 100 55 Z"/>
              </svg>
            </div>
            <p className={styles.skillName}>MONGODB</p>
          </div>

          {/* Java */}
      
    <div className={styles.skillItem}>
  <div className={styles.iconWrapper}>
    <svg width="70" height="70" viewBox="0 0 200 200">
      <rect width="200" height="200" rx="30" fill="#EA2D2E" />

      <path
        fill="#fff"
        d="M100 50c5 10-5 15-5 25s10 10 10 20-10 15-20 25c15-5 30-15 30-30 0-10-10-15-10-25s10-10-5-15z"
      />

      <text x="100" y="160" fontSize="28" fill="#fff" textAnchor="middle" fontWeight="bold">
        Java
      </text>
    </svg>
  </div>
  <p className={styles.skillName}>Java</p>
</div>
{/* Data Entry Skill */}

<div className={styles.skillItem}>
  <div className={styles.iconWrapper}>
    <svg width="70" height="70" viewBox="0 0 200 200">
      <rect width="200" height="200" rx="30" fill="#22C55E" />

      <rect x="40" y="70" width="120" height="50" fill="#fff" rx="5"/>
      <rect x="50" y="80" width="10" height="10" fill="#22C55E"/>
      <rect x="70" y="80" width="10" height="10" fill="#22C55E"/>
      <rect x="90" y="80" width="10" height="10" fill="#22C55E"/>

      <text x="100" y="160" fontSize="24" fill="#fff" textAnchor="middle" fontWeight="bold">
        Data
      </text>
    </svg>
  </div>
  <p className={styles.skillName}>Data Entry</p>
</div>
{/* OOP Skill */}

<div className={styles.skillItem}>
  <div className={styles.iconWrapper}>
    <svg width="70" height="70" viewBox="0 0 200 200">
      <rect width="200" height="200" rx="30" fill="#8B5CF6" />

      <rect x="50" y="50" width="30" height="30" fill="#fff"/>
      <rect x="120" y="50" width="30" height="30" fill="#fff"/>
      <rect x="50" y="120" width="30" height="30" fill="#fff"/>

      <line x1="80" y1="65" x2="120" y2="65" stroke="#fff" strokeWidth="3"/>
      <line x1="65" y1="80" x2="65" y2="120" stroke="#fff" strokeWidth="3"/>

      <text x="100" y="170" fontSize="26" fill="#fff" textAnchor="middle" fontWeight="bold">
        OOP
      </text>
    </svg>
  </div>
  <p className={styles.skillName}>OOP</p>
</div>
{/* Python Skill */}

<div className={styles.skillItem}>
  <div className={styles.iconWrapper}>
    <svg width="70" height="70" viewBox="0 0 200 200">
      <rect width="200" height="200" rx="30" fill="#3776AB" />

      <circle cx="80" cy="80" r="25" fill="#FFD43B"/>
      <circle cx="120" cy="120" r="25" fill="#FFD43B"/>

      <text x="100" y="160" fontSize="28" fill="#fff" textAnchor="middle" fontWeight="bold">
        Py
      </text>
    </svg>
  </div>
  <p className={styles.skillName}>Python</p>
</div>
{/* Website Cloning */}
<div className={styles.skillItem}>
  <div className={styles.iconWrapper}>
    <svg width="70" height="70" viewBox="0 0 200 200">

      {/* Background */}
      <rect width="200" height="200" rx="30" fill="#0EA5E9" />

      {/* Back window (clone) */}
      <rect x="50" y="60" width="80" height="60" rx="8" fill="#93C5FD"/>

      {/* Front window */}
      <rect x="70" y="80" width="80" height="60" rx="8" fill="#FFFFFF"/>

      {/* Top bar */}
      <rect x="70" y="80" width="80" height="15" fill="#E5E7EB"/>

      {/* Fake content lines */}
      <rect x="80" y="105" width="60" height="5" fill="#0EA5E9"/>
      <rect x="80" y="115" width="40" height="5" fill="#0EA5E9"/>

      {/* Label */}
      <text
        x="100"
        y="165"
        fontSize="20"
        fill="#fff"
        textAnchor="middle"
        fontWeight="bold"
      >
        Clone
      </text>

    </svg>
  </div>

  <p className={styles.skillName}>Website Cloning</p>
</div>
{/* Next.js */}
<div className={styles.skillItem}>
  <div className={styles.iconWrapper}>
    <svg
      width="70"
      height="70"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Black Circle Background */}
      <circle cx="128" cy="128" r="120" fill="#000" />

      {/* "N" style shape */}
      <path
        d="M80 170V90l70 80V90h26v80l-70-80v80z"
        fill="#fff"
      />
    </svg>
  </div>

  <p className={styles.skillName}>Next.js</p>
</div>

        </div>

      </div>
    </section>
  );
};

export default Skills;