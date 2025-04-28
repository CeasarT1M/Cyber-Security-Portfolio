// Skills.jsx
import React from 'react';
import { FaNetworkWired, FaLaptopCode, FaTools, FaShieldAlt, FaRegFileAlt } from 'react-icons/fa';
import './Skills.sass'; // Make sure the path is correct
const Skills = () => {
  const skills = [
    { name: "Networking", icon: <FaNetworkWired /> },
    { name: "Ethical Hacking", icon: <FaLaptopCode /> },
    { name: "SIEM Tools", icon: <FaTools /> },
    { name: "Linux", icon: <FaShieldAlt /> },
    { name: "Cybersecurity Fundamentals", icon: <FaShieldAlt /> },
    { name: "Digital Forensics", icon: <FaRegFileAlt /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <h2>My Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;