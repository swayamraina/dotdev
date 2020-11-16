import React from 'react';

import '../styles/PinnedBook.css'



function PinnedBook (props) {

    return (
        <div className="pinned-book">
            <div onClick = { () => { props.link.forEach(l => window.open(l, "_blank")) } }
                className = "book-cover" 
                style = {{backgroundImage: `url(${props.cover})`}}/>
        </div>
    );

}

export default PinnedBook;