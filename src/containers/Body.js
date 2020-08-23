import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../page-views/Home';
import HomeNew from '../page-views/HomeNew';
import Contact from '../page-views/Contact'
import Blog from '../page-views/Blog'
import Projects from '../page-views/Projects'
import BlogHome from '../page-views/BlogHome'
import Content from '..//components/Content'

import '../styles/Body.css'



function Body (props) {

    return (
        <div className="body">
            <Switch>
                <Route exact path="/" component={HomeNew} />
                <Route exact path="/dotdev" component={Home} />
                <Route exact path="/blogs/:type/:year/:page" component={Content} />
                <Route exact path="/blogs/:type" component={BlogHome} />
                <Route exact path="/blogs" component={Blog} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </div>
    );

}

export default Body;