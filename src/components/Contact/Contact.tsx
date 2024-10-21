import React, { useState } from "react";
import "./Contact.scss";

const Contact:React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    console.log(inputValue);
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-inner-text">
            <h1 className="contact-inner-text-intro">Let's Design Together</h1>
            <p className="contact-inner-text-content-text-content">
              Lorem ipsum dolor sit amet consectetur. Imperdiet convallis
              blandit felis ligula aliquam venenatis fghh hgjj nisi ante.
            </p>
          </div>

          <div className="contact-field">
            <div className="contact-field-input">
              <input
                placeholder="Enter Your Email"
                className="email-input"
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <button className="contact-me-btn" onClick={handleButtonClick}>
              Contact Me
            </button>
            {inputValue}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
