import React from 'react';

import BookBar from './BookBar'

import '../styles/PinnedBook.css'



function PinnedBook (props) {

    const pagesAvailable = props.total && props.read
    let bb = pagesAvailable ? <BookBar total="" read="" /> : <br/>;

    return (
        <div className="pinned-book">
            <div className="book-cover" style={{backgroundImage: `url(${props.cover})`}}/>
            { bb }
        </div>
    );

}

export default PinnedBook;