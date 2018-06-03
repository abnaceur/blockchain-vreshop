import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Web3 from 'web3';
import Register from './Register';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wallet: [],
            info: '',
        };
        this.createWallet = this.createWallet.bind(this);
    }

    componentDidMount() {
        if(typeof web3 !== 'undefined')
        web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
         

        web3.eth.getAccounts().then(value => {
            console.log('Accounts : ', value );
            web3.eth.defaultAccount = value[10];
            this.setState({
                accouts: value
            })
        });
    }

    createWallet() {
        const wallet = web3.eth.accounts.wallet.create(1, '54674321§3456764321§345674321§3453647544±±±§±±±!!!43534534534534');
        this.setState({
            wallet
        })


        web3.eth.getBalance(wallet[0]['address']).then(value => {
            console.log('this value : ', value / 1000000000000000000, ' Ether' );
            const info = <div>
            <div class="panel panel-default">
            <div class="panel-heading"><h3>Wallet info</h3></div>
            <div class="panel-body"><b>Wallet address</b> : {wallet[0]['address']}<br></br>
            <p><b>Your balance :</b> {value / 1000000000000000000} Ether</p><br></br>
            <b>Wallet private key :</b> {wallet[0]['privateKey']}<br></br>
            <p>KEEP YOUR PRIVATE KEY SECRET</p>
            </div>
            </div>
            <Link to="/register">
            <button class="btn btn-lg btn-primary btn-block">Step 2</button>
            </Link>
            </div>;
        this.setState({ info});
            this.setState({
                balance: value / 1000000000000000000
            });
        });
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });h
    }

    
    render() {
        return (
            <div class="conatiner ">
                <Header/>
                <div id="fullscreen_bg" class="fullscreen_bg"/>
    <div className="col-md-6 col-md-offset-3">
        <form class="form-signin">
            <h1 class="form-signin-heading ">Create a Wallet</h1>
            <button onClick={this.createWallet} class="btn btn-lg btn-primary btn-block">
                Create
            </button>
        </form>
       {this.state.info}
    </div>
                <Footer />
            </div>
    );

    }

    }

    export default Create;
