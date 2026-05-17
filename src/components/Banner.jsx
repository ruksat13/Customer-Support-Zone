import "./Banner.css";
import vector1 from "../assets/vector1.png";

const Banner = ({ inProgress, resolved }) => {
    return (
        <div className="banner">
            <div className="stat-card stat-progress">
                <img src={vector1} alt="" className="vector-img vector-right" />
                <img src={vector1} alt="" className="vector-img vector-left" />
                <p className="stat-label">In-Progress</p>
                <h2 className="stat-number">{inProgress}</h2>
            </div>
            <div className="stat-card stat-resolved">
                <img src={vector1} alt="" className="vector-img vector-right" />
                <img src={vector1} alt="" className="vector-img vector-left" />
                <p className="stat-label">Resolved</p>
                <h2 className="stat-number">{resolved}</h2>
            </div>
        </div>
    );
};

export default Banner;