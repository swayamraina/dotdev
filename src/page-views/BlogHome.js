import React, { useEffect, useState } from 'react';

import Post from '../containers/Post';
import Loader from '../components/Loader'

import '../styles/BlogHome.css'



function BlogHome (props) {

    const type = props.match.params.type

    const [ loading, setLoding ] = useState(false)
    const [ latest, setLatest ] = useState([])
    const [ posts, setPosts ] = useState([])

    const handleSuccess = (data) => {
        data.all.reverse()
        setLatest(data.all.splice(0,1))
        setPosts(data.all.splice(0))
        setTimeout( () => setLoding(false), 500)
    }

    const handleError = (data) => {
        setLoding(false)
    }

    useEffect (
        () => {
            setLoding(true)
            fetch(`https://raw.githubusercontent.com/swayamraina/dotdev/master/resources/listing/${type}.json`)
            .then(res => res.json())
            .then((data) => handleSuccess(data), () => handleError())
        }, [type]
    ); 


    const renderLoader = () => <Loader />

    const renderOldPost = () => {
        return (
            <div>  
                <div className="latest-post-start"> Latest </div>
                <div> 
                    {
                        latest.map (
                            p => <Post 
                                    key = {p.title}
                                    title = {p.title}
                                    description = {p.description}
                                    date = {p.date}
                                    tags = {p.tags}
                                    link = {p.link}
                                />
                        )
                    }   
                </div>
                <div className="post-start"> Posts </div>
                <div>
                    {
                        posts.map (
                            p => <Post 
                                    key = {p.title}
                                    title = {p.title}
                                    description = {p.description}
                                    date = {p.date}
                                    tags = {p.tags}
                                    link = {p.link}
                                />
                        )
                    }
                </div>
            </div>
        );
    }


    return loading ? renderLoader() : renderOldPost();

}

export default BlogHome;