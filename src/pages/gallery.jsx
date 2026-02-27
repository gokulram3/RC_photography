import React from "react";
import { motion } from "framer-motion";
import { Expand, ArrowUpRight, Instagram, Camera } from "lucide-react";
import "./gallery.css";

const images = [
  // Row 1: Wide (4) + Standard (2) = 6
  { url: "https://i.pinimg.com/736x/11/54/2e/11542e6c6a3b9c31ed267ce32b8c5d64.jpg", size: "wide" },
  { url: "https://i.pinimg.com/1200x/14/92/e8/1492e84057f6115aac47fde5e0f51266.jpg", tag: "Tradition", size: "standard" },
  
  // Row 2: Tall (2) + Standard (2) + Standard (2) = 6
  { url: "https://i.pinimg.com/1200x/bf/31/33/bf3133716d75541ae59c6a7d7cf042c2.jpg", tag: "Reception", size: "tall" },
  { url: "https://i.pinimg.com/1200x/55/ed/0e/55ed0e03655622a0b281f9424b69f132.jpg", tag: "The Kiss", size: "standard" },
  { url: "https://i.pinimg.com/736x/b9/61/84/b96184c4df913ea505cce8dfc7f4f31a.jpg", tag: "The Ring", size: "standard" },
  
  // Row 3: Wide (4) + Standard (2) = 6
  { url: "https://i.pinimg.com/1200x/52/f6/61/52f66140b9017a8b55c6bb7660aa5074.jpg", tag: "Candids", size: "wide" },
  { url: "https://i.pinimg.com/1200x/27/21/fe/2721fe86c3bdd7e64912f766b8af01d6.jpg", tag: "The Groom", size: "standard" },
  
  // Row 4: Standard (2) + Tall (2) + Standard (2) = 6
  { url: "https://i.pinimg.com/736x/69/b5/4a/69b54a58b187d32f2a210b821958e5f6.jpg", tag: "Portraits", size: "standard" },
  { url: "https://i.pinimg.com/736x/0a/8b/8b/0a8b8baca0cce4ffb8e6400f117dd795.jpg", tag: "Cinematic", size: "tall" },
  { url: "https://i.pinimg.com/736x/74/31/82/743182978f285764afb5b4f0332f94bc.jpg", tag: "Celebration", size: "standard" },
  { url: "https://i.pinimg.com/1200x/6c/ed/20/6ced20f0e390a605115923fbced2cb37.jpg", tag: "Warm", size: "standard" },

  // candid
  
  { url: "https://i.pinimg.com/1200x/02/65/95/026595ce65a670980994bd88f583678c.jpg", tag: "The Bride", size: "wide" },
  { url: "https://i.pinimg.com/736x/ab/a5/a7/aba5a7c85ada41cbf77e53fbc235a282.jpg", tag: "Tradition", size: "standard" },
  
  // Row 2: Tall (2) + Standard (2) + Standard (2) = 6
  { url: "https://i.pinimg.com/736x/d5/25/a4/d525a4ba3f8dfb41163e1c99b29992af.jpg", tag: "Reception", size: "tall" },
  { url: "https://i.pinimg.com/736x/c0/a5/00/c0a500cb7961f32d6fba0cdd5a938e42.jpg", tag: "The Kiss", size: "standard" },
  { url: "https://i.pinimg.com/736x/50/56/67/5056670dded51dc91eb340b38f7a23c0.jpg", tag: "The Ring", size: "standard" },
  
  // Row 3: Wide (4) + Standard (2) = 6
  { url: "https://i.pinimg.com/1200x/3d/15/34/3d1534aa24abc4b6ab78d6b02b0165db.jpg", tag: "Candids", size: "wide" },
  { url: "https://i.pinimg.com/1200x/46/7b/5f/467b5f2ebb712681358c99f19a151694.jpg", tag: "The Groom", size: "standard" },
  
  // Row 4: Standard (2) + Tall (2) + Standard (2) = 6
  { url: "https://i.pinimg.com/1200x/36/4b/b5/364bb5717d421ce5b40d9deb721d2956.jpg", tag: "Portraits", size: "standard" },
  { url: "https://i.pinimg.com/736x/0f/07/4c/0f074cde8d3e0c5243ba90aa3b81bcf5.jpg", tag: "Cinematic", size: "tall" },
  { url: "https://i.pinimg.com/736x/ce/d5/4a/ced54ae230e9a8674b930c3a7094990e.jpg", tag: "Celebration", size: "standard" },
  { url: "https://i.pinimg.com/736x/a3/67/a6/a367a63f24725d108326592bcd05aa5e.jpg", tag: "Celebration", size: "standard" },
];

function Gallery() {
  // Enhanced Entrance Animation: Scale + Reveal
  const imageReveal = {
    hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0, scale: 0.8 },
    visible: { 
      clipPath: "inset(0% 0% 0% 0%)", 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <div className="gallery-v4">
      <section className="hero-v4">
        <motion.div 
          className="hero-text-wrap"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div 
             initial={{ width: 0 }} 
             animate={{ width: "80px" }} 
             className="hero-line" 
          />
          <span className="hero-category">SELECTED WORKS • 2026</span>
          <h1 className="glitch-text">
            MOMENTS <br /> <span>IN MOTION</span>
          </h1>
        </motion.div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 15, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <div className="mouse-wheel" />
          <span>SCROLL</span>
        </motion.div>
      </section>

      <section className="grid-v4">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            className={`gallery-item ${img.size}`}
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -10 }} /* Extra hover lift */
          >
            <div className="item-inner">
              <div className="image-wrapper">
                <img src={img.url + "?q=80&w=1200"} alt="Wedding Photography" />
                <div className="hover-filter" />
              </div>
              
              <div className="content-reveal">
                <div className="reveal-top">
                  <span className="count">0{i + 1}</span>
                  <span className="tag">{img.tag}</span>
                </div>
                <div className="reveal-bottom">
                  <h3>Cinema Archive</h3>
                  <motion.button 
                    whileHover={{ scale: 1.2, rotate: 45 }} 
                    className="expand-btn"
                  >
                    <ArrowUpRight size={20} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="social-strip">
        <div className="strip-content">
          {[1,2,3,4].map((n) => (
            <div key={n} className="strip-group">
              <span>FOLLOW THE JOURNEY</span>
              <Instagram size={18} />
              <span className="handle">@ragu_clicks</span>
              <div className="dot" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;