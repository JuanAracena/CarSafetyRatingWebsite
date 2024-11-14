import React from 'react';
import { FaChevronDown } from "react-icons/fa";
import "./DropdownButton.css";

const DropdownButton = ({children}) => {
    return (
        <div className="dropdown-btn">
            {children}
            <span className="toggleIcon">
                <FaChevronDown />
            </span>
        </div>
        
    )
}

export default DropdownButton;