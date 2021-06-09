import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Code from './components/Code/Code';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/code" component={Code} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
    </Switch>
);