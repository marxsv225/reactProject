import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import News from "./components/News";
import Services from './components/Services';
import MissionFaq from './components/MissionFaq';
import Temoignage from './components/Temoignage';
import Help from "./components/Help";
import Footer from './components/Footer';
// import {Route, Switch} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Header />
      <News />
      <Services />
      <MissionFaq />
      <Temoignage />
      <Help />
      <Footer />
    </div>
  );
}

export default App;
