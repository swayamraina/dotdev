import React from 'react';

import Post from '../containers/Post';
import { _2018 } from '../constants/engineering/2018'
import { _2019 } from '../constants/engineering/2019'
import { _2020 } from '../constants/engineering/2020'

import '../styles/BlogHome.css'



function BlogHome (props) {

    const type = props.match.params.type

    const blogs = [].concat(_2020).concat(_2019).concat(_2018)

    const build = () => {
        const items = [];
        blogs.forEach( b => items.push(
            <Post 
                key   = { b.title }
                title = { b.title }
                desc  = { b.description }
                date  = { b.date }
                tags  = { b.tags }
                link  = { b.link }
                image = { b.image }
            />  
        ))
        return items
    }

    return (
        <div className="post-container"> { build() } </div>
    )

}

export default BlogHome;