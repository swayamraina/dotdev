import React from 'react';

import GitHubProject from '../components/GitHubProject'

import '../styles/GitHubProject.css'


function GitHubProjects () {

    return (
        <div>
            <div className="github-row">
                <GitHubProject 
                    org_logo="https://avatars3.githubusercontent.com/u/913567?s=200&v=4"
                    project="Conductor"
                    link="https://github.com/Netflix/conductor"
                    language="java"
                    language_colour="#b07219"
                />
                <GitHubProject 
                    org_logo="https://avatars2.githubusercontent.com/u/538264?s=200&v=4"
                    project="Piranha"
                    link="https://github.com/uber/piranha"
                    language="java"
                    language_colour="#b07219"
                />
                <GitHubProject 
                    org_logo="https://avatars3.githubusercontent.com/u/382692?s=200&v=4"
                    project="Jackson"
                    link="https://github.com/FasterXML/jackson-databind"
                    language="java"
                    language_colour="#b07219"
                />
            </div>  
            <div className="github-row">
                <GitHubProject 
                    org_logo="https://avatars1.githubusercontent.com/u/47359?s=200&v=4"
                    project="Sharding Sphere"
                    link="https://github.com/apache/shardingsphere"
                    language="java"
                    language_colour="#b07219"
                />
                <GitHubProject 
                    org_logo="https://avatars1.githubusercontent.com/u/47359?s=200&v=4"
                    project="APISIX"
                    link="https://github.com/apache/apisix"
                    language="lua"
                    language_colour="#000080"
                />
            </div> 
        </div>
    );

}

export default GitHubProjects;