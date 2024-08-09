import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/Vivum Logos/LionLogo-2-Transparent.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container overview">
      {/* <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div> */}
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Vivum 2024</p>
        <h1 className="primary-heading" id="about-section-heading">
          How do we manage this?
        </h1>
        <p className="primary-text" id="about-section-description">
          Since the start of  VIVUM, we have made it a priority to provide accessible healthcare to as many people as possible. Over 70% of the daily visits at our partner's facilites are under the poverty line. Through this cause, we hope to make a difference in as many lives as we can.
        </p>
      </div>
    </div>
  );
};

export default About;
