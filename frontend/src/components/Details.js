import "./DetailsStyle.css";
import {useLocation, useNavigate} from "react-router-dom";

function Results() {
    const location = useLocation();
    const navigate = useNavigate();

    const result = location.state?.result;

    if (!result) {
        return (
            <div>
                <p>No data available. Please go back to search.</p>
                <button onClick={() => navigate("/")}>Back to Home</button>
            </div>

        )
    }

    return (
        <div id="description">
            <h1>Vehicle Details:</h1>
            <p><strong>Vehicle Description: {result.VehicleDescription}</strong></p>
            <p><strong>Vehicle Id: {result.VehicleId}</strong></p>
        </div>
    )
}

export default Results;