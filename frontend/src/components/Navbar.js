import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "./NavbarStyle.css";
import axios from "axios";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [text, setText] = useState("Car Rating Safety Website");
    // const navigate = useNavigate()

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);

        return() => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    useEffect(() => {
        if(windowWidth <= 576) {
            setText("CSRW");
        }
        else {
            setText("Car Rating Safety Website");
        }
    }, [windowWidth])

    const handleLogout = async () => {
        try {
            const action = "logout"
            const response = await axios.post("http://127.0.0.1:8000/account/", {action});

            if (response.status === 200){
                setIsLoggedIn(false);
                // navigate("/login")
            } else {
                console.error("Failed to log out");
            }
        } catch(error) {
            console.error("An error occurred during logout:", error.response || error.message);
        }
        
    };

    return (
        <div id="nav">
            <h1><Link to="/">{text}</Link></h1>
            <ul>
                {/* <li id="home">
                    <Link to="/">Search</Link>
                </li> */}
                {/* <li id="bookmarks">
                    <Link to="/bookmarks">Boorkmarks</Link>
                </li> */}
                {!isLoggedIn ? (
                    <li id="login">
                    <Link to="/login">Login</Link>
                </li>
                ) : (<li id="logout">
                    <Link to="/" onClick={handleLogout}>Logout</Link>
                </li>)
                }
                
            </ul>
        </div>
    )

}

export default Navbar;