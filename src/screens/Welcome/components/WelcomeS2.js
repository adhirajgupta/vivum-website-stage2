import React from "react";
import img1 from "../../Assets/Images/SBD_6239.jpg";
import img2 from "../../Assets/Images/SBD_6634.jpg";
import img3 from "../../Assets/Images/SBD_6749.jpg";
import img4 from "../../Assets/Images/SBD_7050.jpg";
import img5 from "../../Assets/Images/SBD_7058.jpg";
import img6 from "../../Assets/Images/SBD_7111.jpg";
import img7 from "../../Assets/Images/SBD_7210.jpg";
// import { BsFillPlayCircleFill } from "react-icons/bs";

const WelcomeS2 = () => {
  return (
    <div className="section-2-container">
      {/* <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div> */}
      
      <div className="section-2-text-container">
        <p className="primary-subheading" id="section2-subheading">Vivum 2024</p>
        <h1 className="primary-heading" id="section2-heading">
          What is Vivum known for?
        </h1>
        <p className="primary-text" id="section2-text">
          VIVUM is an entirely student-run and charitable initiative which aims to
empower, encourage, and motivate students from diverse backgrounds to
push the envelope and discover something unique across all the
interdisciplinary events offered.
        </p>
        <p className="primary-text" id="section2-text2">
          Join us for a two-day inter-school fest
celebrating achievements on stage, and the field, in the true spirit of
VIVUM '24.
        </p>
      </div>
      <div className="about-section-carousel">
        
          <img src={img1} alt="Carousel1"/>
          <img src={img5} alt="Carousel2"/>
          <img src={img3} alt="Carousel3"/>
          <img src={img4} alt="Carousel4"/>
          <img src={img2} alt="Carousel5"/>
          <img src={img6} alt="Carousel6"/>
          <img src={img7} alt="Carousel7"/>
      
      </div>
    </div>
  );
};

export default WelcomeS2;