import './Project.css';

const Projects = () => {

    return (
        <div className="projects-container">
            <h1 className="projects-heading">
                <i className="fa-solid fa-code"></i> Projects
            </h1>
            <div className="projects-grid">
                <div className="project-card">
                    <h2>Techniche 2024 Website</h2>
                    <p>Developed an interactive web application using HTML, CSS, and React.js. Also use R3F for 3D model integration on merch page.</p>
                    <div className="project-links">
                        <a href="https://techniche.org/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i> Website
                        </a>
                    </div>
                </div>
                <div className="project-card">
                    <h2>Fraud Detection Model</h2>
                    <p>Developed a Decision Tree Classifier model with PCA for dimensionality reduction, handling missing data, feature encoding, and scaling to enhance classification accuracy. Evaluated model performance through accuracy, confusion matrix, and classification report to ensure reliability.</p>
                    <div className="project-links">
                        <a href="https://colab.research.google.com/drive/1i7lIJHEyEAhEl4muDnnUffJv1cAD8Zh5?usp=drive_open#scrollTo=Fg4SVfQ8sdJM" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-kaggle"></i> Google Collab
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;


