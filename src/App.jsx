import React from "react";
import "./App.css";
import Logo from "./components/logo/logo.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Body from "./components/bodyy/bodyy.jsx";
function MyApp() {
  return (
    <div className="">
      {/* <div>gdhfgh</div> */}
      <Logo />
      <Body />
      <Navbar />
    </div>
  );
}
export default MyApp;
