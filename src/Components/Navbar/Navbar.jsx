import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  componentDidMount() {
    window.addEventListener("scroll", function () {
      if (
        window.scrollY > document.querySelector(".navbar").offsetHeight
      ) {
       document.querySelector(".navbar").style.height="80px"

      }
      else{
       document.querySelector(".navbar").style.height = "106px";
      }

      // Use scrollPosition as needed
    });
  }
  render() {
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg text-white">
          <div className="container">
            <Link className="navbar-brand fs-2 " to="Layout">
              {" "}
              START FRAMEWORK
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active fw-bold"
                    aria-current="page"
                    to="About"
                  >
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="Portofolio">
                    {" "}
                    PORTOFOLIO
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="Contact">
                    {" "}
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
