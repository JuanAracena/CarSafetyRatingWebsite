import axios from "axios";

function Join() {

    //Handle account creation
    const handleSubmit = async (event) => {
        event.preventDefault();

        const username = event.target.username.value.trim()
        const password = event.target.password.value.trim()
        const formData = {username, password};

        axios.post("http://127.0.0.1:8000/account/", formData)
            .then((response) => console.log("Server response:", response.data))
            .catch((error) => console.error("Error:", error.response.data));

        
        
    };
    
    
    return (
        <div id="joinBG">
            <h1>Create an Account:</h1>
            <div id="joinInfo">
                <form onSubmit={handleSubmit}>
                    <label>Create an username: </label>
                    <input name="username" type="text" required></input>
                    <br></br>
                    <label>Create a password: </label>
                    <input name="password" type="password" required></input>
                    <br></br>
                    <button type="submit">Sign up</button>
                </form>
                
            </div>
        </div>
    )
}

export default Join;