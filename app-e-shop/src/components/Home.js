import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

class Home extends Component {
    
    render() {

        return (
            <div class="conatiner ">
            <Header/>
            <div id="fullscreen_bg" class="fullscreen_bg"/>
<div className="col-md-6 col-md-offset-3">
    <form class="form-signin">
        <h1 class="form-signin-heading text-muted">Login</h1>
        <input type="text" class="form-control" placeholder="Email address" required="" autofocus=""/>>
        <input type="password" class="form-control" placeholder="Password" required=""/>
        <button class="btn btn-lg btn-primary btn-block" type="submit">
            Login
        </button>
        <br></br>
        <p style={{color: 'white'}}><Link to="create">Create a new shop</Link></p>
    </form>
</div>
            <Footer />
        </div>
    );

    }

    }

    export default Home;
