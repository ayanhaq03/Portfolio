import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import ayan from "../../img/ayan.png";

import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
  
      <div className="i-left">
        <div className="i-name">
       
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Mohd Ayan Haque</span>
          <span>
            MERN Stack Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/ayanhaq03"><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/mohd-ayan-haque-7ba114232/"><img src={LinkedIn} alt="" /></a>
          <a href="https://www.instagram.com/_.ayan03._/"><img src={Instagram}  alt="" /></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={ayan} alt="" />
        {/* animation */}
       
        <motion.div
          initial={{ top: "-5%", left: "74%" }}
          whileInView={{ left: "58%" }}
          transition={transition}
          className="floating-div"
        >
           <FloatinDiv img={thumbup} text1="UI & UX" text2="Designer" />
          
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
