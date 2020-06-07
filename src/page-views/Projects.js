import React from 'react';

import '../styles/Projects.css'
import Project from '../components/Project';



function Projects () {

    const projects = [
        {
            "title": "fcd",
            "tags": [ "golang", "daemon", "dropbox", "google-drive" ],
            "link": "https://github.com/swayamraina/fcd",
            "description": "A daemon application which syncs data from local file-system to remote file-system",
        },
    ]

    
    return (
        <div className="projects">
            {
                projects.map ( 
                    p => <Project 
                            title = { p.title }
                            tags = { p.tags }
                            description = { p.description }
                            link = { p.link }
                    /> 
                )
            }
        </div>
    );

}

export default Projects;