import "./HomeStyle.css";
import axios from 'axios';
import {useState, useEffect} from "react";


function Home() {
    
    //Get all makes from NHTSA API
    const [makeData, setMakeData] = useState([])

    useEffect(() => {
        fetch(
            "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json"
        )
        .then((response) => response.json())
        .then(setMakeData);
    }, []);

    // var makeJSONData = JSON.parse(makeData)
    makeData["Results"].forEach((x, y) => {
        console.log(x["Make_Name"])
    })


    //  var makeNames = makeJSONData.map(key => key.Make_Name)
    //  console.log(makeNames)

    // if (makeData)
    //     return (
    //         <pre>{JSON.stringify(makeData, null, 2)}</pre>    
    //     );

    

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
                        {/* {makeJSONData.map((key) =>(
                           <option value={key.Make_Name}>{key.Make_Name}</option> 
                        ))} */}
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