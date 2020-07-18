import React from 'react';

import BlogType from './BlogType';

import '../styles/Blog.css'
import Quote from '../components/Quote';
import Book from '../components/Book';



function Blog () {

    const type = [
        {
            "type": "engineering",
            "title": "Engineering",
            "description": "Truth can only be found in one place: the code.",
            "link": "/blogs/engineering",
        },
        {
            "type": "coding",
            "title": "Coding",
            "description": "An algorithm must be seen to be believed.",
            "link": "/blogs/coding",
        },
        {
            "type": "poetry",
            "title": "Poetry",
            "description": "Poetry is evidence of life. If your life is burning well, poetry is just the ash.",
            "link": "/blogs/poetry",
        },
        {
            "type": "history",
            "title": "History",
            "description": "History will be kind to me for I intend to write it.",
            "link": "/blogs/history",
        },
        {
            "type": "books",
            "title": "Books",
            "description": "That's the thing about books. They let you travel without moving your feet.",
            "link": "/blogs/books",
        },
    ]
    

    return (
        <div>
            <div className="blog-desc">
                <Quote quote="Beneath this mask there is more than flesh. Beneath this mask there is an idea! And ideas are bulletproof." />
                <div className="text-holder-1">
                    Humans deep down are all writers; writing is nothing but flow of emotions through this medium.
                    My love for writing is known to the people around me and I write for the sheer joy of exploring and finding things out.
                </div>
                <div className="book-holder">
                    <Book 
                        cover="https://raw.githubusercontent.com/swayamraina/dotdev/master/resources/books/images/pleasure-of-finding-things-out.jpg" 
                        title="The pleasure of finding things out"
                        author="Richard P. Feyman"
                        description="When I was young, I was introduced to this book when our school quiz team won 1st prize on National Science
                                     Day. <br/> <br/>
                                     This book brought a change in how I looked at lessons or whatever was taught. This book introduced me to 
                                     the notion of <b><i>'Pleasure of finding things out'</i></b> and how we are shaped by our environment.
                                     <br/> <br/>
                                     Everything I write is, as I mentioned earlier, because of the sheer pleasure of findings things out 
                                     (except for poetry, that is pure emotions!)
                                     "
                    />
                </div>
            </div>
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
        </div>
    );

}

export default Blog;