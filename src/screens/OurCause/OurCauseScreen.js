import React from "react";
import { Link } from 'react-router-dom';
import CauseS1 from "./components/Cause-S1";
import CauseS2 from "./components/Cause-S2";
import Charities from "./components/Cause-S3";
import Footer from "./components/Cause-S4Footer";
import './OurCauseStyling.css';
import './CauseS2Styling.css';
import './CauseS3Styling.css';
const OurCauseScreen = () => {
    return (
      <div className="App">
        <CauseS1/>
        <CauseS2/>
        <Charities/>
      </div>
    );
  };
  
  export default OurCauseScreen;