import React from 'react';

import BlogType from './BlogType';

import '../styles/Blog.css'



function Blog () {

    const type = [
        {
            "type": "engineering",
            "title": "Engineering",
            "description": " \" Truth can only be found in one place: the code. \" ",
            "link": "/blogs/engineering",
        },
        {
            "type": "coding",
            "title": "Coding",
            "description": " \" An algorithm must be seen to be believed. \" ",
            "link": "/blogs/coding",
        },
        {
            "type": "history",
            "title": "History",
            "description": " \" History will be kind to me for I intend to write it. \" ",
            "link": "/blogs/history",
        },
        {
            "type": "books",
            "title": "Books",
            "description": " \" That's the thing about books. They let you travel without moving your feet. \" ",
            "link": "/blogs/books",
        },
        {
            "type": "poetry",
            "title": "Poetry",
            "description": " \" Poetry is evidence of life. If your life is burning well, poetry is just the ash. \" ",
            "link": "/blogs/poetry",
        }
    ]
    

    return (
        <div className="blog" >
            {
                type.map ( 
                    t => < BlogType
                            key = {t.type}
                            link = {t.link}
                            title = {t.title}
                            description = {t.description}
                        /> 
                )
            }
        </div>
    );

}

export default Blog;