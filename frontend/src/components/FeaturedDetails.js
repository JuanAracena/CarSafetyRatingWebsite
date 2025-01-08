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
    list.push(dData.sidecrashdr);
    list.push(dData.sidecrashpr);
    list.push(dData.rolloverrisk);
    list.push(dData.overallrating);
    list.push(dData.model);
    list.push(dData.vehicledescription);
    

    console.log(list);
    return list

}

function FeaturedDetails() {
    const location = useLocation();
    const navigate = useNavigate();

    const [fDetails, setFDetails] = useState();

    const result = location.state?.result;

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

    const addFeatured = async (event) => {
        event.preventDefault()

        console.log("details list: ", fDetails);

        const modelyear = fDetails[0]
        const make = fDetails[1]
        const frontcrashdr = fDetails[2]
        const frontcrashpr = fDetails[3]
        const sidecrashdr = fDetails[4]
        const sidecrashpr = fDetails[5]
        const rolloverrisk = fDetails[6]
        const overallrating = fDetails[7]
        const model = fDetails[8]
        const vehicledescription = fDetails[9]

        const formData = {modelyear, make, frontcrashdr, frontcrashpr, sidecrashdr, sidecrashpr, rolloverrisk, overallrating, model, vehicledescription}
        

        console.log("Form Data: ", formData)
        axios.post("http://127.0.0.1:8000/", formData)
            .then((response) => console.log("Server response:", response.data))
            .catch((error) => console.log("Error:", error.response.data));


    };

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
                <button onClick={addFeatured}>Like</button>
                <button onClick={() => navigate("/")}>Home</button>
            </div>
            
        </div>
    )
}

export default FeaturedDetails;