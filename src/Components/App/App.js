import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import CountryDetail from '../CountryDetail/CountryDetail';
import CountryList from '../CountryList/CountryList';
import Sports from '../Sports/Sports';
import GoldMedalList from '../GoldMedalList/GoldMedalList';
import Search from '../Search/Search';

function App() {
  return (
    <div className="App">
      <header>
        <img id="torch-icon" alt="" src={require("../../img/torch.png")} />
        <div id="title-line"></div>
        <a className="titleAnchor" href="./index.html"><h1 id="title"><span className="blue">TO</span><span className="yellow">RC</span><span className="black">H F</span><span className="green">IL</span><span className="red">ES</span></h1></a>
        <div id="title-line"></div>
        <img id="torch-icon" alt="" src={require("../../img/torch.png")} />
      </header>
      <div id="darkBlue"></div>
      <div id="olympicColours">
        <div className="bar" id="blue"></div>
        <div className="bar" id="yellow"></div>
        <div className="bar" id="black"></div>
        <div className="bar" id="green"></div>
        <div className="bar" id="red"></div>
      </div>
      <div id="introduction">
        <p>Welcome to Torch Files, where you can find a breakdown of all the gold medals won at both the Summer and Winter Olympics by individual countries over the years. Start by inputing a country's name as it appears in the below list to find a thorough breakdown of that country's accomplishments with gold medals at the Olympics.</p>
      </div>
      <div id="root">
        <Router>
          <div id="container">
          <Search />
          <Route path="/country/:countryName" component={ props => (
          <div>
            <CountryDetail {...props}/>
            <GoldMedalList {...props}/>
            <Sports {...props}/>
          </div>
          )} />
          <Route exact path="/" component={ props => (
            <div>
            <CountryList {...props}/>
            </div>
          )} />
        </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
