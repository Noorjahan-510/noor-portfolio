import React from "react";
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import profileImage from './assets/profile.jpg'; // Change this path based on where you store your image

const Header = () => (
  <header className="header">
    <div className="container">
    <div className="header-icons">
          <a
            href="https://www.linkedin.com/in/noorjahan-khatoon-05-oct/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a
            href="https://github.com/Noorjahan-510"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          
      </div>
      <nav className="header-nav">
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      
      <h1>Noorjahan Khatoon</h1>
      
         <h2> <strong>Full Stack Developer</strong></h2>
     
      <div className="profile-container">
        <img src={profileImage} alt="Noorjahan Khatoon" className="profile-image" />
        
        <p>
        I am a skilled software developer with expertise in backend and frontend technologies. 
        With a strong background in <strong>Java</strong> and <strong>Spring Boot</strong> for building robust applications, 
        I also have hands-on experience in <strong>JavaScript</strong>, <strong>SQL</strong>, and <strong>NoSQL</strong> databases. 
        My passion lies in creating scalable, efficient systems and ensuring seamless user experiences through both backend and frontend integration.
      </p>
      </div>
      <a href="/Noorjahan_Khatoon_Resume.docx" download>
        <button className="download-button">Download Resume</button>
      </a>
      
    </div>
  </header>
);

export default Header;
