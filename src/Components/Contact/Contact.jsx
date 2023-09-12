import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="Contact section py-3">
       
          <h1 className="Heading fw-bolder fs-1 mb-3">CONATCT SECTION</h1>
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
          <form
           
            noValidate
            action
            className="w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched"
          >
           
            <input
             
              id="userName"
              type="text"
              placeholder="userName"
              name="userName"
              className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
            />
            
            <input
             
              id="userAge"
              type="text"
              placeholder="userAge"
              name="userName"
              className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
            />
           
            <input
             
              id="userEmail"
              type="text"
              placeholder="userEmail"
              name="userName"
              className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
            />
          
            <input
             
              id="userPassword"
              type="text"
              placeholder="userPassword"
              name="userName"
              className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
            />
            <button
             
              className="btn mt-4 text-white"
              style={{ backgroundColor: "#1abc9c" }}
            >
              {" "}
              send Message{" "}
            </button>
          </form>
        
      </div>
    );
  }
}
