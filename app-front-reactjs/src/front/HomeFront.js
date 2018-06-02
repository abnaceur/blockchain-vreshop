import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from '../components/Footer';
import { SVGMap, Taiwan } from 'react-svg-map';
import 'react-svg-map/lib/index.css';
import MarkerMap from './MarkerMap';

class Home extends Component {
    constructor(props) {
        super(props);

    }

    
    render() {
      
        const arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                        11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

        return (
            <div class="conatiner">
            <Header />
            <img className="mapArr" src="/img/ParisMap.svg"/>
             {arrs.map(arr => 
                 <MarkerMap 
                        url={arr}
                        shape={arr}
                        pos={arr}
                    />
                 )}
            <Footer />
          </div>
    );

    }

    }

    export default Home;
