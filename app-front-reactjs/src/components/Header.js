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
                <a class="navbar-brand"><img style={{width: '619px', height: '458px', position: 'relative', left: '-133px', top: '-149px'}} src="/img/EPAY.png"/></a>
              </div>
              <ul class="nav navbar-nav navbar-right">
                <li style={styleDis}><Link to="/front"><b>Discover</b></Link></li>
              </ul>
            </div>
          </nav>
    );

    }

    }

    export default Header;
