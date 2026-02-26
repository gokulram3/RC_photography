import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Instagram, Twitter, Mail, ArrowUpRight, ArrowUp, Zap, ArrowRight } from "lucide-react";
import "./footer.css";

function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  // Skew effect based on scroll speed
  const skewX = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const xTranslate = useTransform(scrollYProgress, [0, 1], [100, -800]);
  const smoothX = useSpring(xTranslate, { stiffness: 60, damping: 20 });

  const currentYear = new Date().getFullYear();

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <footer ref={container} className="footer-v3">
      <div className="noise-overlay" />
      
      {/* 1. KINETIC RUNNING TEXT WITH SKEW */}
      <div className="marquee-wrapper">
        <motion.div style={{ x: smoothX, skewX }} className="marquee-inner">
          <h2 className="outline-text">
            RC STUDIO • THE ART OF LIGHT • RC STUDIO • THE ART OF LIGHT •
          </h2>
        </motion.div>
      </div>

      <motion.div 
        className="footer-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="footer-main-grid">
          
          {/* BRANDING: TEXT REVEAL ANIMATION */}
          <motion.div className="brand-col" variants={itemVariants}>
            <div className="reveal-mask">
              <motion.div className="brand-header">
                <Zap size={24} className="accent-icon" />
                <span className="studio-tag">EST. 2024</span>
              </motion.div>
              <h3 className="huge-footer-logo">RC<span>/</span>PHOTOGRAPHY</h3>
            </div>
            <p className="minimal-bio">
              We specialize in cinematic storytelling and archival wedding photography. 
              Currently accepting global commissions.
            </p>
          </motion.div>

          {/* NAV: BOLD LINKS WITH STRIKE-THRU HOVER */}
          <motion.div className="nav-col" variants={itemVariants}>
            <span className="label">DIRECTORY</span>
            <div className="nav-links">
              {["Gallery", "Archives", "Experience", "Contact"].map((link) => (
                <motion.a 
                  key={link} 
                  href={`#${link}`} 
                  className="strike-link"
                  whileHover={{ x: 10 }}
                >
                  {link}
                  <span className="hover-line" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA: GLASS CARD WITH FLOATING ELEMENTS */}
          <motion.div className="cta-col" variants={itemVariants}>
            <div className="floating-card">
              <div className="card-top">
                <div className="status-dot" />
                <span>ACTIVE BOOKINGS</span>
              </div>
              <h4>Let's capture <br />your legacy.</h4>
              <motion.button 
                className="magnetic-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Project <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM BAR: SYMMETRY DESIGN */}
        <div className="footer-bottom-v3">
          <div className="left-meta">
            <span>©{currentYear} RC</span>
            <div className="separator" />
            <span>TAMIL NADU, IN</span>
          </div>
          
          <div className="social-links-minimal">
            {[Instagram, Twitter, Mail].map((Icon, i) => (
              <motion.a 
                key={i} 
                href="#" 
                whileHover={{ y: -5, color: "#6366f1" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          <motion.button 
            className="scroll-top-pill"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -5, backgroundColor: "#fff", color: "#000" }}
          >
            UP <ArrowUp size={14} />
          </motion.button>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;