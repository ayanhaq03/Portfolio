import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>ayanhaque904@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/_.ayan03._/"><Insta color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/mohd-ayan-haque-7ba114232/"><LinkedIn color="white" size={"3rem"} /></a>
          <a href="https://github.com/ayanhaq03"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
