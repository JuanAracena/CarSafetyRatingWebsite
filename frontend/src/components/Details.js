import "./DetailsStyle.css";
import {useLocation, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

function getDetailsData(dData){
    const list = [];

    console.log("API Details:", dData["Results"]);
    dData["Results"].forEach((x, y) => {
        list.push(x["ModelYear"]);
        list.push(x["Make"]);
        list.push(x["FrontCrashDriversideRating"]);
        list.push(x["FrontCrashPassengersideRating"]);
        list.push(x["SideCrashDriversideRating"]);
        list.push(x["SideCrashPassengersideRating"]);
        list.push(x["RolloverPossibility"]);
        list.push(x["OverallRating"]);
        list.push(x["VehicleDescription"])
        list.push(x["Model"]);

        
        
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

    const addBookmark = async (event) => {
        event.preventDefault()

        console.log("details list: ", details);

        const modelyear = details[0]
        const make = details[1]
        const fcdr = details[2]
        const fcpr = details[3]
        const scdr = details[4]
        const scpr = details[5]
        const rollover = details[6]
        const overall = details[7]
        const model = details[9]

        const formData = {modelyear, make, fcdr, fcpr, scdr, scpr, rollover, overall, model}

        axios.post("http://127.0.0.1:8000/", formData)
            .then((response) => console.log("Server response:", response.data))
            .catch((error) => console.log("Error:", error.response.data));


    };


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
                <p><strong>Model:</strong> {details[9]}</p>
                <p><strong>Front Crash Driverside Rating:</strong> {details[2]}</p>
                <p><strong>Front Crash Passengerside Rating:</strong> {details[3]}</p>
                <p><strong>Side Crash Driverside Rating:</strong> {details[4]}</p>
                <p><strong>Side Crash Passengerside Rating:</strong> {details[5]}</p>
                <p><strong>Rollover Possibility:</strong> {details[6]}</p>
                <p><strong>Overall Rating:</strong> {details[7]}</p>
            </div>
            <div id="bookmark_div">
                <button onClick={addBookmark}>Add to Bookmarks</button>
            </div>
            
        </div>
    )
}

export default Results;