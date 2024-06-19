import './Achievement.css';

const Achievements = () => {
    return ( 
        <div className="achievements-container">
            <h1><i class="fa-solid fa-trophy"></i> Achievements</h1>
            <div className="achievement-card">
                <i class="fa-brands fa-google-scholar"></i>
                <p>Rajasthan Topper, 10th class, RBSE Board, Rajasthan 2021</p>
            </div>
            <div className="achievement-card">
                <i class="fa-solid fa-graduation-cap"></i>
                <p>JEE Advanced, Secured a rank in Top 1.21 percent out of 1.8 lakh candidates 2023</p>
            </div>
            <div className="achievement-card">
                <i class="fa-solid fa-chart-line"></i>
                <p>Codeforces, Rating=909 CF 2024</p>
            </div>
        </div>
    );
}
 
export default Achievements;
