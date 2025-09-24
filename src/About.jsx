import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        border:"1px solid white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="container my-5" style={myStyle}>
      <h1>About Us</h1>
      <p>Welcome to our company! Learn more about us below:</p>

      {/* Accordion */}
      <div className="accordion" id="aboutAccordion">
        {/* Company */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingCompany">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCompany"
              aria-expanded="true"
              aria-controls="collapseCompany"
            >
              Company
            </button>
          </h2>
          <div
            id="collapseCompany"
            className="accordion-collapse collapse show"
            aria-labelledby="headingCompany"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body" style={myStyle}>
              We are a leading company in the tech industry, providing high-quality services worldwide.
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTeam">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTeam"
              aria-expanded="false"
              aria-controls="collapseTeam"
            >
              Team
            </button>
          </h2>
          <div
            id="collapseTeam"
            className="accordion-collapse collapse"
            aria-labelledby="headingTeam"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body" style={myStyle}>
              Our team consists of experienced professionals who are passionate about technology and innovation.
            </div>
          </div>
        </div>

        {/* Careers */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingCareers">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCareers"
              aria-expanded="false"
              aria-controls="collapseCareers"
            >
              Careers
            </button>
          </h2>
          <div
            id="collapseCareers"
            className="accordion-collapse collapse"
            aria-labelledby="headingCareers"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body" style={myStyle}>
              Join our team! Check out open positions and grow your career with us.
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <div className="container my-3">
        <button type="button" onClick={toggleStyle} className="btn btn-primary">
          {btnText} {/* ✅ dynamic button text */}
        </button>
      </div>
    </div>
  );
}
