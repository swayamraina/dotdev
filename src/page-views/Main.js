import React from 'react';

import NavBar from '../containers/NavBar.js'
import Body from '../containers/Body.js'
import { BrowserRouter } from 'react-router-dom';



function Main () {
    
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Body />
            </BrowserRouter>
        </div>
    );

}

export default Main;