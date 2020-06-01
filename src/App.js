import React, { useState, useEffect } from 'react';

import Main from './page-views/Main.js'
import LandingPage from './page-views/LandingPage.js';



function App () {

    const [ landingPage, setLandingPage ] = useState(true);

    useEffect ( () => { setTimeout(moveToHome, 5000) })

    const moveToHome = () => {
        setLandingPage(false);
    }

    const render = () => {
        return landingPage ? <LandingPage onClick={moveToHome} /> : <Main />
    }
    
    return (
       <div className="app">
           { render() }
       </div>
    );

}

export default App;
