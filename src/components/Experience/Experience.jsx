import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useMemo, useState } from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import styles from './Experience.module.css'

/* ── Icons ── */
const Briefcase = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
)

const Calendar = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
)

const Code = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
)

const Star = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
)

const MapPin = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
)

const ExternalLink = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
)

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
)

/* ── Experience Data — CV se ── */
const experiences = [
    {
        id: 0,
        role: "Frontend Developer Intern",
        company: "Ezitech Software House",
        location: "Islamabad",
        date: "Aug 2025 – Nov 2025",
        type: "On-site Internship",
        icon: <Code />,
        color: '#00ff88',
        bullets: [
            "Built 5+ responsive UI components using HTML, CSS, JavaScript, and React.js for production-level projects.",
            "Completed 3 website cloning tasks, replicating real-world sites with 95%+ UI accuracy.",
            "Collaborated with the development team to identify and fix 10+ UI bugs, improving component quality.",
            "Gained hands-on experience with Git version control, code reviews, and agile team workflows.",
        ],
        skills: ["React.js", "JavaScript", "Tailwind CSS", "Git"],
    },
    {
        id: 1,
        role: "Frontend Developer Intern",
        company: "CodeAlpha",
        location: "Remote",
        date: "May 1, 2026 – Jun 1, 2026",
        type: "Remote Internship",
        icon: <Star />,
        color: '#00c8ff',
        bullets: [
            "Working on frontend development tasks using React.js and modern JavaScript.",
            "Building responsive UI components and contributing to real-world web projects.",
            "Collaborating with a remote team using Git workflows and code reviews.",
        ],
        skills: ["React.js", "JavaScript", "CSS3", "Git"],
    },
]

/* ── Education Data ── */
const education = {
    degree: "BS Software Engineering",
    institution: "The Islamia University, Bahawalpur",
    period: "2023 – 2027",
    cgpa: "3.2 / 4.0",
    color: '#d946ef',
}

/* ── Particle Background ── */
const ParticleSystem = () => {
    const particles = useMemo(() => Array.from({ length: 20 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.05,
        duration: Math.random() * 15 + 10,
    })), [])

    return (
        <div className={styles.particleContainer}>
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className={styles.particle}
                    style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, opacity: p.opacity }}
                    animate={{ y: [0, -60, 0], opacity: [p.opacity, p.opacity * 0.4, p.opacity] }}
                    transition={{ duration: p.duration, repeat: Infinity, ease: 'linear' }}
                />
            ))}
        </div>
    )
}

/* ── Experience Card ── */
const ExpCard = ({ exp, index }) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, amount: 0.15 })
    const isEven = index % 2 === 1
    const xStart = isEven ? 60 : -60

    return (
        <div className={styles.timelineItem} ref={ref}>
            <motion.div
                className={styles.expCard}
                style={{ '--cardColor': exp.color }}
                initial={{ opacity: 0, x: xStart, y: 20 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: xStart, y: 20 }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
            >
               

                {/* Role & Company */}
                <h3 className={styles.cardRole}>{exp.role}</h3>
                <p className={styles.cardCompany}>{exp.company}</p>

                {/* Type badge */}
                <span className={styles.typeBadge} style={{ borderColor: `${exp.color}40`, color: exp.color }}>
                    {exp.type}
                </span>

                {/* Bullet points */}
                <ul className={styles.bulletList}>
                    {exp.bullets.map((b, i) => (
                        <li key={i} className={styles.bulletItem}>
                            <span className={styles.bulletDot} style={{ background: exp.color }} />
                            {b}
                        </li>
                    ))}
                </ul>

                {/* Skills */}
                <div className={styles.cardSkills}>
                    {exp.skills.map((skill, i) => (
                        <span key={i} className={styles.skillTag} style={{ borderColor: `${exp.color}40` }}>
                            {skill}
                        </span>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
/* ── Main Component ── */
const Experience = () => {
    return (
        <section id="experience" className={styles.experienceWrapper}>

            {/* Background */}
            <div className={styles.particleContainer}>
                <ParticleSystem />
            </div>

            <div className="container">

                {/* ── Header ── */}
                <ScrollReveal direction="fromBottom" delay="delay100">
                    <div className={styles.sectionHeader}>
                        <span className={styles.tag}>
                            <Briefcase />
                            Experience                        </span>

                    </div>
                </ScrollReveal>

                {/* ── Experience label ── */}
                <ScrollReveal direction="fromBottom">
                    <p className={styles.subLabel}>Work Experience</p>
                </ScrollReveal>

                {/* ── Timeline ── */}
                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <ExpCard key={exp.id} exp={exp} index={index} />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Experience