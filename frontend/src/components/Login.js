import {Link} from "react-router-dom";
import axios from "axios";


function Login() {

    const handleSubmit = async (event) => {
        event.preventDefault();

        const username = event.target.username.value.trim();
        const password = event.target.password.value.trim();

        

        if (!username || !password) {
            alert("Both fields are required.");
            return;
        }


        try {
            console.log(username)
            console.log(password)
            const response = await axios.post(
                "http://127.0.0.1:8000/account/",
                { username, password }
            );

            console.log("Success:", response.data);
        } catch (error) {
            console.error("Error:", error.response.data);
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
            </div>
        </div>
    )
}

export default Login;