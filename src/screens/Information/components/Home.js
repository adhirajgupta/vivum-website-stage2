import React from "react";
import BannerImage from "../Assets/Vivum Logos/VIVUM.png";
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
            Claim Your Throne
          </h1>
          <p className="primary-text">
            India's largest and most exciting student-let charity festive! VIVUM '24 is hosted annually by the Grade 12 Students of The International School Bangalore. This event is a thrilling celebration of sports, arts and the power of charity.
          </p>
          <button className="secondary-button">
            Learn More
             {/* <FiArrowRight />{" "} */}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Home;
