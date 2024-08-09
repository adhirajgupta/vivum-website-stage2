import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/Vivum Logos/VIVUM.png";
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
            Why do we do this?
          </h1>
          <h1 className="secondary-heading">
            You can support our mission!
          </h1>
          <button className="secondary-button">
            Learn How
             {/* <FiArrowRight />{" "} */}
          </button>
        </div>
        <div className="side-text-section">
          <h2>Since 2019, 65-70% of Indian healthcare expenditure has been out-of-pocket
instalments. VIVUM ’24 aims to address the challenge of affordability and
accessibility by bridging the gap between medical aid and the underprivileged.</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
