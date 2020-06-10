import React, { useState, useEffect } from 'react';

import Loader from '../components/Loader'



function Content (props) {

    const [ loading, setLoding ] = useState(false)
    const [ content, setContent ] = useState("")

    const type = props.match.params.type
    const year = props.match.params.year
    const page = props.match.params.page

    const url = `https://raw.githubusercontent.com/swayamraina/swayamraina.github.io/master/resources/blogs/${type}/${year}/${page}.html`

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
            <div className="blog-content" dangerouslySetInnerHTML={{__html: content}} />
        )
    }


    return (
        loading ? renderLoader() : renderContent()
    );

}

export default Content;