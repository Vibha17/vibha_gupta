import './Project.css';

const Projects = () => {

    return (
        <div className="projects-container">
            <h1 className="projects-heading">
                <i className="fa-solid fa-code"></i> Projects
            </h1>
            <div className="projects-grid">
                <div className="project-card">
                    <h2>Personal Portfolio</h2>
                    <p>Developed an interactive web application using HTML, CSS, and React.js. Designed to be a reflective space for personal and professional growth, with a focus on simplicity and minimalism.</p>
                    <div className="project-links">
                        <a href="https://github.com/Vibha17/vibha_portfolio" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i> GitHub
                        </a>
                    </div>
                </div>
                <div className="project-card">
                    <h2>Prediction Model</h2>
                    <p>Python, Numpy, Pandas, Matplot, Seaborn, Regression - Basic ML. This project contains a prediction model of IPL scores.</p>
                    <div className="project-links">
                        <a href="https://drive.google.com/file/d/1UJNtrz9ssOPSnYxmPrfnauAHu1Ydf51P/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-kaggle"></i> Kaggle
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;


