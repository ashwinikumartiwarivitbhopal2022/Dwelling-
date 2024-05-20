import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Dwelling</span>
          <span className="secondaryText">
          Let's Rock ! and find super attractive prices
            <br />
            Hope! Find your recidence soon
          </span>
          <button className="button" href>
            <a href="mailto:ashwanitiwari393@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
