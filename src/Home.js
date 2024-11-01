import React, { useState } from 'react';
import './Home.css';
import smallProfileImage from './Vibha.jpeg';
import largeProfileImage from './Vibha-L.jpeg';

const Home = () => {
    const [isImageLarge, setIsImageLarge] = useState(false);

    const handleImageClick = () => {
        setIsImageLarge(true);
    };

    const handleCloseClick = () => {
        setIsImageLarge(false);
    };

    return ( 
        <>
            <div className={`home-container ${isImageLarge ? 'overlay' : ''}`}>
                {isImageLarge && <div className="close-button" onClick={handleCloseClick}>&times;</div>}
                <div className="profile-container" onClick={handleImageClick}>
                    <img 
                        src={isImageLarge ? largeProfileImage : smallProfileImage} 
                        alt="Profile" 
                        className={`profile-image ${isImageLarge ? 'large' : ''}`} 
                    />
                </div>
                <div className="education-container">
                    <h1>Vibha Gupta</h1>
                    <p className="intro-text">Welcome to my personal portfolio! Here you will find details about my education, experience, projects, skills, and more.</p>
                    <div className="ladder">
                        <div className="education-step">College: <br/> IIT Guwahati<span>[Data Science & AI]</span></div>
                        <div className="education-step">High School: <br/> Engineer's Point<span>[PCM]</span></div>
                    </div>
                </div>
            </div>
            <div className="intro-text">
            <p>
            Pursuing B.Tech in Data Science and Artificial Intelligence from IIT Guwahati,
            known for its excellence in technology and innovation.
            </p>
            <p>
            Enthusiastic about leveraging technology to solve real-world problems and keen
            on continuous learning and growth in the field of Data Science and Artificial Intelligence.
            </p>
            </div>
        </>
    );
}

export default Home;

