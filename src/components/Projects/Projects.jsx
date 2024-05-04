import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import VanillaTilt from 'vanilla-tilt';
import hashira from "../../assets/hashira.png";
import todo from "../../assets/project2.png";
import projectBg from "../../assets/project-bg.svg";
import logo1 from "../../assets/code/js.png";
import logo2 from "../../assets/code/tailwind.png";
import logo3 from "../../assets/code/netlify.png";
import logo4 from "../../assets/code/react.png";
import ant from "../../assets/code/antdesign.svg";
import nextjs from "../../assets/next-js.svg";


const TiltCardContainer = styled.div`
  perspective: 1000px;
  width: 90%;
  height: 360px;
  position: relative;
  margin: 50px auto;
`;

const TiltCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CardContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  backface-visibility: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;


const Projects = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
    ]
  };

  const tiltCardRef1 = useRef(null); // Ref for the first card
  const tiltCardRef2 = useRef(null); // Ref for the second card
  const [showCover1, setShowCover1] = useState(false);

  useEffect(() => {
    if (tiltCardRef1.current) {
      VanillaTilt.init(tiltCardRef1.current, {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 1,
        gyroscope: false,
      });
    }
    if (tiltCardRef2.current) {
      VanillaTilt.init(tiltCardRef2.current, {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 1,
        gyroscope: false,
      });
    }
  }, []);

  const handleMouseMove = () => {
    setShowCover1(true);
  };

  const handleMouseLeave = () => {
    setShowCover1(false);
  };

  return (
    <section className="myself" id="projects">
      <div className='myself_content'>
        <div className="myself_header no_min">
          <p className="myself_t1">The Projects</p>
          <p className="myself_t2">That I Build</p>
        </div>
        <div className="project_body">
          <Slider {...settings}>
            <a href="https://movibes-live.netlify.app/">
              <TiltCardContainer>
                <TiltCard
                  ref={tiltCardRef1}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <CardContent>
                    <div className='card_project' style={{ background: 'linear-gradient(90deg, rgb(241, 70, 88) 0%, rgb(220, 37, 55) 100%)' }}>
                      <img className='box_img' src={projectBg} alt="img_box"></img>
                      <span className='project_span'>
                        <img className='project_img' src={hashira} alt="img_box"></img>
                      </span>
                      <div className='top_project' style={{ background: 'linear-gradient(rgb(241, 70, 88) 0%, rgba(0, 0, 0, 0) 100%)' }}></div>
                      <div className='bottom_project' style={{ background: 'linear-gradient(0deg, rgb(241, 70, 88) 10%, rgba(0, 0, 0, 0) 100%)' }}></div>
                      <p className='project_txt'>Movibes</p>
                      <div className='project_logo_sec'>
                        <div className='project_sets'>
                          <img className='imgs_prj1' src={logo4}></img>
                          <img className='imgs_prj2' src={logo2}></img>
                          <img className='imgs_prj3' src={logo1}></img>
                          <img className='imgs_prj4' src={logo3}></img>
                        </div>
                      </div>
                      <p className='project_txt2'>Movie Streaming Web App Using React JS,IMDB API,Firebase And Tailwind</p>
                    </div>
                  </CardContent>
                </TiltCard>
              </TiltCardContainer>
            </a>
            <a href="https://kannan-todo.netlify.app/">
              <TiltCardContainer>
                <TiltCard
                  ref={tiltCardRef2}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <CardContent>
                  <div className='card_project' style={{ background: 'linear-gradient(90deg, rgb(164 70 241) 0%, rgb(114 43 150) 100%)' }}>
                      <img className='box_img' src={projectBg} alt="img_box"></img>
                      <span className='project_span'>
                      <img className='project_img' src={todo} alt="img_box"></img>
                      </span>
                      <div className='top_project' style={{ background: 'linear-gradient(rgb(203 25 255), rgba(0, 0, 0, 0) 100%)' }}></div>
                      <div className='bottom_project' style={{ background: 'linear-gradient(0deg, rgb(203 25 255) 10%, rgba(0, 0, 0, 0) 100%)' }}></div>
                      <p className='project_txt'>Todo Web App</p>
                      <div className='project_logo_sec'>
                      <div className='project_sets'>
                          <img className='imgs_prj1' src={nextjs}></img>
                          <img className='imgs_prj2' src={ant}></img>
                          <img className='imgs_prj3' src={logo1}></img>
                          <img className='imgs_prj4' src={logo3}></img>
                      </div>
                      </div>
                      <p className='project_txt2'>A Todo Web App Created Using Next JS,MOBX And Ant Design. User Can Add There Todo Task </p>
                  </div>
                  </CardContent>
                </TiltCard>
              </TiltCardContainer>
            </a>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;
