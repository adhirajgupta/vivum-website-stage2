import React from "react";
import Jayadeva from "../../Assets/Sponsor Logos/Jayadeva-Logo.jpg";
import Shankara from "../../Assets/Sponsor Logos/Shankara-Logo.jpg";

const CauseS3 = () => {
    const workInfoData = [
      {
        image: Jayadeva,
        title: "Sri Jayadeva Institute of Cardio Vascular Sciences and Research",
        text: "A non-profit Hospital providing state-of-the-art care to patients in need.",
      },
      {
        image: Shankara,
        title: "Shri Shankara Cancer Foundation",
        text: "A non-profit that provides cancer care to the most vulnerable.",
      }
    ];
    return (
      <div className="charity-container">
        <div className="charity-container-text">
          <p className="primary-subheading" id="charity-subheading">Giving back to society</p>
          <h1 className="primary-heading" id="charity-heading">OUR CHARITY PARTNERS</h1>
          <p className="primary-text" id="charity-text">
          With our help, our partners have been able to provide over 3,000 Cath Lab procedures and 3,000 Open Heart
          surgeries so far. Their dedication, commitment, and unyielding standard of care make us immensely proud to be able to collaborate with them.
          </p>
        </div>
        <div className="charity-info-container">
          {workInfoData.map((data) => (
            <div className="charity-card-container" key={data.title}>
              <div className="charity-card-img-container">
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
  
  export default CauseS3;