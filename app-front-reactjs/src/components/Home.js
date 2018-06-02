import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import AnimText from './AnimText';

class Home extends Component {
    
    render() {

        return (
            <div class="conatiner ">
            <Header />
            <AnimText />
            <Footer />
          </div>
    );

    }

    }

    export default Home;
