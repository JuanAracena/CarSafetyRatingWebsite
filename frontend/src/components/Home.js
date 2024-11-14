import "./HomeStyle.css";
import axios from 'axios';
import {useState, useEffect} from "react";


function Home() {
    
    //Get data from NHTSA API
    // const [nhtsaData, setNhtsaData] = useState([])

    // useEffect(() => {
    //     axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json")
    //     .then((res) => {setNhtsaData(res.nhtsaData)})
    //     .catch((error) => console.error(error))
    // }, [])
    


    //Get data from postgresql db
    const [details, setDetails] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then(response => {
                setDetails(response.data)
            })
            .catch(error => {
                console.error(error)
            });
    }, [])


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
            {/* <h1>Car Safety Rating Website</h1> */}
            <div id="search">
                <hr></hr>
                {details.map((output, id) => (
                    <div key={id}>
                        <div>
                            <h2>{output.make}</h2>
                            <h3>{output.model}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}



export default Home;