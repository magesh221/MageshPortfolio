import React from "react";
import Intro from "../Intro/Intro";
import Navigation from "../Navigation/Navigation";
import About from "../About/About";
import Myself from "../Myself/Myself";
import grediant_bg from "../../assets/bg_greidant.png"
import bottom_bg from "../../assets/bg_down.png"
import Histroy from "../Histroy/Histroy";
import Skills from "../Skills/Skills";
import Project from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Mycomp = () => {
    
    
    return (
        <div className="body_bg">
            <div className="bg_img">
                <img className="grediant_img" src={grediant_bg} alt="Background Image"></img>
            </div>
            <Navigation />
            <Intro />
            <About />
            <Myself />
            <Histroy />
            <Project />
            <Skills />
            <Contact />
            <div className="bg_down">
                <img className="grediant_img" src={bottom_bg} alt="Background Image"></img>
            </div>
       </div>
    );
  };

  export default Mycomp;