import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/BlogType.css'
import Quote from '../components/Quote';



function BlogType (props) {

    return (
        <div className="blog-type">
            <Link to={props.link} className="blog-link">
                <div className="blog-type-title"> {props.title} </div>
                <div className="blog-type-desc"> 
                    <Quote quote={props.description} />
                </div>
            </Link>
        </div>

    );

}

export default BlogType;