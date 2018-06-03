import  React, { Component } from "react";
import { Redirect, Link, Route, Switch } from "react-router-dom";
import { router, route, Browserhistory } from "react-router";
import Home from "./components/Home";
import Create from './components/Create';
import Register from './components/Register';
import Etrust from './components/Etrust';


class App extends Component {
    render() {
        return (
            <div className="row">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/create" component={Create} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/etrust" component={Etrust} />
                </Switch>
            </div>
        );
    }
}

export default App; 