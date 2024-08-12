import React from 'react';
import { Link } from 'react-router-dom';
import WelcomeS1 from "./components/WelcomeS1";
import WelcomeS2 from "./components/WelcomeS2";
import WelcomeS3 from "./components/WelcomeS3";
import WelcomeS4 from "./components/WelcomeS4";
import WelcomeS5 from "./components/WelcomeS5";
import './Styling/WelcomeS1Style.css';

const WelcomeScreen = () => {
  return (
    <div className="App">
        <WelcomeS1/>
        <WelcomeS2/>
        <WelcomeS3/>
        <WelcomeS4/>
        <WelcomeS5/>
    </div>
  );
};

export default WelcomeScreen;