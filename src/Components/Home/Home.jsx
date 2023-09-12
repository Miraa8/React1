import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="home section text-center ">
        <div className="homeContent text-white w-50  d-flex align-items-center justify-content-center m-auto flex-column">
          <img src="images\imgs1 (1).svg" alt="avatar" className="img" />
          <h1 className=" fs-1 fw-bold my-4">START FRAMEWORK</h1>

          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3" />
            <i className="fa-solid fa-star  " />
            <div className="line ms-3" />
          </div>
          <h6>Graphic Artist - Web Designer - Illustrator</h6>
        </div>
      </div>
    );
  }
}
