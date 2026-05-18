import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './Navbar.module.css'

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
            document.documentElement.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
            document.documentElement.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
            document.documentElement.style.overflow = ''
        }
    }, [isMobileMenuOpen])

    return (
        <motion.nav
            className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`container ${styles.navContainer}`}>

                {/* VIP Logo */}
                <motion.a
                    href="#home"
                    className={styles.logo}
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    aria-label="MK Home"
                >
                    <div className={styles.logoRing}>
                        {/* Spinning dashed ring */}
                        <svg className={styles.ringSvg} viewBox="0 0 44 44" aria-hidden="true">
                            <circle cx="22" cy="22" r="20"
                                stroke="var(--primary)"
                                strokeWidth="1.5"
                                fill="none"
                                strokeDasharray="4 6"
                                opacity="0.7"
                            />
                            {/* Corner accent squares */}
                            <rect x="20.5" y="1"  width="3" height="3" rx="1" fill="var(--primary)" opacity="0.9"/>
                            <rect x="20.5" y="40" width="3" height="3" rx="1" fill="var(--primary)" opacity="0.9"/>
                            <rect x="1"    y="20.5" width="3" height="3" rx="1" fill="var(--primary)" opacity="0.9"/>
                            <rect x="40"   y="20.5" width="3" height="3" rx="1" fill="var(--primary)" opacity="0.9"/>
                        </svg>
                        <div className={styles.logoInner}>
                            <span className={styles.logoLetters}>
                                <span className={styles.logoM}>M</span>
                                <span className={styles.logoK}>K</span>
                            </span>
                        </div>
                    </div>
                    <div className={styles.logoWordmark}>
                        
                    </div>
                </motion.a>

                {/* Desktop Nav */}
                <ul className={styles.navLinks}>
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={link.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <a href={link.href} className={styles.navLink}>
                                <span className={styles.linkNumber}>0{index + 1}.</span>
                                {link.name}
                            </a>
                        </motion.li>
                    ))}
                </ul>

                {/* CTA */}
                <motion.a
                    href="#contact"
                    className={styles.ctaBtn}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                    <span className={`${styles.ctaCorner} ${styles.ctaCornerTL}`} />
                    <span className={`${styles.ctaCorner} ${styles.ctaCornerTR}`} />
                    <span className={`${styles.ctaCorner} ${styles.ctaCornerBL}`} />
                    <span className={`${styles.ctaCorner} ${styles.ctaCornerBR}`} />
                    <span className={styles.ctaText}>Hire Me</span>
                    <span className={styles.ctaArrow}>
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M2 6H10M6.5 2.5L10 6L6.5 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </motion.a>

                {/* Mobile Menu Button */}
                <button
                    className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.active : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
                initial={false}
                animate={isMobileMenuOpen ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <motion.ul
                    className={styles.mobileLinks}
                    initial={false}
                    animate={isMobileMenuOpen ? { y: 0, opacity: 1 } : { y: -16, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                    {navLinks.map((link, index) => (
                        <li key={link.name}>
                            <a href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                                {link.name}
                                <span className={styles.linkNumber}>0{index + 1}</span>
                            </a>
                        </li>
                    ))}
                    <li style={{ width: '100%', listStyle: 'none' }}>
                        <a
                            href="#contact"
                            className={styles.mobileCta}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Start Project
                        </a>
                    </li>
                </motion.ul>
            </motion.div>
        </motion.nav>
    )
}

export default Navbar