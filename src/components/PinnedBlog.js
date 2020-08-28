import React from 'react';

import '../styles/PinnedBlog.css'



function PinnedBlog (props) {

    return (
        <div className="pinned-blog-main" onClick={ ()=> window.open(`${props.link}`, "_blank") } >
            <div className="pinned-blog-img" style={{backgroundImage: `url(${props.image})`}} />
            <div> {props.title} </div> <br/>
            <div> {props.description} </div>
        </div>
    );

}

export default PinnedBlog;