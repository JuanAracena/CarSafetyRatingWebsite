import { useState } from "react";
import axios from "axios";

function Join() {
    
    //Account info state
    const [accountData, setAccountData] = useState({})
    const [responseMessage, setResponseMessage] = useState("");




    const handleChange = async (event) => {
        const {name, value} = event.target;
        setAccountData({
            ...accountData,
            [name]: value,
        });

        try {
            const response = await axios.post("http://127.0.0.1:8000/", {
                username: accountData.joinUsername,
                password: accountData.joinPassword,
            });

            if(response.status === 201) {
                setResponseMessage(response.data.message);
                console.log("Account created successfully:", response.data);
            }
        } catch (error) {
            if(error.response) {
                // Server responded with a status other than 2xx
                console.error("Error:", error.response.data);
                setResponseMessage(error.response.data.error || "Failed to create account.");
            } else {
                console.error("Error:", error.message);
                setResponseMessage("An error occurred while creating the account.");
            }
        }
    };

    //Handle account creation
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("User data:", accountData);
        
    };
    
    
    return (
        <div id="joinBG">
            <h1>Create an Account:</h1>
            <div id="joinInfo">
                <form onSubmit={handleSubmit}>
                    <label>Create an username: </label>
                    <input name="joinUsername" type="text" onChange={handleChange}></input>
                    <br></br>
                    <label>Create a password: </label>
                    <input name="joinPassword" type="password" onChange={handleChange}></input>
                    <br></br>
                    <button type="submit">Sign up</button>
                </form>
                {responseMessage && <p>{responseMessage}</p>}
            </div>
        </div>
    )
}

export default Join;