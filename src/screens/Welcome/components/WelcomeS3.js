import React from "react";
import Tata from "../../Assets/Sponsor Logos/TataNeu.jpg";
import Nivia from "../../Assets/Sponsor Logos/Nivia Logo.jpg";
import Roposo from "../../Assets/Sponsor Logos/Roposo Logo.jpg";
import Wildcraft from "../../Assets/Sponsor Logos/WildCraft.jpg";
import PokerApparel from "../../Assets/Sponsor Logos/Poker Apparel.jpg";
import ElectricEBikes from "../../Assets/Sponsor Logos/Electric Ebikes.jpg";
import KangarooElectric from "../../Assets/Sponsor Logos/Kangaroo.jpg";

const WelcomeS3 = () => {
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
    },
    {
      image: ElectricEBikes,
      title: "Electric E Bikes",
      text: "Electric E Bikes",
    }
    ,
    {
      image: KangarooElectric,
      title: "Kangaroo Electric",
      text: "Kangaroo Electric",
    }
  ];
  return (
    <div className="welcome-section3-container">
      <div className="section3-top">
        <p className="primary-subheading" id="section3-subheading">The great brands who help us making VIVUM great</p>
        <h1 className="primary-heading" id="section3-heading">OUR MAIN SPONSORS</h1>
        <p className="primary-text" id="section3-text">
          For seeing all the companies who made this possible, visit the Sponsor Page
        </p>
        <button className="secondary-button" id="section3-button">
            Visit Sponsor Page
             {/* <FiArrowRight />{" "} */}
          </button>
      </div>
      <div className="section3-bottom">
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

export default WelcomeS3;