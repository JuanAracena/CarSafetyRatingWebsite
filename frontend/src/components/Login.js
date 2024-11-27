import {Link} from "react-router-dom";


function Login() {
    return(
        <div id="loginBackground">
            <h1>Login</h1>
            <div id="loginInfo">
                <form>
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