import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from '../components/Footer';
import { SVGMap, Taiwan } from 'react-svg-map';
import 'react-svg-map/lib/index.css';
import MarkerMap from './MarkerMap';
import ReactPlayer from 'react-player'

class Shop extends Component {
    constructor(props) {
        super(props);

    }

    
    render() {
      
      
        return (
            <div class="conatiner">
            <Header />


<div class="w3-sidebar w3-light-grey w3-bar-block" style={{width:"15%"}}>
  <h3 class="text-center w3-bar-item">Super Market</h3>
  <a href="#" class="w3-bar-item w3-button">Products</a>
  <a href="#" class="w3-bar-item w3-button">Scan QR code</a>
  <a href="#" class="w3-bar-item w3-button">Check us on e-Trust</a>
  <a href="/welcome" class="w3-bar-item w3-button">Create an e-shop</a>
</div>

            <center>
            <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=4bhCnXOlRbg'
          width='60%'
          height='600px'
        />
      </div></center>
            <Footer />
          </div>
    );

    }

    }

    export default Shop;
