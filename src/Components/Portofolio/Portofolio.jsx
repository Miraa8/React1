import { click } from "@testing-library/user-event/dist/click";
import React, { Component } from "react";

export default class Portofolio extends Component {
  componentDidMount() {
    const allImages = document.querySelectorAll(".layer");
    for (let i = 0; i < allImages.length; i++) {
      allImages[i].addEventListener("click", function () {
        document
          .querySelector(".pLayer img")
          .setAttribute("src", this.nextSibling.getAttribute("src"));
        document.querySelector(".pLayer").style.display = "flex";
         document.querySelector(".pLayer").addEventListener("click" , function(){
             document.querySelector(".pLayer").style.display = "none";
         })
      });
    }
  }
  render() {
    return (
      <div className="Portofolio section py-5">
        <div
          className=" pLayer bg-opacity-50 position-fixed start-0 end-0 bottom-0 top-0 bg-dark  align-items-center justify-content-center"
          style={{ display: "none" }}
        >
          <img src="images\imgs2.png" alt="" className="w-50" />
        </div>
        <div className="container">
          <h1 className="Heading fw-bolder fs-1 mb-3">PORTFOLIO COMPONENT</h1>
          <div className="d-flex align-items-center justify-content-center mx-auto mb-3 w-50 ">
            <div
              className="line "
              style={{ backgroundColor: "rgb(44, 62, 80)" }}
            />
            <i className="fa-solid fa-star d-block mx-3" />
            <div
              className="line "
              style={{ backgroundColor: "rgb(44, 62, 80)" }}
            />
          </div>
          <div className="components">
            <div className="row g-5">
              <div className="col-md-6 col-lg-4 ">
                <div className="component overflow-hidden position-relative rounded">
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                  <img
                    src="images\imgs2.png"
                    className="w-100 rounded img"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="component overflow-hidden position-relative rounded">
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                  <img
                    src="images\imgs3.png"
                    className="w-100 rounded img"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="component overflow-hidden position-relative rounded">
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                  <img
                    src="images\imgs4.png"
                    className="w-100 rounded img"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="component overflow-hidden position-relative rounded">
                  <div class="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i class="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                  <img
                    src="images\imgs2.png"
                    className="w-100 rounded img"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="component overflow-hidden position-relative rounded">
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                  <img
                    src="images\imgs3.png"
                    className="w-100 rounded img"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="component overflow-hidden position-relative rounded">
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                  <img
                    src="images\imgs4.png"
                    className="w-100 rounded img"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
