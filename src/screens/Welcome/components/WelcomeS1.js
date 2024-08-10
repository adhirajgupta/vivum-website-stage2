import React from "react";
import LionGIF from "../../Assets/Vivum Logos/VIVUM GIF FINAL 2.gif";
//import Navbar from "./Navbar";
//import { FiArrowRight } from "react-icons/fi";
import '../Styling/WelcomeS1Style.css';
import '../Styling/WelcomeS2Style.css';
import '../Styling/WelcomeS3Style.css';
import '../Styling/WelcomeS4Style.css';
import '../Styling/WelcomeS5Style.css';
import '../carousel.css';

const WelcomeS1 = () => {
    return (
        <div className="welcome-section1-container">
            {/* <Navbar /> */}
            {/*<div className="home-banner-container">*/}
                {/* <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div> */}
                <div className="welcome-section1-image">
                    <img src={LionGIF} alt="" />
                </div>
                <div className="welcome-section1-text">
                    <h1 className="primary-heading" id="welcome-s1-heading">
                        Claim Your Throne!
                    </h1>
                    <p className="primary-text" id="welcome-s1-text">
                        India's largest and most exciting student-let charity festive! VIVUM '24 is hosted annually by the Grade 12 Students of The International School Bangalore. This event is a thrilling celebration of sports, arts and the power of charity.
                    </p>
                    <button className="secondary-button" id="welcome-s1-button">
                        Learn More
                        {/* <FiArrowRight />{" "} */}
                    </button>
                </div>

            {/*</div>*/}
        </div>
    );
};


export default WelcomeS1;