import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="About section text-white">
        <div className="container">
          <h1>ABOUT COMPONENT</h1>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3" />
            <i className="fa-solid fa-star  " />
            <div className="line ms-3" />
          </div>
          <div className="row px-5">
            <div className="col-sm-6 text-start">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
            <div className="col-sm-6 text-start">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
