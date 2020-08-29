import React from 'react';

import GitHubProject from '../components/GitHubProject'
import Quote from '../components/Quote';

import '../styles/GitHubProject.css'



function GitHubProjects () {

    return (
        <div>
            <h3><Quote quote="Volunteers don’t get paid, not because they’re worthless, but because they’re priceless..." /></h3>
            <div className="github-desc">
                A very beautifully explained article on <a href="https://dev.to/brianverm/how-4-lines-of-java-code-end-up-in-518772-lines-in-production-h7o" target="_blank"><b>[ Your 4 LOC is 50K LOC in production ]</b></a> makes 
                one realise how dependent a software is on open-source softwares. Almost all projects 
                are built using some very famous open-source libraries and frameworks. <br/>
                Understanding this, I always try to give back to the community by contributing to new feature requests, bug fixes or even helping people on StackOverflow. <br/><br/>
                Here are a few github repos I have contributed to,
            </div>
            <div className="github-main">
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
        </div>
    );

}

export default GitHubProjects;