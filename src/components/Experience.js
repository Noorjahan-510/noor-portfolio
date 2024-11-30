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
        "Developed and maintained enterprise-level applications using Core Java and Spring Boot.",
        "Independently managed assignments, taking full ownership to ensure timely and high-quality deliverables.",
        "Converted customer input data in JSON/XML to transform into UIV.",
        "Analyzed and debugged the root cause of issues.",
        "Customized adapters according to specific requirements."
      ]
    },
    {
      title: "Associate Software Engineer",
      company: "Capgemini",
      location: "Gurgaon, India",
      duration: "Aug 2021 - Sep 2024",
      responsibilities: [
        "Developed and maintained enterprise-level applications using Core Java and Spring Boot.",
        "Independently managed assignments, ensuring timely and high-quality deliverables.",
        "Utilized IDEs like Eclipse, STS, IntelliJ IDEA, and VS Code for efficient development and debugging.",
        "Worked closely with cross-functional teams to gather requirements, troubleshoot issues, and deliver high-quality software solutions.",
        "Used version control systems (like Git/Gerrit) to manage and track changes to the codebase.",
        "Facilitated comprehensive Knowledge Transfer (KT) processes for new joiners, ensuring a smooth onboarding experience.",
        "Conducted code reviews and ensured adherence to quality standards.",
        "Stayed updated with the latest industry trends and technologies in the Java and Spring Boot ecosystem."
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
