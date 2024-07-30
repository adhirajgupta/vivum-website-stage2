// Overview.js
import React from 'react';
import { Link } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './OverviewScreenStyle.css'

const Overview = () => {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Overview;
