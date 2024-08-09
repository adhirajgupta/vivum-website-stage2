import React from "react";
import Jayadeva from "../Assets/Vivum Logos/Jayadeva-Logo.png";
import Shankara from "../Assets/Vivum Logos/Shankara-Logo.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: Jayadeva,
      title: "Sri Jayadeva Institute of Cardiovascular Sciences and Research",
      text: "A non-profit Hospital providing state-of-the-art care to patients in need.",
    },
    {
      image: Shankara,
      title: "Shri Shankara Cancer Foundation",
      text: "A non-profit that provides cancer care to the most vulnerable.",
    }
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Giving back to society</p>
        <h1 className="primary-heading">OUR CHARITY PARTNERS</h1>
        <p className="primary-text">
        With our help, our partners have been able to provide over 3,000 Cath Lab procedures and 3,000 Open Heart
        surgeries so far. Their dedication, commitment, and unyielding standard of care make us immensely proud to be able to collaborate with them.
        </p>
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
