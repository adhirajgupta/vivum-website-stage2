import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/LION_WHITE.png";
import Navbar from "./Navbar";
// import { FiArrowRight } from "react-icons/fi";
import '../OverviewScreenStyle.css'; // Ensure this is correctly imported

const Home = () => {
  return (
    <div className="home-container overview">
      {/* <Navbar /> */}
      <div className="home-banner-container">
        {/* <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div> */}
        <div className="home-text-section">
          <h1 className="primary-heading">
            Claim Your Throne!
          </h1>
          <p className="primary-text">
            India's First Student-Led Charity Festival! Vivum 24 is a celebration of sports and the arts, hosted annually by the Grade 12 Students of The International School Bangalore!
          </p>
          <button className="secondary-button">
            Learn More
             {/* <FiArrowRight />{" "} */}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
