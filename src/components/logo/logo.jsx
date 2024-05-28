import React from "react";
import "./logo.css";
import allo from "./images/allo.png";
import alloee from "./images/alloee.png";

export default function Logo() {
  return (
    <>
      <div className="container">
        <img className="Allo" src={allo} alt="" />
        <img className="Alloee" src={alloee} alt="" />
      </div>
    </>
  );
}
