import React from 'react';

import Tag from './Tag.js'

import '../styles/Project.css'



function Project (props) {
    
    return (
        <div className="project" onClick={ ()=> window.open(`${props.link}`, "_blank") } >
            <div className="project-desc">
                <div className="project-desc-title"> { props.title } </div>
                <div className="project-desc-desc"> { props.description} </div>
                <div className="project-desc-tags"> { props.tags.map ( t => <Tag text={t}/> ) } </div>
            </div>
        </div>
    );

}

export default Project;