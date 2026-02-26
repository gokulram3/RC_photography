import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./home.css";

// Advanced Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const serviceVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

function Home() {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        {/* Animated Background Orbs */}
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>

        <motion.div 
          className="hero-overlay"
          initial={{ opacity: 0, y: 30, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.h1 
            initial={{ letterSpacing: "10px", opacity: 0 }}
            animate={{ letterSpacing: "-1px", opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Capture Beautiful Wedding Moments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Professional wedding photography for unforgettable celebrations.
          </motion.p>

          <div className="hero-buttons">
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <Link to="/gallery" className="btn primary">View Gallery</Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <Link to="/contact" className="btn secondary">Book Now</Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <motion.section 
        className="home-about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
      >
        <div className="container-inner">
            <motion.h2 whileHover={{ scale: 1.02 }}>About Our Photography</motion.h2>
            <p>
              We specialize in wedding, engagement, and event photography.
              Our team captures candid emotions with elegance and creativity.
            </p>
        </div>
      </motion.section>

      {/* SERVICES SECTION */}
      <motion.section 
        className="home-services"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {[
          { title: "Wedding Photography", desc: "Full-day coverage with cinematic style." },
          { title: "Pre-Wedding Shoots", desc: "Romantic outdoor and studio sessions." },
          { title: "Event Coverage", desc: "Birthdays, receptions, and corporate events." }
        ].map((service, index) => (
          <motion.div 
            key={index} 
            className="service-card" 
            variants={serviceVariants}
            whileHover={{ 
                y: -15, 
                rotateX: 5,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(90, 93, 235, 0.3)" 
            }}
          >
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}

export default Home;