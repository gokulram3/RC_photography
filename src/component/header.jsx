import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Plus } from "lucide-react";
import "./header.css";

const navItems = [
  { name: "Home", id: "01", path: "/" },
  { name: "Events", id: "02", path: "/events" },
  { name: "Gallery", id: "03", path: "/gallery" },
  { name: "Contact", id: "04", path: "/contact" }
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`ultra-header ${scrolled ? "compact" : ""}`}>
      <div className="nav-glass-container">
        
        {/* 1. BRAND SECTION */}
        <div className="brand-section">
          <Link to="/" className="brand-link">
            <motion.div 
              animate={{ 
                rotate: scrolled ? 360 : 0,
                backgroundColor: scrolled ? "#6366f1" : "rgba(255, 255, 255, 0.05)"
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="brand-icon-wrapper"
            >
              <Camera size={20} color={scrolled ? "#fff" : "#6366f1"} strokeWidth={2} />
            </motion.div>
            <div className="brand-text">
              <span className="brand-main">Ragu</span>
              <span className="brand-sub">Clicks</span>
            </div>
          </Link>
        </div>

        {/* 2. NAVIGATION (Centered) */}
        <nav className="ultra-nav">
          <ul className="nav-list">
            {navItems.map((item, idx) => (
              <li 
                key={item.name}
                onMouseEnter={() => setIsHovered(idx)}
                onMouseLeave={() => setIsHovered(null)}
                className="nav-item-wrapper"
              >
                <Link to={item.path} className="nav-link-item">
                  <div className="link-content">
                    <div className="id-container">
                      <AnimatePresence mode="wait">
                        {isHovered === idx && (
                          <motion.span 
                            key="id"
                            className="nav-id"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.id}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                    <span className={`nav-label ${location.pathname === item.path ? "active" : ""}`}>
                      {item.name}
                    </span>
                  </div>
                  
                  {location.pathname === item.path && (
                    <motion.div 
                      layoutId="active-pill"
                      className="liquid-line"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

       </div>
    </header>
  );
}

export default Header;