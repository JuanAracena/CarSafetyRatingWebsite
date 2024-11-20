import "./HomeStyle.css";
import axios from 'axios';
import {useState, useEffect} from "react";


function getMakeData(makeData) {

    const list = [];

    makeData["Results"].forEach((x, y) => {
        list.push(x["Make_Name"])
    })

    return list;

}

function Home() {
    
    //Get all makes from NHTSA API
    const [makeData, setMakeData] = useState();
    const [makeNames, setMakeNames] = useState([]);

    useEffect(() => {
        fetch(
            "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json"
        )
        .then((response) => response.json())
        .then((data) => {
            setMakeData(data);
            const names = getMakeData(data);
            setMakeNames(names);
            console.log("Makes loaded");
        });
    }, []);



    // let makeNames;

    // //Check if makeNames already has the makes from the API
    // if (!makeNames) {
    //     makeNames = getMakeData(makeData)
    //     console.log("Makes loaded")
    // }    

    //Get data from NHTSA API
    // const [nhtsaData, setNhtsaData] = useState([])

    // useEffect(() => {
    //     axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json")
    //     .then((res) => {setNhtsaData(res.nhtsaData)})
    //     .catch((error) => console.error(error))
    // }, [])
    

    //Get data from postgresql db
    // const [details, setDetails] = useState([])

    // useEffect(() => {
    //     axios.get('http://localhost:8000/')
    //         .then(response => {
    //             setDetails(response.data)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         });
    // }, [])


    // let data;
    // axios.get('http://localhost:8000/welcome')
    // .then((response) => {
    //     data = response.data;
    //     this.setState({
    //         details: data
    //     });
    // })
    // .catch(error => {
    //     if (error.response) {
    //         console.log(error.response);
    //         console.log(error.response.status);
    //         console.log(error.response.headers);
    //     }
    // })
    

    return (
        <div id="welcome">
            <div id="search_div">
                <form>
                    <label for="make">Make</label>
                    <select name="Make" id="make">
                        {makeNames.map((names, index) => {
                            return (<option key={index} value={names}>{names}</option>)
                        })}
                    </select>
                    <label for="model">Model</label>
                    <select name="Model" id="model">
                        <option value="test1">Test1</option>
                        <option value="test2">Test2</option>
                        <option value="test3">Test3</option>
                    </select>
                    <label for="modelyear">Model Year</label>
                    <select name="Model Year" id="modelyear">
                        <option value="test1">Test1</option>
                        <option value="test2">Test2</option>
                        <option value="test3">Test3</option>
                    </select>
                    <input type="submit" value="Search"></input>
                </form>
            </div>
        </div>
    )
    
    // return (
    //     <div id="welcome">
    //         {/* <h1>Car Safety Rating Website</h1> */}
    //         <div id="search">
    //             <hr></hr>
    //             {details.map((output, id) => (
    //                 <div key={id}>
    //                     <div>
    //                         <h2>{output.make}</h2>
    //                         <h3>{output.model}</h3>
    //                     </div>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // )
}



export default Home;