import React from 'react';
import './Skills.css';

const Skills = () => {
    return ( 
        <div className="skills-container">
            <div className="skills-heading">
                <i class="fa-solid fa-screwdriver-wrench"></i>
                <h1>Skills</h1>
            </div>

            <div className="skill-category">
                <h2 style={{ color: '#D9D9D9' }}>Programming Languages</h2>
                <div className="skill-list">
                    <div className="skill">C++</div>
                    <div className="skill">C</div>
                    <div className="skill">Rust</div>
                    <div className="skill">JavaScript</div>
                    <div className="skill">Python</div>
                </div>
            </div>

            <hr className="divider" />

            <div className="skill-category">
                <h2 style={{ color: '#D9D9D9' }}>Web Development</h2>
                <div className="skill-list">
                    <div className="skill">HTML</div>
                    <div className="skill">CSS</div>
                    <div className="skill">Tailwind</div>
                    <div className="skill">JavaScript</div>
                    <div className="skill">React.js</div>
                    <div className="skill">NodeJs</div>
                    <div className="skill">Bootstrap</div>
                </div>
            </div>

            <hr className="divider" />

            <div className="skill-category">
                <h2 style={{ color: '#D9D9D9' }}>Version Control</h2>
                <div className="skill-list">
                    <div className="skill">Git</div>
                    <div className="skill">GitHub</div>
                </div>
            </div>

            <hr className="divider" />

            <div className="skill-category">
                <h2 style={{ color: '#D9D9D9' }}>Soft Skills</h2>
                <div className="skill-list">
                    <div className="skill">Communication</div>
                    <div className="skill">Teamwork</div>
                </div>
            </div>

            <hr className="divider" />

            <div className="skill-category">
                <h2 style={{ color: '#D9D9D9' }}>Machine Learning</h2>
                <div className="skill-list">
                    <div className="skill">Data Preprocessing</div>
                    <div className="skill">Suprivised and Unsuprivised Learning</div>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;
