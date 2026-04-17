import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import styles from "./Intro.module.css";

const NAME = "CodeWithManzoor";
const ROLE_LINE_1 = "SOFTWARE ENGINEER  ·  FRONTEND DEVELOPER";
const ROLE_LINE_2 = "CRAFTING METHODICAL, IMPACTFUL, & SECURE CODE";

const Intro = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showScanline, setShowScanline] = useState(false);

  useEffect(() => {
    // Trigger scanline glitch effect mid-way
    const scanTimer = setTimeout(() => setShowScanline(true), 900);
    const hideTimer = setTimeout(() => setShowScanline(false), 1100);

    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 3600);

    return () => {
      clearTimeout(scanTimer);
      clearTimeout(hideTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.intro}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* ── Ambient radial glow ── */}
          <motion.div
            className={styles.ambientGlow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          />

          {/* ── Edge vignette glow ── */}
          <motion.div
            className={styles.edgeGlow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />

          {/* ── Vertical grid lines ── */}
          <div className={styles.gridLines} aria-hidden="true">
            {[...Array(18)].map((_, i) => (
              <motion.span
                key={i}
                className={styles.line}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{
                  delay: 0.02 + i * 0.012,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* ── Horizontal scanline glitch ── */}
          <AnimatePresence>
            {showScanline && (
              <motion.div
                className={styles.scanline}
                initial={{ top: "0%" }}
                animate={{ top: "110%" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18, ease: "linear" }}
              />
            )}
          </AnimatePresence>

          {/* ── Lightning flash ── */}
          <motion.div
            className={styles.lightning}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.55, 0, 0.25, 0, 0.08, 0] }}
            transition={{
              delay: 0.95,
              duration: 0.45,
              times: [0, 0.08, 0.18, 0.35, 0.5, 0.75, 1],
            }}
          />

          {/* ── Corner brackets ── */}
          {["tl", "tr", "bl", "br"].map((pos, i) => (
            <motion.div
              key={pos}
              className={`${styles.bracket} ${styles[pos]}`}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 0.35, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.07, duration: 0.5 }}
              aria-hidden="true"
            />
          ))}

          {/* ── Name ── */}
          <motion.h1
            className={styles.name}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.045, delayChildren: 0.15 },
              },
            }}
          >
            {Array.from(NAME).map((char, i) => (
              <motion.span
                key={i}
                className={styles.gradientChar}
                style={{ display: "inline-block", whiteSpace: "pre" }}
                variants={{
                  hidden: { opacity: 0, y: 28, rotateX: -40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { type: "spring", stiffness: 200, damping: 18 },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* ── Divider line ── */}
          <motion.div
            className={styles.divider}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1.35, duration: 0.55, ease: "easeOut" }}
          />

          {/* ── Role text ── */}
          <motion.div
            className={styles.role}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
          >
            <span>{ROLE_LINE_1}</span>
            <br />
            <span>{ROLE_LINE_2}</span>
          </motion.div>

          {/* ── Progress bar ── */}
          <motion.div
            className={styles.progressBar}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.1, duration: 3.2, ease: "linear" }}
          />

          {/* ── Pulsing status dot ── */}
          <motion.div
            className={styles.dot}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.4, type: "spring" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;