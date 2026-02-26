import React from "react";
import { motion } from "framer-motion";
import { Camera, ArrowRight, Zap, Sparkles, Heart, Users, Briefcase, GraduationCap } from "lucide-react";
import "./Events.css";

function Events() {
  const events = [
    {
      title: "Wedding Photography",
      desc: "Capturing the sacred silence and the loud joy of your forever union.",
      img: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200",
      icon: <Heart size={20} />,
    },
    {
      title: "Birthday Parties",
      desc: "Vibrant color and raw energy preserved in every frame.",
      img: "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=1200",
      icon: <Sparkles size={20} />,
    },
    {
      title: "Corporate Events",
      desc: "Clean, professional, and powerful imagery for your brand's milestone.",
      img: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200",
      icon: <Briefcase size={20} />,
    },
    {
      title: "Engagement Shoots",
      desc: "The beginning of a legacy, captured in cinematic romance.",
      img: "https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1200",
      icon: <Camera size={20} />,
    },
    {
      title: "College & Cultural",
      desc: "Fast-paced coverage for the youth and the stage.",
      img: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1200",
      icon: <GraduationCap size={20} />,
    },
    {
      title: "Social Gatherings",
      desc: "Intimate family moments turned into timeless heirlooms.",
      img: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
      icon: <Users size={20} />,
    },
  ];

  const revealVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="events-page-v3">
      {/* 1. KINETIC HERO */}
      <section className="events-hero-v3">
        <motion.div 
          className="hero-bg-v3"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        />
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hero-text-v3"
          >
            <span className="hero-tag">PREMIUM SERVICES</span>
            <h1>CRAFTING <i>STORIES</i></h1>
            <p>From sacred rituals to corporate milestones, we capture the soul of every event.</p>
          </motion.div>
        </div>
      </section>

      {/* 2. STAGGERED EVENT GRID */}
      <section className="events-section-v3">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            className="section-label-center"
          >
            01. CORE EXPERTISE
          </motion.h2>
          
          <div className="events-grid-v3">
            {events.map((event, i) => (
              <motion.div 
                className="event-card-v3" 
                key={i}
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -15 }}
              >
                <div className="event-img-wrap-v3">
                  <img src={event.img} alt={event.title} />
                  <div className="card-overlay-v3" />
                  <div className="card-icon-v3">{event.icon}</div>
                </div>
                
                <div className="event-info-v3">
                  <h3>{event.title}</h3>
                  <p>{event.desc}</p>
                  <motion.button 
                    className="details-btn-v3"
                    whileHover={{ x: 10 }}
                  >
                    View Details <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MAGNETIC CTA SECTION */}
      <section className="events-cta-v3">
        <div className="container">
          <motion.div 
            className="cta-glass-v3"
            whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
          >
            <Zap className="cta-bolt" size={40} />
            <h2>Ready to make it <i>timeless?</i></h2>
            <p>Limited slots available for the 2026 season. Let’s talk about your vision.</p>
            <motion.button 
              className="cta-btn-v3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Check Availability
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Events;