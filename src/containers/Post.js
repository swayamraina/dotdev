import React from 'react';
import { Link } from 'react-router-dom';

import Tag from '../components/Tag'

import '../styles/Post.css'



function Post (props) {

    return (
        <div className="post">
            <Link className="post-link"
                to={{
                    pathname: props.link,
                    state: {
                        title: props.title,
                        date:  props.date,
                        tags:  props.tags,
                    }
                }}>
                <div className="post-image" style={{backgroundImage: `url(${props.image})`}} />
                <div className="post-head">
                    <div className="post-title">{props.title}</div>
                </div>
                <div className="post-description">{props.desc}</div>
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