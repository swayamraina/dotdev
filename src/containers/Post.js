import React from 'react';
import { Link } from 'react-router-dom';

import Tag from '../components/Tag'

import '../styles/Post.css'



function Post (props) {

    return (
        <div className="post">
            <Link to={props.link} className="post-link">
                <div className="post-head">
                    <div className="post-title">{props.title}</div>
                    <div className="post-date">{props.date}</div>
                </div>
                <div className="post-description">{props.description}</div>
                <div className="post-tags">
                    {
                        props.tags.map ( 
                            t => <Tag key={t} text={t} />
                        )
                    }
                </div>
                <div className="vertical-line-bottom" />
            </Link>
        </div>
    );

}

export default Post;