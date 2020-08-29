import React from 'react';

import '../styles/Book.css'



function Book (props) {

    return (
        <div className="book">
            <div className="book-cover" style={{backgroundImage: `url(${props.cover})`}}/>
            <ul className="book-desc">
                <li className="book-title"> <b>Title:</b> {props.title}</li> <br/>
                <li className="book-author"> <b>Author(s):</b> {props.author}</li> <br/><br/><br/>
                <li dangerouslySetInnerHTML={{__html: props.description}} />
            </ul>
        </div>
    );

}

export default Book;