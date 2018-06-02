import  React, { Component } from "react";
import { Redirect, Link, Route, Switch } from "react-router-dom";
import { router, route, Browserhistory } from "react-router";
import Home from "./components/Home";
import HomeFront from './front/HomeFront';
import MapArr from './front/MapArr';
import Shop from './front/Shop';

class App extends Component {
    render() {
        return (
            <div className="row">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/front" component={HomeFront} />
                    <Route exact path="/map" component={MapArr} />
                    <Route exact path="/shop" component={Shop} />
                </Switch>
            </div>
        );
    }
}

export default App; 