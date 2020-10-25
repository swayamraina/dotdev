import React from 'react';

import BlogCategory from './BlogCategory';
import Book from '../components/Book';
import { categories } from '../constants/categories';

import '../styles/Blog.css';




function Blog () {
    
    return (
        <div>
            <div className="blog-desc">
                <div className="text-holder-1">
                    Humans deep down are all writers; writing is nothing but flow of emotions through this medium.
                    My love for writing is known to the people around me and I write for the sheer joy of exploring and finding things out.
                </div>
                <div className="book-holder">
                    <Book 
                        cover="https://raw.githubusercontent.com/swayamraina/dotdev/master/resources/blogs/books/images/pleasure-of-finding-things-out.jpg" 
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
                    categories.map ( 
                        t => <BlogCategory
                                key = {t.type}
                                link = {t.link}
                                title = {t.title}
                                description = {t.description}
                                image = {t.image}
                            /> 
                    )
                }
            </div>
        </div>
    );

}

export default Blog;