import React from 'react';

import Tag from '../components/Tag'

import '../styles/Post.css'



function Post (props) {

    return (
        <div className="post">

            <div className="vertical-line-top" />

            <div className="post-title">{props.title}</div>
            <div className="post-date">{props.date}</div>
            <div className="post-description">{props.description}</div>
            <div className="post-tags">
                {
                    props.tags.map ( 
                        t => <Tag key={t} text={t} />
                    )
                }
            </div>

            <div className="vertical-line-bottom" />

        </div>
    );

}

export default Post;