import React from "react";
// import { BsTwitter } from "react-icons/bs";
// import { SiLinkedin } from "react-icons/si";
// import { BsYoutube } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <h1>Claim your throne!</h1>
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
          <span>Insert Phone No</span>
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

export default Footer;
