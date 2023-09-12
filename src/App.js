import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import React, { Component } from "react";
import Portofolio from "./Components/Portofolio/Portofolio";
import Contact from "./Components/Contact/Contact";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

const router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index:true, element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Portofolio", element: <Portofolio /> },
      { path: "Contact", element: <Contact /> },
      { path: "*", element: <h1 className="text-center m-5">Error 404 such page doesn't exist!</h1> },
    ],
  },
]);

export default class App extends Component {
  render() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
}
