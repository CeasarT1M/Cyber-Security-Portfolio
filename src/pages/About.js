// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';
import './About.sass'; // make sure you have this file

export default function About() {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2>About Me</h2>
        <p>
          I am Timothy Chukwu, a cybersecurity enthusiast passionate about ethical hacking, penetration testing, and digital forensics. 
          <br /><br />
          I enjoy solving security challenges and constantly expanding my skills to stay ahead in the evolving cybersecurity landscape.
        </p>
      </motion.div>
    </section>
  );
}