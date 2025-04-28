import React from 'react';
import './Projects.sass';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h1>Projects</h1>
        <div className="projects-grid">
         
          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.8
            }}
          >
            <h2>Project One</h2>
            <p>Brief description about Project One.</p>
          </motion.div>

          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.9
            }}
          >
            <h2>Project Two</h2>
            <p>Brief description about Project Two.</p>
          </motion.div>

          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 5,
              duration: 1
            }}
          >
            <h2>Project Three</h2>
            <p>Brief description about Project Three.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}