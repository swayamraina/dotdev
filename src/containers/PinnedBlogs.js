import React from 'react';
import { Link } from 'react-router-dom';

import PinnedBlog from '../components/PinnedBlog';
import Quote from '../components/Quote';

import '../styles/PinnedBlog.css'



function PinnedBlogs () {

    return (
        <div>
            <h3><Quote quote="A professional writer is an amateur who didn’t quit..." /></h3>
            <div className="pinned-blog-desc">
                Humans deep down are all writers; writing is nothing but flow of emotions through this medium. My love for writing is known to the people around me and I write for the sheer joy of exploring and finding things out. <br/>
                I frequently ask myself <i>"How this thing works?"</i>; This is what pushes me to understand how and why of it. Once I know the answer, I write simply to spread this 
                knowledge I have gained to others. <br/><br/>
                Here I share my recent answers to the same question, <br/>
                Also, if you want to read more <b><Link to="/blogs">[ click here ]</Link></b>
            </div>
            <div className="pinned-blog-container">
                <PinnedBlog 
                    link=""
                    image="https://nexocode.com/blog/images/websockets-friend-or-foe/web-sockets.jpg"
                    title="How data flows from client to server"
                    description="In the world of abstractions, I talk about how the underlying layers work with your app"
                />
                <PinnedBlog 
                    link=""
                    image="https://miro.medium.com/max/2824/1*5o_L9IXAIfFvbuYvnwO8Sg.png"
                    title="Understanding your API Gateway"
                    description="I was always curious on why gateways are not bottlenecks to systems."
                />
            </div>
        </div>
    );

}

export default PinnedBlogs;