import React from 'react';
import './Experience.css';

const Experience = () => {
    return ( 
        <div className="experience-container">
            <div className="experience-heading">
                <i className="fa-solid fa-suitcase"></i> <h1>Experience</h1>
            </div>
            <div className="experience-card">
                <div className="timeline">
                    <div className="circle"></div>
                    <div className="line"></div>
                </div>
                <div className="card-content">
                    <h2>Hacktober 2024 | Contributor</h2>
                    <p>4 Prs raised Project link: <a href="https://github.com/swciitg/Sports_Board_Portal" target="_blank" rel="noopener noreferrer">Sports Board Website , SWC </a></p>
                    <p><strong>Timeline:</strong> October 2024</p>
                </div>
            </div>
        </div>
     );
}
 
export default Experience;
