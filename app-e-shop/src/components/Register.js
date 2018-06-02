
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Web3 from 'web3';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
        };
    }

    componentDidMount() {
        if(typeof web3 !== 'undefined')
        web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
         
        web3.eth.getBalance("0x007CcfFb7916F37F7AEEf05E8096ecFbe55AFc2f").then(value => {
            console.log('this value : ', value / 1000000000000000000, ' Ether' );
            this.setState({
                balance: value / 1000000000000000000
            })
        });

        web3.eth.getAccounts().then(value => {
            console.log('Accounts : ', value );
            web3.eth.defaultAccount = value[10];
            this.setState({
                accouts: value
            })
        });


        let myContract = new web3.eth.Contract([
            {
                "constant": true,
                "inputs": [],
                "name": "doamin",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "title",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "location",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_title",
                        "type": "string"
                    }
                ],
                "name": "initInfo",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "boss",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ], '0x6e83EF320471320378640Af6ac0111Ade8465CeD' , {
            from: '0x6Abd228e4d94ccED7cf975924B583bE1be3BbFE0', // default from address
            gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
        });

        myContract.methods.initInfo('hello').send({from: '0x6Abd228e4d94ccED7cf975924B583bE1be3BbFE0'}, function(error, transactionHash){
            alert('thos');
            console.log('error', error);
            console.log('hash', transactionHash);
        });



    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }



    
    render() {
        return (
            <div class="conatiner ">
                <Header/>
                <div id="fullscreen_bg" class="fullscreen_bg"/>
    <div className="col-md-6 col-md-offset-3">
        <form class="form-signin">
            <h1 class="form-signin-heading text-muted">Company</h1>
            <input type="text" class="form-control" placeholder="Title"/>
            <input type="text" class="form-control" placeholder="Domain"/>
            <input type="text" class="form-control" placeholder="Boss"/>
            <input type="text" class="form-control" placeholder="Location"/>
            <button class="btn btn-lg btn-primary btn-block" type="submit">
                Register
            </button>
            <br></br>
            <p style={{color: 'white'}}>Once the information is validated <br></br>
            It will be regitered in the ethereum blockchain for use in e-trust platform.</p>
        </form>
    </div>
                <Footer />
            </div>
    );

    }

    }

    export default Register;
