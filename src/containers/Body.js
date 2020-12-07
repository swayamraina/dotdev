import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Swayam from '../page-views/Swayam';
import Home from '../page-views/Home';
import Books from '../page-views/Books';
import Blog from '../page-views/Blog'
import Projects from '../page-views/Projects'
import BlogHome from '../page-views/BlogHome'
import BlogContent from '..//components/BlogContent'

import '../styles/Body.css'



function Body (props) {

    return (
        <div className="body">
            <Switch>
                <Route exact path="/" component={Swayam} />
                <Route exact path="/updates" component={Home} />
                <Route exact path="/blogs/:type/:year/:page" component={BlogContent} />
                <Route exact path="/blogs/:type" component={BlogHome} />
                <Route exact path="/blogs" component={Blog} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/books" component={Books} />
            </Switch>
        </div>
    );

}

export default Body;