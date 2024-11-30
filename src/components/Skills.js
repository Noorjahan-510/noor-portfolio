import React from "react";
import './Skills.css';
import javaLogo from './assets/java-logo.png'; // Replace with the actual path
import springBootLogo from './assets/spring-boot-logo.png';
import jsLogo from './assets/javascript-logo.webp';
import sqlLogo from './assets/sql-logo.png';
import neo4jLogo from './assets/neo4j-logo.png';

const Skills = () => (
  <section id="skills" className="skills">
    <div className="container">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill">
          <img src={javaLogo} alt="Java" />
        </div>
        <div className="skill">
          <img src={springBootLogo} alt="Spring Boot" />
          
        </div>
        <div className="skill">
          <img src={jsLogo} alt="JavaScript" />
        
        </div>
        <div className="skill">
          <img src={sqlLogo} alt="SQL" />
        
        </div>
        <div className="skill">
          <img src={neo4jLogo} alt="NoSQL (Neo4j)" />
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
