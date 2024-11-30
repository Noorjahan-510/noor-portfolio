import React from 'react'
import './Display.css';
import profileImage from './assets/profile.jpg'; // Change this path based on where you store your image

export default function Display() {
    return (
        <>
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
                <div class="button-container">
                    <a href="/Noorjahan_Khatoon_Resume.docx" download>
                        <button class="download-button">Download Resume</button>
                    </a>
                </div>
            </div>

        </>
    )
}