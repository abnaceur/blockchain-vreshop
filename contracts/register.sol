pragma solidity ^0.4.2;

contract Register {
    // Define title, domain, boss and location
 
    string public title;
    string  public domain;
    string  public boss;
    string  public location;


    function initInfo(string _title, string _domain, string _boss, string _location) public  {
        
        title = _title;
        domain = _domain;
        boss = _boss;
        location = _location;
    }

    function getInfo() view public returns(string a, string b, string c, string v){
        return (title, domain, location, boss);
    }  
       
}