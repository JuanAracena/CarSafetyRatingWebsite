import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "./NavbarStyle.css";

function Navbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [text, setText] = useState("Car Rating Safety Website");

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

    return (
        <div id="nav">
            <h1><Link to="/">{text}</Link></h1>
            <ul>
                <li id="home">
                    <Link to="/">Search</Link>
                </li>
                <li id="bookmarks">
                    <Link to="/bookmarks">Boorkmarks</Link>
                </li>
                <li id="login">
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    )

}

export default Navbar;