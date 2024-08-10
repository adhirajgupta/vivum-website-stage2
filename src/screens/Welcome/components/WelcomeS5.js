import React from "react";
import VIVUM from "../../Assets/Vivum Logos/VIVUM.png"
// import { BsTwitter } from "react-icons/bs";
// import { SiLinkedin } from "react-icons/si";
// import { BsYoutube } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

const WelcomeS5 = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={VIVUM} alt="Vivum Logo" style={{height: "10rem"}}/>
        </div>
        <div className="footer-icons">
          {/* <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF /> */}
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Help</span>
          <span>Share</span>
          <span>Sponsors</span>
        </div>
        <div className="footer-section-columns">
          <span>vivum24@tisb.ac.in</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeS5;
