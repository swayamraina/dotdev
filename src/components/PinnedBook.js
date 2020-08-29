import React from 'react';

import '../styles/PinnedBook.css'



function PinnedBook (props) {

    return (
        <div className="pinned-book">
            <div className="book-cover" style={{backgroundImage: `url(${props.cover})`}}/>
        </div>
    );

}

export default PinnedBook;