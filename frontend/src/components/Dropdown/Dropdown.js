import React from 'react';
import DropdownButton from './DropdownButton/DropdownButton';
import DropdownContent from './DropdownContent/DropdownContent';
import "./DropdownStyle.css";
 


const Dropdown = ({buttonText, content}) => {
    return (
        <div className="dropdown">
            <DropdownButton>{buttonText}</DropdownButton>
            <DropdownContent>{content}</DropdownContent>
        </div>
        
    )
}

export default Dropdown;