import React from "react";
import AboutBackgroundImage from "../Assets/Vivum Logos/TISB.png";
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
          What is Vivum known for?
        </h1>
        <p className="primary-text" id="about-section-description">
          VIVUM is an entirely student-run and charitable initiative which aims to
empower, encourage, and motivate students from diverse backgrounds to
push the envelope and discover something unique across all the
interdisciplinary events offered.
        </p>
        <p className="primary-text">
          Join us for a two-day inter-school fest
celebrating achievements on stage, and the field, in the true spirit of
VIVUM '24.
        </p>
      </div>
    </div>
  );
};

export default About;
