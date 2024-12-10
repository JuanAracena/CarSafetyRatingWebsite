import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { useState } from "react";


function Login({ setLoggedIn }) {

    const [error, setError] = useState(null)
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();

        const username = event.target.username.value.trim();
        const password = event.target.password.value.trim();
        const action = "login"

        

        if (!username || !password) {
            alert("Both fields are required.");
            return;
        }


        try {
            console.log(username)
            console.log(password)
            console.log(action)
            const response = await axios.post(
                "http://127.0.0.1:8000/account/",
                { username, password, action }
            );

            console.log("Success:", response.data);
            setLoggedIn(true);
            navigate("/")

        } catch (error) {
            console.error("Error:", error.response.data);
            setError(error.response?.data?.error || "An error occurred during login.");
        }
    };

    return(
        <div id="loginBackground">
            <h1>Login</h1>
            <div id="loginInfo">
                <form onSubmit={handleSubmit}>
                    <label>Username: </label>
                    <input name="username" type="text"></input>
                    <br></br>
                    <label>Password: </label>
                    <input name="password" type="password"></input>
                    <br></br>
                    <button type="submit">Log in</button>
                </form>
                <p id="joinQuestion">Don't have an account?</p>
                <Link to="/join">Click Here!</Link>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
        </div>
    )
}

export default Login;