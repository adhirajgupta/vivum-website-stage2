import React from "react";
import Logo from "../../Assets/Sponsor Logos/WildcraftLogoWide.png";
// import { AiFillStar } from "react-icons/ai";

const WelcomeS4 = () => {
    return (
        <div className="section4-container">
            <div className="section4-top">
                <p className="primary-subheading" id="section4-subheading">Testimonial</p>
                <h1 className="primary-heading" id="section4-heading">What They Are Saying</h1>
            </div>
            <div className="section4-bottom">
                <img src={Logo} alt="Wildcraft Testimonial Logo" />
                <h1>
                    Would like to acknowledge the hard work that makes VIVUM a
                    success year-on-year. Wildcraft have been associated with the
                    festival for over 5 years now, and looks at it as a great way to
                    connect with Bangalore’s thriving student network. Excited for
                    future collaborations and wishing the entire team all the very best
                </h1>
                <div className="testimonials-stars-container">
                    {/* <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar /> */}
                </div>
                <h2> - Wildcraft, 5+ Year Partner</h2>
            </div>
        </div>
    );
};

export default WelcomeS4;
