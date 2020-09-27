import React from 'react';
import { Link } from 'react-router-dom';

import CurrentlyReading from '../containers/CurrentlyReading'
import GitHubProjects from '../containers/GithubProjects'
import WorkProfile from '../containers/WorkProfile'
import ContactBar from '../components/ContactBar'
import PinnedBlogs from '../containers/PinnedBlogs';

import '../styles/Swayam.css'



function Swayam () {

    return (
        <div>
            <div className="home-main">
                <div className="home-timeline"> <WorkProfile /> </div>
                <div className="home-desc">
                    <div className="home-desc-text">
                        <h1 className="me">Hi there! I'm Swayam</h1>
                        I hail from 🌲🌲 <b><a href="https://en.wikipedia.org/wiki/Chandigarh" target="_blank">The City Beautiful</a></b> 🌲🌲<br/>
                        Currently working <b><a href="https://www.swiggy.com/" target="_blank">@Swiggy</a></b>  🚀 <br/><br/>
                        And in love with,
                        <div>
                            <ul>
                                <li><b><Link>⌦ Football</Link></b></li>
                                <li><b><Link>⌦ Reading / Writing</Link></b></li>
                                <li><b><Link>⌦ Finance</Link></b></li>
                                <li><b><Link>⌦ Software Design</Link></b></li>
                            </ul>
                        </div>
                    </div>
                    <GitHubProjects />
                    <PinnedBlogs />
                    <CurrentlyReading />
                </div>
            </div>
            <ContactBar />
        </div>
        
    )

}

export default Swayam;