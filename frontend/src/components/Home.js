import "./HomeStyle.css";
import {useState, useEffect} from "react";
import {useNavigate, Link} from "react-router-dom";
import axios from "axios";


function getModelData(makeData) {
    const list = [];

    makeData["Results"].forEach((x, y) => {
        list.push(x["Model"])
    });

    return list;
}

function getMakeData(makeData) {

    const list = [];

    makeData["Results"].forEach((x, y) => {
        list.push(x["Make"])
    });

    return list;

}

function getYearData(makeData) {
    const list = []

    console.log(makeData)
    makeData["Results"].forEach((x, y) => {
        list.push(x["ModelYear"])
    });

    return list;
}

function Home() {
    
    //Div state
    const [content, setContent] = useState("Search");

    //Model year states
    const [yearsData, setYearsData] = useState();
    const [selectedYear, setSelectedYear] = useState("");
    const [yearOptions, setYearOptions] = useState([]);


    //Make states
    const [makeNames, setMakeNames] = useState([]);
    const [selectedMake, setSelectedMake] =  useState("");
    

    //Model states
    const [modelNames, setModelNames] = useState([]);
    const [selectedModel, setSelectedModel] = useState("");


    //Search state
    const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState([]);

    //Feature results state
    const [featuredResults, setFeaturedResults] = useState([]);

    useEffect(() => {
        fetch(
            "https://api.nhtsa.gov/SafetyRatings"
        )
        .then((response) => response.json())
        .then((data) => {
            setYearsData(data);
            const years = getYearData(data);
            setYearOptions(years);

        })
    }, []);


    //Fetch all makes based on the selected model year
    useEffect(() => {
        fetch(
            `https://api.nhtsa.gov/SafetyRatings/modelyear/${selectedYear}`
        )
        .then((response) => response.json())
        .then((data) => {
            const makes = getMakeData(data);
            setMakeNames(makes);
        })
        .catch((error) => console.error("Error fetching makes data:", error)
        );
    }, [selectedYear]);


    //Fetch all models based on the selected make

    useEffect(() => {
        if (selectedYear && selectedMake) {
            fetch(`https://api.nhtsa.gov/SafetyRatings/modelyear/${selectedYear}/make/${selectedMake}`)
            .then((response) => response.json())
            .then((data) => {
                const models = getModelData(data);
                setModelNames(models);
            })
        .catch((error) => console.error("Error fetching models data:", error));
        }
        
    }, [selectedMake]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/")
        
            .then((response) =>  setFeaturedResults(response.data))

            

            // .then((response) => console.log("Featured Results: ", response.data))
            // .catch((error) => console.log("Error: ", error.response.data))
    }, [content]);

    //Updates selected year
    const handleYearChange = (event) => {
        const selected = event.target.value;
        console.log("Selected:", selected);
        setSelectedYear(selected);

    }

    //Updates selected make
    const handleMakeChange = (event) => {
        const selected = event.target.value;
        setSelectedMake(selected);
    }

    //Updates selected model
    const handleModelChange = (event) => {
        const selected = event.target.value;
        setSelectedModel(selected);
    }
  
    
    //Handles form submission to fetch results
    const handleSubmit = (event) => {
        event.preventDefault();

        if (selectedYear && selectedMake && selectedModel) {
            fetch(`https://api.nhtsa.gov/SafetyRatings/modelyear/${selectedYear}/make/${selectedMake}/model/${selectedModel}`)
            .then((response) => response.json())
            .then((data) => {
                console.log("Search results: ", data.Results)
                setSearchResults(data.Results);
            })
            .catch((error) => console.error("Error fetching search results:", error)
            );
        }           
    };

    //Gets featured results from db
    // const handleFeatured = () => {
    //     axios.get("http://127.0.0.1:8000/")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setFeaturedResults(data.Results)
    //         })
    //         .catch((error) => console.log("Error: ", error.response.data))

    // }

    //Switches the content of welcome div
    const handleContent = (newContent) => {
        setContent(newContent);
        // handleFeatured();

    }
    
    return (
        <div id="welcome">
            <h1>Welcome to the Home Page</h1>
            <button onClick={() => handleContent('Search')}>Search</button>
            <button onClick={() => handleContent('Featured')}>Featured</button>
            {content === "Search" && (
                <div id="search_div">
                <form onSubmit={handleSubmit}>
                    <label for="modelyear">Model Year</label>
                        <select name="Model Year" id="modelyear" value={selectedYear} onChange={handleYearChange}>
                            <option value="">Select a Model Year</option>
                            {yearOptions.map((year, index) => {
                                return <option key={index} value={year}>{year}</option>
                            })}
                        </select>
                        <label for="make">Make</label>
                        <select name="Make" id="make" value={selectedMake} onChange={handleMakeChange} disabled={!selectedYear}>
                            <option value="">Select a Make</option>
                            {makeNames.map((names, index) => {
                                return (<option key={index} value={names}>{names}</option>)
                            })}
                        </select>
                        <label for="model">Model</label>
                        <select name="Model" id="model" value={selectedModel} onChange={handleModelChange} disabled={!selectedMake}>
                            <option value="">Select a Model</option>
                            {modelNames.map((model, index) => {
                                return <option key={index} value={model}>{model}</option>
                            })}
                        </select>
                        <button type="submit" disabled={!selectedModel}>Search</button>
                    </form>
                <div id="results">
                    <h2>Search Results:</h2>
                    <ul>
                        {searchResults.map((result, index) => {
                            return <li key={index}>
                                <div>
                                    <Link to="/details" state= {{result}}>{result.VehicleDescription}</Link>
                                </div>

                            </li>
                        })}
                    </ul>
                </div>
            </div>
            )}

            {content === "Featured" && (
                <div id="featured_div">
                    <h2>Featured:</h2>
                    <ul>
                        {featuredResults.map((result, index) => {
                            return <li key={index}>
                                <div>
                                    <Link to="/fdetails" state={{result}}>{result.vehicledescription}</Link>
                                    <p>Likes: {result.likesnum}</p>                               
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            )}
        </div>
    )
    
}



export default Home;