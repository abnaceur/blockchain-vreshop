import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Header extends Component {
    
    render() {
        let styleBrand = {
            color: "white",
            fontSize : "22px",
        }

        return (
            <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand"><soan style={styleBrand} ><b>eParis</b></soan></a>
              </div>
              <ul class="nav navbar-nav pull-right">
                <li class="active"><Link to="/"><soan style={styleBrand} >Home</soan></Link></li>
                <li class="active"><Link to="/front"><soan style={styleBrand} >Map</soan></Link></li>
              </ul>
            </div>
          </nav>
    );

    }

    }

    export default Header;
