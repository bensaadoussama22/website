import React from "react";
import moto from "./image/moto.png";
import motobg from "./image/motobg.png";
import Pagee2 from "./page2";
import "./bodyy.css";
export default function Body() {
  return (
    <>
      <div className="Page1">
        <div className="Textebody">
          <div className="Rtexte">Rapidité</div> <br />
          <div className="Ftexte">Fiabilité</div> <br />{" "}
          <div className="Ntexte">Notre promesse pour vous</div>
          <div className="T" style={{ marginLeft: "5vh" }}>
            "Un clic, une livraison."
          </div>
        </div>

        <button
          className="button"
          style={{ marginLeft: "5vh", marginTop: "55vh" }}
        >
          <a href="https://play.google.com/store/search?q=allo%20jibli&c=apps">
            Télécharger
          </a>
        </button>
        <img className="Moto" src={motobg} alt="" />
      </div>
      <Pagee2 />
    </>
  );
}
