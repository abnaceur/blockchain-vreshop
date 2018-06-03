import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Web3 from 'web3';
import {ToastContainer, toast} from 'react-toastify';
import HeaderEtrust from './HeaderEtrust';

class Etrust extends Component {
    constructor(props) {
        super(props);
        this.state = {
         title: '',
         domain: '',
         boss: '',
         location: '',
         array: [],
         myContract: [],
         notify: '',
         counter: 0,
         accounts: '',
         transactionHash: '',
         blockNumber: '',
         result: '',
         gasUsed: '',
        };
        this.otherFunction = this.otherFunction.bind(this);
    }

    componentWillMount() {
        if(typeof web3 !== 'undefined')
        web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

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

        myContract.methods.getInfo().call((error, result) => {
            this.otherFunction(result);
          });
    }

    otherFunction(value){
        this.setState({
          result:value
        });
  }
    
    render() {

        return (
        
        
        <div class="conatiner ">
        <HeaderEtrust/>

                <ToastContainer/>
                <div id="fullscreen_bg" class="fullscreen_bg"/>
    <div className="col-md-8">
        <div class="form-signin">
           <div class="container">
  <h2 style={{color: 'white'}}>History of registered companies in the ethereum blockchain</h2>      
  <table style={{backgroundColor: 'white', position: 'relative', right: '154px'}} class="table table-bordered">
    <thead>
      <tr>
            <th>Title</th>
            <th>Domain</th>
            <th>Boss</th>
            <th>Location</th>
    </tr>
    </thead>
    <tbody>
      <tr>
      <td>{this.state.result[0]}</td>
      <td>{this.state.result[1]}</td>
      <td>{this.state.result[3]}</td>
      <td>{this.state.result[2]}</td>
      </tr>
    </tbody>
  </table>
</div>

        </div>
    </div>  
            
            <Footer />
            </div>
    );

    }

    }

    export default Etrust;
