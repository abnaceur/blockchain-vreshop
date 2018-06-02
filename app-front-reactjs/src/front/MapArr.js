import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from '../components/Footer';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class MapArr extends Component {
    constructor(props) {
      super(props);
      this.state = {
        arr: '',
        lat: '',
        lng: '',
      }

    }

    componentWillMount() {
      const arr = window.location.href.substring(window.location.href.search('=') + 1, window.location.href.lenght);;
        this.setState({arr});
      
        switch(arr) {
          case '1':
            this.setState({
              lat: 48.8592,
              lng: 2.3417,
            });
            case '2':
            this.setState({
              lat: 48.8655,
              lng: 2.3426,
            });
            case '3':
            this.setState({
              lat: 48.8637,
              lng: 2.3615,
            });
            case '4':
            this.setState({
              lat: 48.8601,
              lng: 2.3507,
            });
            case '5':
            this.setState({
              lat: 48.8448,
              lng: 2.3471,
            });
            case '6':
            this.setState({
              lat: 48.8493,
              lng: 2.33,
            });
            case '7':
            this.setState({
              lat: 48.8565,
              lng: 2.321,
            });
            case '8':
            this.setState({
              lat: 48.8763,
              lng: 2.3183,
            });
            case '9':
            this.setState({
              lat: 48.8718,
              lng: 2.3399,
            });
            case '10':
            this.setState({
              lat: 48.8709,
              lng: 2.3561,
            });
            case '11':
            this.setState({
              lat: 48.8574,
              lng: 2.3795,
            });
            case '12':
            this.setState({
              lat: 48.8412,
              lng: 2.3876,
            });
            case '13':
            this.setState({
              lat: 48.8322,
              lng: 2.3561,
            });
            case '14':
            this.setState({
              lat: 48.8331,
              lng: 2.3264,
            });
            case '15':
            this.setState({
              lat: 48.8412,
              lng: 2.3003,
            });
            case '16':
            this.setState({
              lat: 48.8637,
              lng: 2.2769,
            });
            case '17':
            this.setState({
              lat: 48.8835,
              lng: 2.3219,
            });
            case '18':
            this.setState({
              lat: 48.8925,
              lng: 2.3444,
            });
            case '19':
            this.setState({
              lat: 48.8817,
              lng: 2.3822,
            });
            case '20':
            this.setState({
              lat: 48.8646,
              lng: 2.3984,
            });
        }

    }

    render() {
        const GoogleMapExample = withGoogleMap(props => (
           <GoogleMap
             defaultCenter = { { lat: this.state.lat, lng: this.state.lng } }
             defaultZoom = { 22 }
           >
           </GoogleMap>
        ));
        return(
           <div>
               <Header />
               
<div className="row">
<div style={{ marginTop: '75px'}} class="pull-left col-md-4">
        <div class="bhoechie-tab-container">
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 bhoechie-tab-menu">
              <div class="list-group">
                <a href="#" class="list-group-item active  text-center">
                  <h4 class="glyphicon glyphicon-briefcase"></h4><br/>Shops
                </a>
              <a href="#/map" class="list-group-item text-center">
                  <h4 class="glyphicon glyphicon-cutlery"></h4><br/>Restaurant
                </a>
                <a href="#" class="list-group-item text-center">
                  <h4 class="glyphicon glyphicon-home"></h4><br/>Hotel
                </a>
                <a href="#" class="list-group-item text-center">
                  <h4 class="glyphicon glyphicon-plane"></h4><br/>Flight
                </a>
                <a href="#" class="list-group-item text-center">
                  <h4 class="glyphicon glyphicon-road"></h4><br/>Train
                </a>
                <a href="#" class="list-group-item text-center">
                  <h4 class="glyphicon glyphicon-education"></h4><br/>Education
                </a>
                <a href="#" class="list-group-item text-center">
                  <h4 class="glyphicon glyphicon-credit-card"></h4><br/>Credit Card
                </a>
              </div>
            </div>
          
        </div>
</div>

<div className="col-md-8" >



<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Super market</h4>
      </div>
      <div class="modal-body">
      <img style={{width: '497px', height: '258px'}}src="./img/market.jpg"/>
        <h4>Have a virtual reality shopping experience</h4>
        <Link to="/shop"><button className="btn btn-info">Visit shop</button></Link>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>


<h2  style={{ float: 'left'}}>Welcome to Paris {this.state.arr <= 9 ? '7500'+ this.state.arr : '750'+ this.state.arr }</h2>
             <GoogleMapExample
               containerElement={ <div style={{ marginTop: '30px',marginRight: '30px', float: 'right', height: `670px`, width: '1600px' }} /> }
               mapElement={ <div style={{ height: `100%` }} /> }
             />
             </div>
            <div id="MapParis" class="modalToggle"></div>
           
             </div>
             <Footer/>
           </div>
        );
        }
    }
     

    export default MapArr;
