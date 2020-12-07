import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/NavBar.css'



function NavBar () {

    return (
        <div>
            <div className="nav-bar">
                <Link className="home-logo" to="/">&lt; swayamraina ! &gt;</Link>
                <Link className="nav-link" to='/blogs'>Blog</Link>
                <Link className="nav-link" to='/updates'>Updates</Link>
                <Link className="nav-link" to="/books">Books</Link>
            </div>
        </div>
    );

}

export default NavBar;