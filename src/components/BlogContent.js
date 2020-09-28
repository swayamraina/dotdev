import React, { useState, useEffect } from 'react';

import Loader from './Loader'

import '../styles/BlogContent.css'



function BlogContent (props) {

    const branch = "master";

    const [ loading, setLoding ] = useState(false)
    const [ content, setContent ] = useState("")

    console.log(props)

    const type = props.match.params.type
    const year = props.match.params.year
    const page = props.match.params.page

    const url = `https://raw.githubusercontent.com/swayamraina/dotdev/${branch}/resources/blogs/${type}/${year}/${page}.html`

    const handleSuccess = (data) => {
        setContent(data)
        setTimeout( () => setLoding(false), 500)
    }

    const handleError = (data) => {
        setContent(data)
        setTimeout( () => setLoding(false), 500)
    }

    useEffect (
        () => {
            setLoding(true)
            fetch(url)
            .then(res => res.text())
            .then((data) => handleSuccess(data), (data) => handleError(data))
        }, [type,year,page,url]
    ); 


    const renderLoader = () => <Loader />

    const renderContent = () => {
        return (
            <div>
                <div className="blog-content" dangerouslySetInnerHTML={{__html: content}} />
                <br/><br/><br/><br/>
        <h2 className="end-quote">"Stay hungry, Stay foolish..."</h2>
            </div>
        )
    }


    return (
        loading ? renderLoader() : renderContent()
    );

}

export default BlogContent;