import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class MarkerMap extends Component {
    
    render() {
        return (
            <div><Link to={"/map?arr=" + this.props.url}>
                <div className={"arr" + this.props.shape} className={"markerPos" + this.props.pos}></div>
            </Link></div>
    );

    }

    }

    export default MarkerMap;
