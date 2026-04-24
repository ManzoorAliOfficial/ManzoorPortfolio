import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

// SVG Icons
const ArrowRight = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const Terminal = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

// Roles for typewriter
const roles = [
  "Frontend Developer",
  "Software Engineer",
  "Website Cloner",
  "UI/UX Enthusiast",
  "React Developer",
  "Tailwind CSS Specialist",
  "Penetration Tester",
  "Problem Solver",
];

// Hero quotes
const heroQuotes = [
  `Hi, I'm Manzoor Ali
Software Engineer & Frontend Developer
I build modern, responsive, and user-friendly web applications,
and I specialize in website cloning for learning and rapid development.`,
];

// Holo Terminal
const HoloTerminal = () => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const codeLines = [
    {
      text: "> Initializing developer environment...",
      color: "#888",
      delay: 0,
    },
    { text: "> Target: Manzoor.dev", color: "#00ff88", delay: 100 },
    { text: "", color: "#fff", delay: 50 },
    { text: "class SoftwareEngineer:", color: "#ff79c6", delay: 80 },
    { text: "    def __init__(self):", color: "#8be9fd", delay: 80 },
    { text: '        self.name = "Manzoor Ali"', color: "#f1fa8c", delay: 60 },
    {
      text: '        self.role = "Frontend Developer"',
      color: "#f1fa8c",
      delay: 60,
    },
    {
      text: '        self.skills = ["React", "Tailwind CSS", "Website Cloning", "UI/UX"]',
      color: "#f1fa8c",
      delay: 60,
    },
    { text: '        self.status = "ACTIVE"', color: "#50fa7b", delay: 60 },
    { text: "", color: "#fff", delay: 50 },
    {
      text: "> Initializing website clone project...",
      color: "#00ff88",
      delay: 100,
    },
    {
      text: "> Project ready. Components loaded ✓",
      color: "#50fa7b",
      delay: 150,
    },
    {
      text: "> Security scan optional — best practices followed",
      color: "#00ff88",
      delay: 100,
    },
    { text: "> Deployment ready 🚀", color: "#ffb86c", delay: 150 },
  ];

  // Cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(
      () => setShowCursor((prev) => !prev),
      530,
    );
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing animation
  useEffect(() => {
    if (currentLine >= codeLines.length) return;

    const line = codeLines[currentLine];

    if (currentChar < line.text.length) {
      const timeout = setTimeout(
        () => setCurrentChar((prev) => prev + 1),
        30 + Math.random() * 20,
      );
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, { ...line }]);
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }, line.delay);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar]);

  return (
    <div className={styles.holoTerminal}>
      <div className={`${styles.cornerAccent} ${styles.topLeft}`} />
      <div className={`${styles.cornerAccent} ${styles.topRight}`} />
      <div className={`${styles.cornerAccent} ${styles.bottomLeft}`} />
      <div className={`${styles.cornerAccent} ${styles.bottomRight}`} />

      <div className={styles.holoScanlines} />
      <div className={styles.holoBorder} />

      <div className={styles.holoHeader}>
        <div className={styles.holoHeaderLeft}>
          <span className={styles.holoStatus} />
          <span className={styles.holoTitle}>SYSTEM TERMINAL</span>
        </div>
        <div className={styles.holoHeaderRight}>
          <span>v2.0.26</span>
          <span className={styles.holoTime}>
            {new Date().toLocaleTimeString("en-US", { hour12: false })}
          </span>
        </div>
      </div>

      <div className={styles.holoBody}>
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className={styles.holoLine}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className={styles.lineNumber}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span style={{ color: line.color }}>{line.text}</span>
          </motion.div>
        ))}
        {currentLine < codeLines.length && (
          <div className={styles.holoLine}>
            <span className={styles.lineNumber}>
              {String(lines.length + 1).padStart(2, "0")}
            </span>
            <span style={{ color: codeLines[currentLine].color }}>
              {codeLines[currentLine].text.slice(0, currentChar)}
            </span>
            <span
              className={`${styles.holoCursor} ${showCursor ? styles.visible : ""}`}
            >
              █
            </span>
          </div>
        )}
      </div>

      <div className={styles.holoFooter}>
        <span className={styles.holoFooterItem}>
          <span className={styles.pulsingDot} /> CONNECTED
        </span>
        <span className={styles.holoFooterItem}>ENCRYPTION: AES-256</span>
        <span className={styles.holoFooterItem}>FIREWALL: ACTIVE</span>
      </div>
    </div>
  );
};

