import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button';

// const style = {
//     background : "gray",
//     display : "flex",
//     justifyContent : "space-between",
    
//     alignItems : "stretch",
//     fontSize: "1.2em"
// }


const Header = ({title, onToggle, display}) => {
    
    

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text= {display ? "Close" : "Add"} color={display ? "Red" : "Green"} onToggle={onToggle}/>
            
        </header>
    )
}

Header.defaultProps = {
    title : "Default Title",
    
};

Header.propTypes = {
    title : PropTypes.string,
    
};






export default Header
