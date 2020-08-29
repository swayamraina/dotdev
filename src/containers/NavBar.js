import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/NavBar.css'



function NavBar () {

    return (
        <div>
            <div className="nav-bar">
                <div className="home-logo">&lt; swayamraina ! &gt;</div>
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link" to='/blogs'>Blog</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
            </div>
            <div className="nav-bar-line"/>
        </div>
    );

}

export default NavBar;