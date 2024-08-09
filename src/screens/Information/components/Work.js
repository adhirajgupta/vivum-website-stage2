import React from "react";
import Tata from "../Assets/Sponsor Logos/TataNeu.png";
import Nivia from "../Assets/Sponsor Logos/Nivia Logo.jpeg";
import Roposo from "../Assets/Sponsor Logos/Roposo Logo.png";
import Wildcraft from "../Assets/Sponsor Logos/WildCraft.jpeg";
import PokerApparel from "../Assets/Sponsor Logos/Poker Apparel.jpeg";
const Work = () => {
  const workInfoData = [
    {
      image: Tata,
      title: "Tata-Neu",
      text: "Tata Neu",
    },
    {
      image: Nivia,
      title: "Nivia",
      text: "Roposo",
    },
    {
      image: Roposo,
      title: "Roposo",
      text: "Roposo",
    },
    {
      image: Wildcraft,
      title: "Wildcraft",
      text: "Wildcraft",
    }
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">The great brands who can make this come true</p>
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
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
