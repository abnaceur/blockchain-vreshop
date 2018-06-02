import React, {Component} from 'react';
import {router, route, Browserhistory} from "react-router";


export default  class AnimText extends Component {

    render() {

        return (
            <div className="home1">
                <b>
            <p className="styleText1" >connect</p><br></br> 
        <a href="" class="typewrite styleText" data-period="2000" data-type='[ "PEOPLE", "CULTURES", "DREAMS", "WORLD" ]'>
            <span class="wrap"></span>
             </a>
        </b>    
        <div class='menu closed menuBtn'>
        <div class='messages button'></div>
        <div class='music button'></div>
        <div class='home button'></div>
        <div class='main button'>Discover</div>
        </div>
            </div>

        )
    };
}
