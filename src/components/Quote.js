import React from 'react';

import '../styles/Quote.css'



function Quote (props) {

    return (
        <div className="quote">
            {props.quote}
        </div>
    );

}

export default Quote;