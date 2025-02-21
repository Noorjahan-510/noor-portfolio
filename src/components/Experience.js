import React from "react";
import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
      title: "Software Engineer",
      company: "Infinite Computer Solutions",
      location: "Gurgaon, India",
      duration: "Oct 2024 - Present",
      responsibilities: [
        "Developing and maintaining UIV Discovery Adapters using Core Java and Spring Boot.",
        "Converting customer input data in JSON/XML to transform into UIV.",
        "Creating relation (Association) between the entities.",
        "Analyzing and debugging the root cause of the issues.",
        "Adapter customization according to the requirements."
      ]
    },
    {
      title: "Associate Software Engineer",
      company: "Capgemini",
      location: "Gurgaon, India",
      duration: "Aug 2021 - Sep 2024",
      responsibilities: [
      "Developed UIV Custom Actions using Java, Spring, and Freemarker Template Language.",
      "Designed and implemented RESTful APIs for data processing and system interactions.",
      "Integrated Java methods into business logic for enhanced functionality.",
      "Conducted API testing using Postman, ensuring proper request handling and response validation.",
      "Managed and optimized database operations, including CRUD activities, ensuring data integrity.",
      "Interacted with NoSQL DB and wrote CQL queries to retrieve inventory data.",
      "Independently managed assignments, taking full ownership to ensure timely and high-quality deliverables.",
      "Utilized IDEs like Eclipse, STS, IntelliJ IDEA, and VS Code for efficient development and debugging.",
      "Worked closely with cross-functional teams to gather requirements, troubleshoot issues, and deliver high-quality software solutions.",
      "Used version control systems (like Git/Gerrit) to manage and track changes to the codebase."
        ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-list">
          {experienceData.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3>{exp.title}</h3>
              <p><strong>{exp.company}</strong> | {exp.location}</p>
              <p>{exp.duration}</p>
              <ul>
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
