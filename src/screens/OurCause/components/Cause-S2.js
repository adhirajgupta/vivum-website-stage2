import React from "react";
import LionLogo from "../../Assets/Vivum Logos/LionLogo2-Transparent.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";

const CauseS2 = () => {
    return (
        <div className="section2-container">
            {/* <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div> */}

            <div className="section2-text">
                <p className="primary-subheading" id="section2-subheading">Vivum 2024</p>
                <h1 className="primary-heading" id="section2-heading">
                    How do we manage this?
                </h1>
                <p className="primary-text" id="section2-text">
                    Since the start of  VIVUM, we have made it a priority to provide accessible healthcare to as many people as possible. Over 70% of the daily visits at our partner's facilites are under the poverty line. Through this cause, we hope to make a difference in as many lives as we can.
                </p>
            </div>

            <div className="section2-image">
                <img src={LionLogo} alt="VivumLogo2" />
            </div>
        </div>
    );
};

export default CauseS2;
