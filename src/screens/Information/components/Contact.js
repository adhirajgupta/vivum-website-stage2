import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="contact-heading">Have A Question In Mind? Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@mail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
