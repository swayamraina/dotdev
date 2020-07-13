import React from 'react';

import NavBar from '../containers/NavBar.js'
import Body from '../containers/Body.js'
import { HashRouter } from 'react-router-dom';



function Main () {
    
    return (
        <div>
            <HashRouter >
                <NavBar />
                <Body />
            </HashRouter>
        </div>
    );

}

export default Main;