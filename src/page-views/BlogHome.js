import React from 'react';

import Post from '../containers/Post';
import { _2018 as e_2018 } from '../constants/engineering/2018'
import { _2019 as e_2019 } from '../constants/engineering/2019'
import { _2020 as e_2020 } from '../constants/engineering/2020'

import '../styles/BlogHome.css'



function BlogHome (props) {

    const type = props.match.params.type


    const build = (type) => {

        var blogs = []
        const e_blogs = [].concat(e_2020).concat(e_2019).concat(e_2018)
        const m_blogs = []

        switch (type) {
            case "engineering": blogs = e_blogs; break;
            case "miscellaneous": blogs = m_blogs; break;
        }

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
        <div className="post-container"> { build (type) } </div>
    )

}

export default BlogHome;