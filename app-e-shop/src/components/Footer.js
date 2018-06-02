import React, {Component} from 'react';
import {router, route, Browserhistory} from "react-router";


export default  class Footer extends Component {

    render() {
        let styleFooter = {
            color: "white",
            top: "15px",
            position: "relative"
        }
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-bottom">
                    <div className="text-center">
                        <span style={styleFooter} className="footer-text"> © 2018 Copyright :
                            HACKATON <strong>42</strong> SCHOOL - ANGELHACK
                        </span>
                    </div>
                </nav>
            </div>

        )
    };
}
