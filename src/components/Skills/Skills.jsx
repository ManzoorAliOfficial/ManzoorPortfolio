import React from 'react'
import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'
import SkillGraph from './SkillGraph'
import styles from './Skills.module.css'

// Skill data for mobile grid view
const skillCategories = [
  {
    id: 'dev',
    label: 'Development',
    color: '#00d4ff',
    skills: [
      'Java',
      'Python',
      'C++',
      'OOP',
      'Problem Solving',
      'React',
      'Node.js',
      'Tailwind CSS',
      'JavaScript',
      'SQL'
    ]
  },
  {
    id: 'software-engineer',
    label: 'Software Engineer',
    color: '#00ff88',
    skills: [
      'Pentesting',
      'Web App Security',
      'Network Security',
      'Wireshark',
      'Burp Suite',
      'Nmap',
      'Metasploit'
    ]
  },
  {
    id: 'tools',
    label: 'Tools & Ops',
    color: '#bd00ff',
    skills: [
      'Git',
      'Linux',
      'Docker',
      'VS Code',
      'Problem Debugging',
      'CI/CD Basics'
    ]
  }
]

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '30px' }}>
          <span className="section-tag">
            <Cpu size={14} style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'text-bottom' }} aria-hidden="true" />
            Technical Arsenal
          </span>
          <h2 className="section-title">
            <span className="gradient-text">Skill Matrix</span>
          </h2>
          <p className="section-subtitle">
            Visualizing my core competencies and toolset
          </p>
        </div>

        {/* Desktop Complex Graph */}
        <SkillGraph />

        {/* Mobile Grid View */}
        <div className={styles.mobileSkillsGrid}>
          {skillCategories.map((category) => (
            <React.Fragment key={category.id}>
              {/* Category Header */}
              <motion.div
                className={styles.mobileCategory}
                style={{ borderColor: category.color }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3
                  className={styles.mobileCategoryTitle}
                  style={{ color: category.color }}
                >
                  {category.label}
                </h3>
              </motion.div>

              {/* Skills */}
              {category.skills.map((skill, index) => {
                const isOddCount = category.skills.length % 2 !== 0
                const isLastItem = index === category.skills.length - 1
                const shouldCenter = isOddCount && isLastItem

                return (
                  <motion.div
                    key={`${category.id}-${skill}`}
                    className={styles.mobileSkillBadge}
                    style={{
                      borderColor: category.color,
                      color: category.color,
                      boxShadow: `0 0 12px ${category.color}40`,
                      ...(shouldCenter ? { gridColumn: 'span 2', width: '50%', margin: '0 auto' } : {})
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {skill}
                  </motion.div>
                )
              })}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Background ambiance */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 50% 50%, transparent 0%, #000 85%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />
    </section>
  )
}

export default Skills
