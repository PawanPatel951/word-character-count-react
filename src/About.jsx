import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  
  // });

  let myStyle ={
    color:props.mode ==='dark'?'white':'#042743',
    backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white',
  }
  

  return (
    <div className="container my-5" style={myStyle}>
      <h1 className="my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
      <p>Welcome to our company! Learn more about us below:</p>

      <div className="accordion" id="aboutAccordion">
     
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
             <strong> Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseCompany"
            className="accordion-collapse collapse show"
            aria-labelledby="headingCompany"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body" style={myStyle}>
             Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
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
            <strong> Free to use </strong>
            </button>
          </h2>
          <div
            id="collapseTeam"
            className="accordion-collapse collapse"
            aria-labelledby="headingTeam"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body" style={myStyle}>
                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given
                text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character
                limit.
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
            <strong> Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseCareers"
            className="accordion-collapse collapse"
            aria-labelledby="headingCareers"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It
                suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                </div>
          </div>
        </div>
      </div>

    
    </div>
  );
}
