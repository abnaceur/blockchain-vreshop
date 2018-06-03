import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Web3 from 'web3';
import {ToastContainer, toast} from 'react-toastify';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
         title: '',
         domain: '',
         boss: '',
         location: '',
         myContract: [],
         notify: '',
         counter: 0,
         accounts: '',
         transactionHash: '',
         blockNumber: '',
         gasUsed: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        if(typeof web3 !== 'undefined')
        web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

        web3.eth.getAccounts().then(value => {
            console.log('Accounts : ', value );
            web3.eth.defaultAccount = value[10];
            this.setState({
                accounts: value
            })
        });


        const myContract = new web3.eth.Contract([
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
                "constant": false,
                "inputs": [
                    {
                        "name": "_title",
                        "type": "string"
                    },
                    {
                        "name": "_domain",
                        "type": "string"
                    },
                    {
                        "name": "_boss",
                        "type": "string"
                    },
                    {
                        "name": "_location",
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
                "constant": true,
                "inputs": [],
                "name": "getInfo",
                "outputs": [
                    {
                        "name": "a",
                        "type": "string"
                    },
                    {
                        "name": "b",
                        "type": "string"
                    },
                    {
                        "name": "c",
                        "type": "string"
                    },
                    {
                        "name": "v",
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
                "name": "domain",
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
        ], '0xF918ee734B64085F11ef96bF64089cA8CE2bB60c' , {
            from: '0x6Abd228e4d94ccED7cf975924B583bE1be3BbFE0', // default from address
            gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
        });

        this.setState({myContract});
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit() {
        this.state.counter += 1;
        this.state.myContract.methods.initInfo(this.state.title, this.state.domain, this.state.boss, this.state.location).send({from: '0x6Abd228e4d94ccED7cf975924B583bE1be3BbFE0'}).then(function(result){

        });

        if (this.state.counter == 4) {
            const notify = [
                toast.success("You have been registered successfully ", {
                    position: toast.POSITION.RIGHT_CENTER
                })];
            };
    }


    
    render() {

        return (
            <div class="conatiner ">
                <Header/>
                <ToastContainer/>
                <div id="fullscreen_bg" class="fullscreen_bg"/>
    <div className="col-md-6 col-md-offset-3">
        <div class="form-signin">
            <h1 class="form-signin-heading text-muted">Company</h1>
            <input type="text" onChange={this.handleChange} name="title" value={this.state.title} class="form-control" placeholder="Title"/>
            <input type="text" onChange={this.handleChange} name="domain" value={this.state.domain} class="form-control" placeholder="Domain"/>
            <input type="text" onChange={this.handleChange} name="boss"  value={this.state.boss} class="form-control" placeholder="Boss"/>
            <input type="text"  onChange={this.handleChange} name="location" value={this.state.location} class="form-control" placeholder="Location"/>
            <button onClick={this.handleSubmit} class="btn btn-lg btn-primary btn-block">
                Register
            </button>
            <br></br>
            <button class="btn btn-lg btn-primary btn-block">
                Create eVoucher tokens
            </button>
            <br></br>
            <Link to="/etrust">
            <button class="btn btn-lg btn-primary btn-block">
                Go to e-Trust platform!
            </button>
            </Link>
            <br></br>

            <p style={{color: 'white'}}>Once the information is validated <br></br>
            It will be regitered in the ethereum blockchain for use in e-trust platform.</p>
        </div>
    </div>  
            
            <Footer />
            </div>
    );

    }

    }

    export default Register;
