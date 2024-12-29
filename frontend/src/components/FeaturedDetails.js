import "./FeaturedDetailsStyle.css";
import {useLocation, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";


function getFDetails(dData) {
    const list = [];

    console.log("API Details:", dData);
    
    list.push(dData.modelyear);
    list.push(dData.make);
    list.push(dData.frontcrashdr);
    list.push(dData.frontcrashpr);
    list.push(dData.sidecrashdr)
    list.push(dData.sidecrashpr)
    list.push(dData.rolloverrisk)
    list.push(dData.overallrating)
    list.push(dData.model)
    
    // dData["Results"].forEach((x, y) => {
    //     list.push(x["ModelYear"]);
    //     list.push(x["Make"]);
    //     list.push(x["FrontCrashDriversideRating"]);
    //     list.push(x["FrontCrashPassengersideRating"]);
    //     list.push(x["SideCrashDriversideRating"]);
    //     list.push(x["SideCrashPassengersideRating"]);
    //     list.push(x["RolloverPossibility"]);
    //     list.push(x["OverallRating"]);
    //     list.push(x["VehicleDescription"])
    //     list.push(x["Model"]);

        
        
    // })

    console.log(list);
    return list

}

function FeaturedDetails() {
    const location = useLocation();
    const navigate = useNavigate();

    const [fDetails, setFDetails] = useState();

    const result = location.state?.result;

    // console.log(result);

    useEffect(() =>{
        setFDetails(getFDetails(result));
        console.log("FDetails: ", fDetails);
    }, [])

    if (!fDetails) {
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
                <p><strong>Model Year:</strong> {fDetails[0]}</p>
                <p><strong>Make:</strong> {fDetails[1]}</p>
                <p><strong>Model:</strong> {fDetails[8]}</p>
                <p><strong>Front Crash Driverside Rating:</strong> {fDetails[2]}</p>
                <p><strong>Front Crash Passengerside Rating:</strong> {fDetails[3]}</p>
                <p><strong>Side Crash Driverside Rating:</strong> {fDetails[4]}</p>
                <p><strong>Side Crash Passengerside Rating:</strong> {fDetails[5]}</p>
                <p><strong>Rollover Possibility:</strong> {fDetails[6] * 100}%</p>
                <p><strong>Overall Rating:</strong> {fDetails[7]}</p>
            </div>
            <div id="featured_div">
                {/* <button onClick={addFeatured}>Like</button> */}
                <button onClick={() => navigate("/")}>Home</button>
            </div>
            
        </div>
    )
}

export default FeaturedDetails;