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
                    <h2>GSSOC | Contributor</h2>
                    <p>GirlScript Summer of Code with project link: <a href="https://github.com/sk66641/Random-Disco-Light-Simulator" target="_blank" rel="noopener noreferrer">Random Disco Light Simulator</a></p>
                    <p><i className="fa-solid fa-code-branch"></i> PR link: <a href="https://github.com/pulls" target="_blank" rel="noopener noreferrer">GitHub Pull Requests</a></p>
                    <p><strong>Timeline:</strong> May 2024 - July 2024</p>
                </div>
            </div>
            <div className="experience-card">
                <div className="timeline">
                    <div className="circle"></div>
                    <div className="line"></div>
                </div>
                <div className="card-content">
                    <h2>Web-Ops Member</h2>
                    <p>Student Alumni Interaction Linkage (SAIL)</p>
                    <p><strong>Timeline:</strong> Feb 2024 - Current</p>
                </div>
            </div>
        </div>
     );
}
 
export default Experience;
