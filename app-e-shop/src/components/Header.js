import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Header extends Component {
    
    render() {
        let style = { 
            backgroundColor: "rgba(255,255,255,.100)",
        }

        let styleBrand = {
            color: "white",
            fontSize : "32px",
        }

        let styleDis = {
            marginRight : "30px",
            marginTop : "30px",
            color: "white",
            fontSize : "32px",
            textDecortion: "none"
        }
        
        return (
            <nav style={style} class="navbar navbar navbar-fixed-top">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand"><h2 style={styleBrand}><b>eShop</b></h2></a>
              </div>
              <ul class="nav navbar-nav navbar-right">
              
              </ul>
            </div>
          </nav>
    );

    }

    }

    export default Header;
