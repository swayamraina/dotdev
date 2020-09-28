import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/BlogCategory.css'
import Quote from '../components/Quote';



function BlogCategory (props) {

    return (
        <div className="blog-type">
            <Link  className="blog-link" 
                   to={{ 
                       pathname: props.link,
                       state: props.title
                    }}>

                <div className="blog-type-title"> {props.title} </div>
                <div className="blog-type-desc"> 
                    <Quote quote={props.description} />
                </div>
            </Link>
        </div>

    );

}

export default BlogCategory;