import React, { useState } from 'react';

import Home from './containers/Home.js'
import LandingPage from './containers/LandingPage.js';

import './App.css';



function App () {

    const [ landingPage, setLandingPage ] = useState(true);

    const moveToHome = () => {
        setLandingPage(false);
    }

    const render = () => {
        return landingPage ? <LandingPage onClick={moveToHome} /> : <Home />
    }
    
    return (
       render()
    );

}

export default App;
