import React from "react";
import VivumLogo from "../../Assets/Vivum Logos/VIVUM.png";
// import { FiArrowRight } from "react-icons/fi";
import '../OurCauseStyling.css'; // Ensure this is correctly imported
import '../CauseS2Styling.css';
import '../CauseS3Styling.css';
const CauseS1 = () => {
    return (
        <div className="section1-container">
            {/* <Navbar /> */}
            <div className="section1-top">
                <h1 className="primary-heading">
                    Why we host VIVUM?
                </h1>
                <p>Since 2019, 65-70% of Indian healthcare expenditure has been out-of-pocket
                    instalments. VIVUM ’24 aims to address the challenge of affordability and
                    accessibility by bridging the gap between medical aid and the underprivileged.
                </p>
            </div>

            <div className="section1-bottom">
                <img src={VivumLogo} alt="Vivum Logo"></img>
                <h2 className="secondary-heading" id="support-mission-line">
                    You can support our mission!
                </h2>
                <button className="secondary-button" id="learnhow-button">
                    Learn How
                    {/* <FiArrowRight />{" "} */}
                </button>
            </div>
            <div className="section1-learn-more">

            </div>
        </div>
    );
};

export default CauseS1;