// Radar visualization
const NetworkRadar = () => {
  return (
    <div className={styles.radarContainer}>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={styles.radarCircleWrapper}
          style={{ width: `${i * 100}px`, height: `${i * 100}px` }}
        >
          <motion.div
            className={styles.radarCircleInner}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      ))}
      <motion.div
        className={styles.radarSweep}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 100 + i * 10;
        return (
          <motion.div
            key={i}
            className={styles.networkNode}
            style={{
              left: `calc(50% + ${Math.cos(angle) * radius}px - 3px)`,
              top: `calc(50% + ${Math.sin(angle) * radius}px - 3px)`,
            }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 2 + i * 0.3,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

// Data stream effect
const DataStream = () => {
  return (
    <div className={styles.dataStream}>
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className={styles.streamLine}
          style={{ left: `${10 + i * 15}%` }}
          animate={{ y: ["-100%", "100%"], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 2 + Math.random(),
            delay: i * 0.4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [githubStats, setGithubStats] = useState({ repos: 0, stars: 0 });
  const [quoteIndex] = useState(() =>
    Math.floor(Math.random() * heroQuotes.length),
  );
  const [typedQuote, setTypedQuote] = useState("");
  const [quoteTypingComplete, setQuoteTypingComplete] = useState(false);
  const [typingStarted, setTypingStarted] = useState(false);

  const firstName = "Manzoor ";
  const lastName = "Ali";

  useEffect(() => {
    const startDelay = setTimeout(() => setTypingStarted(true), 1000);
    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (!typingStarted) return;
    const quote = heroQuotes[quoteIndex];
    if (typedQuote.length < quote.length) {
      const timeout = setTimeout(
        () => setTypedQuote(quote.slice(0, typedQuote.length + 1)),
        25,
      );
      return () => clearTimeout(timeout);
    } else setQuoteTypingComplete(true);
  }, [typedQuote, quoteIndex, typingStarted]);

  // Fetch GitHub stats
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        const headers = { Accept: "application/vnd.github.v3+json" };
        if (token) headers["Authorization"] = `token ${token}`;
        const response = await fetch(
          "https://api.github.com/users/ManzoorAliOfficial",
          { headers },
        );
        if (response.ok) {
          const data = await response.json();
          setGithubStats((prev) => ({ ...prev, repos: data.public_repos }));
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchStats();
  }, []);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () =>
        setDisplayText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentRole.slice(0, prev.length + 1),
        ),
      speed,
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.matrixBg}></div>
      <div className={styles.glowOrb1}></div>
      <div className={styles.glowOrb2}></div>
      <div className="scanline"></div>

      <div className={`container ${styles.heroContainer}`}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={styles.statusBadge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className={styles.statusDot}></span>
            <span>Available for Work</span>
          </motion.div>

          <motion.div
            className={styles.nameWrapper}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className={styles.name}>
              <span className={styles.firstName}>{firstName}</span>
              <span className={styles.lastName}>{lastName}</span>
            </h1>
          </motion.div>

          <motion.div
            className={styles.roleContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className={styles.rolePrefix}>{"> "} </span>
            <span className={styles.role}>{displayText}</span>
            <span className={styles.cursor}></span>
          </motion.div>

          <motion.div
            className={styles.comboWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className={styles.comboCard}>
              <p className={styles.comboPlaceholder} aria-hidden="true">
                {heroQuotes[quoteIndex]}
              </p>
              <p
                className={`${styles.comboText} ${quoteTypingComplete ? styles.comboGlitch : ""}`}
                data-text={typedQuote}
              >
                {typedQuote}
                {!quoteTypingComplete && (
                  <span className={styles.comboCursor}>|</span>
                )}
              </p>
            </div>
          </motion.div>

          <motion.div
            className={styles.buttons}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="#projects"
              className={`btn ${styles.btnPrimary}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Terminal /> View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch <ArrowRight />
            </motion.a>
          </motion.div>

          <motion.div
            className={styles.stats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className={styles.stat}>
              <span className={styles.statNumber}>3.2</span>
              <span className={styles.statLabel}>CGPA</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>LeetCode</span>
            </div>{" "}
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>
                {githubStats.repos || ""}+
              </span>
              <span className={styles.statLabel}>GitHub Repos</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
        >
          <NetworkRadar />
          <DataStream />
          <HoloTerminal />
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className={styles.scrollLine}></div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}

export default Hero;
