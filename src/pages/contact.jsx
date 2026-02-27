import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, Calendar, MessageSquare } from "lucide-react";
import "./contact.css";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, delayChildren: 0.2, ease: "easeOut" }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 }
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", event: "", message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, event, message } = formData;
    const text = `New Event Enquiry\n\n Name: ${name}\n Email: ${email}\n Phone: ${phone}\n Event Type: ${event}\nMessage: ${message}`;
    const whatsappNumber = "919629235137";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-page">
      {/* Dynamic Background */}
      <div className="bg-blur-circle-1"></div>
      <div className="bg-blur-circle-2"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="contact-container"
      >
        <motion.div variants={itemVariants} className="contact-header">
          <span className="contact-badge">Contact Us</span>
          <h2>Let's Work Together</h2>
          <p>Fill out the form below and Ragu Clicks will get back to you shortly.</p>
        </motion.div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <motion.div variants={itemVariants} className="input-wrapper">
              <User className="input-icon" size={18} />
              <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
            </motion.div>

            <motion.div variants={itemVariants} className="input-wrapper">
              <Mail className="input-icon" size={18} />
              <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
            </motion.div>

            <motion.div variants={itemVariants} className="input-wrapper">
              <Phone className="input-icon" size={18} />
              <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} />
            </motion.div>

            <motion.div variants={itemVariants} className="input-wrapper">
              <Calendar className="input-icon" size={18} />
              <input type="text" name="event" placeholder="Event Type" onChange={handleChange} />
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="input-wrapper full-width">
            <MessageSquare className="input-icon textarea-icon" size={18} />
            <textarea name="message" placeholder="How can we help you?" rows="4" onChange={handleChange}></textarea>
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="modern-submit-btn"
          >
            <span>Send Message</span>
            <Send size={18} />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;