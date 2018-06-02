Smarter Paris with e-pay and e-trust 
====================================

## Description of the project :

A real representation of Paris boutiques, and bookings 
A user can search by place or by categories or by need
the results will be shown in a map where the user can have a 360 virtual visit to his shop.
Check bookings and goods available.

Payment will be done through an app (e-pay [ Rethink the name ]).
User can leave a feedback which will be proccessed through sentient analytics.

A bootique owner will have the possibility to create a shop.
Verify his physical shop.
Register his shop in the blockchain.
Possibility to register his products to verify the enthanticity of this last by customer.
Provide shop tokens as voucher for prime customers.
Offer instant payment by QR code or facial recognition    


====> Tokens as voucher
- This will represent the voucher for each shop
- Shop will be registered in a blockchain once veryfied
- Possibility to verify the product as well.

====> Instant e-payment [Scan code | facial recognition]
An app binned to the user bank account.
It can send funds from user to user using the same app.
Access the physical shops around a user.
Perform all kind of transaction instentely.
[Payment by QR | facial recognition].
App can be user for chat and networking.
The idea will gether "AI, Smart city, Smart payment, e-Trust"


## Provided solutions :
    1. E-shop.
    2. E-pay.
    3. E-trust.

## Team 
 - abnaceur : http://naceur-abdeljalil.com
 - mschmitt 

## Project's Goals and objectives

E-SHOP : 
1. Build an e-shop platform to present the physical shops online.
	A – Backoffice to create a shop and register it in the blockchain.
	B – The shop owner can add a virtual reality visit to his shop
	    Where products taged with the e-pay Qr bar can be sold.
	C – A customer can buy and/or book services.
	D – A shop owner can register  his products in the blockchain (Backend).

User case : A customer can visit the shop, have a virtual reality experience and buy products
by scaning Qr code and/or book a service. (Frontend)

E-Trust : 
1. A dapp application based on ethereum blockchain
	1- A Contract to register a shop.
	2- A Contract to register a product.
	3- A Contract to create a voucher tocken for customers.
	4- Build an explorer plateforn which shows all transaction.
	    product and shop info in real time.

E-PAY : 
1. A mobile app payment system.
	a. The app can generate Qr code (Sell).
	b. The app is bindded to a bank account
	c. The app can scan code (purchase).
	d. The app can contain the tokens voucher.
    e. The app is used in all kind of payment fast easy and secure.

User case : Generate a Qr code for a product. Scan. Confirm the purchase,
	        Balance has been debited.



## Technologies :
 - Laravel 5 framework.
 - ReactJs.
 - Docker 17.05.0.
 - Webpack.
 - Mysql 5.7
 - Android SDK
 - Ethereum blockChain
 - Solidity
 - web3 1.0
 - Geth
 - Bootstrap 4
 
## Screenshots


## Install the development environment

Get the source:

```bash
git clone https://me-me@bitbucket.org/me-me/hackathon-angelhack.git
```

Edit your `/etc/hosts` file:

```
127.0.0.1   app.e-paris.local
127.0.0.1   phpmyadmin.app.local 
```

Build the environment:


```bash
# copy the .env file.
cp .env-example .env
```


```bash
# Use your GITLAB credentials to login in the Docker private registry for the project.
docker-compose up --build
```
Note: the port 80 must not be used by another application (like Apache or Skype).

P.S: The build may take some time don't worry be happy and grab a cup of tea :)


```bash
# Connect to the app container.
docker exec -ti e-paris_app bash
```

Install all dependencies by composer inside e-paris_app container


```bash
composer install
```

Now generate the key inside the container.

```bash
php artisan key:generate
php artisan config:cache
php artisan config:clear
```

Once the key is generated remember to delete the folder .docker
and start docker-compose again to init the .env app key varibale


```bash
sudo rm -rf .docker
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker-compose up --build -d
```

Note : the option '-d' is for silent mode 

Connect to phpmyadmin on http://phpmyadmin.app.local/ 
and create the database named 'e-paris'


##### For testing do this steps : 


#### For a new database 

Create the tables for the database in the e-paris_app container

```bash
php artisan migrate
```


### Install app_front_reactjs

Navigate to the app-front-reactjs folder 

```bash
cd app-front-reactjs
```

then

```bash
# Install all dependencies.
npm install
```

Create a symblic link for bundle.js

```bash
ln app-front-reactjs/public/bundle.js public/js/bundle.js
```


### Connect to the database

Start this link in your browser: phpmyadmin.e-paris.local
P.S: Get sure that all your containers are up "docker ps".

```bash
Usernaem: root 
Password: root
```


### Interact with your private blockchain

```bash
# Now attach geth to your bootstrap node 
docker exec -it bootstrap geth --datadir=~/.ethereum/devchain attach
```

```bash
# Start the mist wallet 
sudo ./linux-unpacked/mist --rpc http://localhost:8545
```

So we will have access to : 
Solidity-browser => http://app.e-paris.local:8085
P.S : in case your browser show errors please compile your code in "http://remix.ethereum.org" and debug. 
Monitoring platform => http://app.e-paris.local:3000/
Application => http://app.e-paris.local/


### Help

Stop and remove all containers

```bash
docker stop $(docker ps -a -q)
```

Connect to a container via bash (get the container name you want to connect to via command `docker ps`)
```bash
docker exec -ti containername bash
```

Execute a command directly in a container without connecting in bash (get the container name you want to connect to via command `docker ps`)

```bash
docker exec -i containername yourcommand
```

Delete all inages 

```bash
docker rmi -f $(docker images -q)
```

Show inages 

```bash
docker images
```

####Create a new account and set it to be a mining

```
Personal.newAccount(“pass1345”);
miner.setEtherbase(personal.listAccounts[0])
miner.start(2);
```

####After mining, some ether will show up in your account
####Stop mining

```
Miner.stop();
```

#### Start RPC connexion
```bash
admin.startRPC("go-ethereum", 8545, "*", "web3,net,eth") // Active l'API
```


#### Start geth
```bash
geth --rpc --rpccorsdomain "*" --rpcaddr "0.0.0.0" --rpcport "8545" --rpcapi "admin,db,eth,debug,miner,net,shh,txpool,personal,web3"  --networkid 184  --nat "any" --dev
```

#### Test connexion from your local machine
```
curl -X POST -H "Content-Type: application/json" --data-binary '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}' http://127.0.0.1:8545
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["eth key", "latest"],"id":1}' http://127.0.0.1:8545
```
#### In your geth consol list accounts
```
eth.accounts
```

#### Check the balance of a specific key
```
web3.fromWei(eth.getBalance("eth key"), "ether")
```

#### Transactions
```
personal.unlockAccount("eth key", "mypasswd", 30) // unlock the account for 30 seconds
eth.sendTransaction({from: 'eth key', to: 'eth key receiver', value: web3.toWei(1, "ether")}) // Send 1 ether to "eth key receiver"
```
#### Activate the RPC api
```
admin.startRPC("go-ethereum", 8545, "*", "web3,net,eth") // Active l'API
 ```
#### Check connexion with all nodes
```
net.listening
net.peerCount
```

#### Check the Nodes stat
```
eth
```

#### Check the syncronization mode
```
eth.syncing
```