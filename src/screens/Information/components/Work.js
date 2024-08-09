import React from "react";
import Tata from "../Assets/Sponsor Logos/TataNeu.jpg";
import Nivia from "../Assets/Sponsor Logos/Nivia Logo.jpg";
import Roposo from "../Assets/Sponsor Logos/Roposo2.png";
import Wildcraft from "../Assets/Sponsor Logos/WildCraft.jpg";
import PokerApparel from "../Assets/Sponsor Logos/Poker Apparel.jpg";
const Work = () => {
  const workInfoData = [
    {
      image: Tata,
      title: "Tata-Neu",
      text: "Live the Neu",
    },
    {
      image: Nivia,
      title: "Nivia",
      text: "Nivia",
    },
    {
      image: Roposo,
      title: "Roposo",
      text: "Nivia",
    },
    {
      image: Wildcraft,
      title: "Wildcraft",
      text: "Wildcraft",
    },
    {
      image: PokerApparel,
      title: "Poker Apparel",
      text: "Poker Apparel",
    }
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">The great brands who help us making VIVUM great</p>
        <h1 className="primary-heading">OUR MAIN SPONSORS</h1>
        <p className="primary-text">
          For seeing all the companies who made this possible, visit the Sponsor Page
        </p>
        <button className="secondary-button">
            Visit Sponsor Page
             {/* <FiArrowRight />{" "} */}
          </button>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="sponsor-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
