import React from 'react';


import '../styles/BookBar.css'



function BookBar (props) {

    let text = `${props.read} / ${props.total}`

    return (
        <div className="bookbar"> {text} </div>
    );

}

export default BookBar;