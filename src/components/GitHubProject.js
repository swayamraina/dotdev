import React from 'react';

import '../styles/GitHubProject.css'



function GitHiubProject (props) {

    return (
        <div className="github-project" onClick={ ()=> window.open(`${props.link}`, "_blank") } >
            <div className="org-logo" style={{backgroundImage: `url(${props.org_logo})`}}/>
            <ul className="github-project-desc">
                <li>{props.project}</li>  <br/>
                <li>
                    <span class="repo-language-color" style={{backgroundColor: `${props.language_colour}`}} />
                    <span className="repo-language"> {props.rating} {props.language} </span>
                </li>
            </ul>
        </div>
    );

}

export default GitHiubProject;