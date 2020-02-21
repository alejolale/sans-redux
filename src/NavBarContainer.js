import React from 'react';
import  { connect } from 'react-redux';

const NavBar = ({ light }) => {
    return(
        <nav className="navBar">
            { light }
        </nav>
    )
}

const mapStatetoProps = state => ({
    light: state
 })

const navBarContaier = connect(mapStatetoProps)(NavBar);
export default navBarContaier;