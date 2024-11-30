import React from "react";
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: "Personal Portfolio",
      description: "A personal portfolio built using React, JavaScript, and CSS. It showcases my skills, experience, and projects. The portfolio is fully responsive and provides easy navigation.",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      link: "https://noor-portfolio-510.netlify.app/"
    },
   
    {
      title: "Task Management System",
      description: "A task management system built with Java and Spring Boot, designed to help teams manage and track tasks efficiently. The app supports task creation, editing, and status updates.",
      technologies: ["Java", "Spring Boot", "MySQL"],
      link: "https://github.com/your-repo"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-list">
          {projectData.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
