import "./DetailsStyle.css";
import {useLocation, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";


function getDetailsData(dData){
    const list = [];

    console.log("API Details:", dData["Results"]);
    dData["Results"].forEach((x, y) => {
        list.push(x["ModelYear"]);
        list.push(x["Make"]);
        list.push(x["Model"]);
        list.push(x["FrontCrashDriversideRating"]);
        list.push(x["FrontCrashPassengersideRating"]);
        list.push(x["SideCrashDriversideRating"]);
        list.push(x["SideCrashPassengersideRating"]);
        list.push(x["RolloverPossibility"]);
        list.push(x["OverallRating"]);
        list.push(x["VehicleDescription"])

        
        
    })

    console.log("List: ", list);
    return list
}



function Results() {
    const location = useLocation();
    const navigate = useNavigate();

    const result = location.state?.result;

    //Details state
    const [detailsData, setDetailsData] = useState();
    const [details, setDetails] = useState([]);

    //API call to get vehicle details
    useEffect(() => {
        fetch(`https://api.nhtsa.gov/SafetyRatings/VehicleId/${result.VehicleId}`)
        .then((response) => response.json())
        .then((data) => {
            setDetailsData(data);
            const transfer = getDetailsData(data);
            setDetails(transfer);
        })
    }, [])


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
            <div id="info">
            <p><strong>Model Year:</strong> {details[0]}</p>
            <p><strong>Make:</strong> {details[1]}</p>
            <p><strong>Model:</strong> {details[2]}</p>
            <p><strong>Front Crash Driverside Rating:</strong> {details[3]}</p>
            <p><strong>Front Crash Passengerside Rating:</strong> {details[4]}</p>
            <p><strong>Side Crash Driverside Rating:</strong> {details[5]}</p>
            <p><strong>Side Crash Passengerside Rating:</strong> {details[6]}</p>
            <p><strong>Rollover Possibility:</strong> {details[7]}</p>
            <p><strong>Overall Rating:</strong> {details[8]}</p>
            </div>
            
        </div>
    )
}

export default Results;