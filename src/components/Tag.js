import React from 'react';

import '../styles/Tag.css'



function Tag (props) {

    return (
        <div className="tag-item" >
            {props.text}
        </div>
    );

}

export default Tag;