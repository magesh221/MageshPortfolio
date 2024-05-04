import React from "react";
import Magesh from "../../assets/photo2.png";

const Myself = () => {
  return (
    <section className="myself" id="myself">
      <div className="myself_content">
        <div className="myself_header">
          <p className="myself_t1">Introduction</p>
          <p className="myself_t2">Know About Me</p>
        </div>
        <div className="myself_flex">
          <div className="myself_width">
            <div className="myself_left">
                <img
                className="myself_profile_pics"
                alt="my_profile"
                src={Magesh}
                ></img>
            </div>
          </div>
          <div className="myself_right">
            <div className="myself_aboutme myself_borderone">
              <div className="myself_topknot">
                <span className="myself_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg" className="svg_myself"
                  viewBox="0 0 39 40"
                  fill="none"
                >
                  <path
                    d="M19.5 0L22.2577 17.1716L39 20L22.2577 22.8284L19.5 40L16.7423 22.8284L0 20L16.7423 17.1716L19.5 0Z"
                    fill="#AFA1F7"
                  />
                </svg>
                </span>
                <p className="myself_brief">
                Introduction
              </p>
              </div>
              <p className="myself_detrail">
              Hi, I'm Magesh, a Software Engineer from Chennai, working at CloudRevel Innovation. I've been building stuff on the internet for about a year now. At CloudRevel, we use three main tools: Node.js, Express, and MongoDB. Node.js helps us make our apps run smoothly, Express helps us build web pages, and MongoDB stores all the data we need. We're always trying to make our apps better by fixing problems and adding cool new features. I love learning new things and making our apps even cooler. It's an exciting journey, and I'm happy to be a part of it!            </p>
            </div>
            <div className="myself_aboutme myself_bordertwo">
              <div className="myself_topknot">
                <span className="myself_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg" className="svg_myself"
                  viewBox="0 0 39 40"
                  fill="none"
                >
                  <path
                    d="M19.5 0L22.2577 17.1716L39 20L22.2577 22.8284L19.5 40L16.7423 22.8284L0 20L16.7423 17.1716L19.5 0Z"
                    fill="#AFA1F7"
                  />
                </svg>
                </span>
                <p className="myself_brief">
                Contact Information
              </p>
              </div>
              <div className="myself_contact">
                <div className="myself_email">
                    <p className="myself_address">Email</p>
                    <p className="myself_detrail">magesh4318@gmail.com</p>
                </div>
                <div className="myself_email">
                    <p className="myself_address">Contact</p>
                    <p className="myself_detrail">+91 9941392334</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myself;
