import React, { useState } from "react";
import logo from "../../assets/821133712.svg";
import { Link } from "react-scroll";

const Navigation = () => {
  const [isSidemenuActive, setSidemenuActive] = useState(true);

  const toggleSidemenu = () => {
    setSidemenuActive(false);
  };

  const closeSidemenu = () => {
    setSidemenuActive(true);
  };

  const toggleTheme = () => {
    const bodyClassList = document.body.classList;
    bodyClassList.toggle("light-theme"); // Toggle 'dark-theme' class on body
  };
  return (
    <section id="navbar">
      <div className="navbar">
        <div className="navbar_header">
          <div className="nav_pic">
            <img className="nav_logo" src={logo} alt="Background Image"></img>
          </div>
          <div className="nav_content">
            <ul className="nav_ul">
              <li className="nav_li">
                <Link
                  activeClass="active"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="nav_li">
                <Link
                    activeClass="active"
                    to="myself"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About
                </Link>
                </li>
              <li className="nav_li"><Link
                  activeClass="active"
                  to="history"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Journey
                </Link></li>
              <li className="nav_li">
              <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li className="nav_li">
              <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li className="nav_li">
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="none">
          <div className="nav_social">
            <a
              href="https://www.linkedin.com/in/magesh-b-641261233"
              className="nav_git nav-flx"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="nav_pix"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.556 21.9979H2.44792C1.09813 21.9979 0.00390625 20.9037 0.00390625 19.5539V2.44584C0.00390625 1.09605 1.09813 0.00183105 2.44792 0.00183105H19.556C20.9058 0.00183105 22 1.09605 22 2.44584V19.5539C22 20.9037 20.9058 21.9979 19.556 21.9979ZM15.6797 18.9429H18.9438V12.2376C18.9438 9.40045 17.3355 8.02868 15.0891 8.02868C12.8417 8.02868 11.8959 9.7788 11.8959 9.7788V8.35224H8.75023V18.9429H11.8959V13.3835C11.8959 11.8938 12.5816 11.0074 13.8941 11.0074C15.1005 11.0074 15.6797 11.8592 15.6797 13.3835V18.9429ZM3.05773 5.01118C3.05773 6.0904 3.92598 6.96547 4.99746 6.96547C6.06894 6.96547 6.93668 6.0904 6.93668 5.01118C6.93668 3.93195 6.06894 3.05688 4.99746 3.05688C3.92598 3.05688 3.05773 3.93195 3.05773 5.01118ZM6.65329 18.9429H3.37317V8.35224H6.65329V18.9429Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://github.com/magesh221  "
              className="nav_git nav-flx"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="nav_pix"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_1307_3467)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9642 -1.52588e-05C5.34833 -1.52588e-05 0 5.38774 0 12.0531C0 17.3811 3.42686 21.8912 8.18082 23.4874C8.77518 23.6074 8.9929 23.2281 8.9929 22.909C8.9929 22.6295 8.97331 21.6717 8.97331 20.6738C5.64514 21.3923 4.95208 19.237 4.95208 19.237C4.41723 17.8401 3.62474 17.481 3.62474 17.481C2.53543 16.7427 3.70408 16.7427 3.70408 16.7427C4.91241 16.8225 5.54645 17.9799 5.54645 17.9799C6.61592 19.8157 8.33927 19.297 9.03257 18.9776C9.13151 18.1993 9.44865 17.6606 9.78539 17.3613C7.13094 17.0819 4.33812 16.0442 4.33812 11.4144C4.33812 10.0974 4.81323 9.01982 5.56604 8.18178C5.44727 7.88252 5.03118 6.64505 5.68506 4.9888C5.68506 4.9888 6.69527 4.66945 8.97306 6.22603C9.94827 5.96219 10.954 5.82797 11.9642 5.82684C12.9745 5.82684 14.0042 5.96668 14.9552 6.22603C17.2332 4.66945 18.2434 4.9888 18.2434 4.9888C18.8973 6.64505 18.481 7.88252 18.3622 8.18178C19.1349 9.01982 19.5904 10.0974 19.5904 11.4144C19.5904 16.0442 16.7976 17.0618 14.1233 17.3613C14.5592 17.7404 14.9353 18.4587 14.9353 19.5962C14.9353 21.2126 14.9158 22.5098 14.9158 22.9087C14.9158 23.2281 15.1337 23.6074 15.7278 23.4877C20.4818 21.8909 23.9087 17.3811 23.9087 12.0531C23.9282 5.38774 18.5603 -1.52588e-05 11.9642 -1.52588e-05Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1307_3467">
                    <rect width="24" height="23.5102" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <span className="nav_git" onClick={toggleTheme}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="nav_pix not_sun"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="nav_moon"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M19.0459 10.7899C18.8878 12.5001 18.246 14.1299 17.1955 15.4886C16.145 16.8473 14.7293 17.8787 13.1139 18.4622C11.4986 19.0457 9.75056 19.157 8.07427 18.7832C6.39798 18.4095 4.8628 17.566 3.64838 16.3516C2.43395 15.1372 1.59051 13.602 1.21673 11.9257C0.842959 10.2494 0.954319 8.50134 1.53778 6.88603C2.12124 5.27072 3.15267 3.85498 4.51139 2.80447C5.8701 1.75397 7.49989 1.11214 9.21006 0.954102C8.20881 2.30868 7.727 3.97764 7.85227 5.65742C7.97753 7.33721 8.70155 8.91625 9.89264 10.1073C11.0837 11.2984 12.6628 12.0224 14.3426 12.1477C16.0223 12.273 17.6913 11.7912 19.0459 10.7899Z"
                  stroke="currentColor"
                  strokeWidth="1.92564"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="nav_git" onClick={toggleSidemenu}>
              <svg
                className="nav_burger"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </div>
          <div className="sidemnu_mobile">
            <div
              className={`sidemnu_goat ${isSidemenuActive ? "ryt_active" : ""}`}
            >
              <div className="sidemnu_x_icon" onClick={closeSidemenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006"
                    stroke="#292929"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="sidemnu_box">
                <div className="rytside_content">
                  <ul className="ryt_list">
                    <li className="ryt_li">
                      <span className="nav-ryt_span">
                      <Link
                      activeClass="active"
                      to="hero"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Home
                    </Link>
                      </span>
                    </li>
                    <li className="ryt_li">
                      <span className="nav-ryt_span">
                        <Link
                        activeClass="active"
                        to="myself"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                      About
                      </Link>
                   </span>
                    </li>
                    <li className="ryt_li">
                      <span className="nav-ryt_span">
                        <Link
                        activeClass="active"
                        to="journey"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                      Journey
                      </Link>
                   </span>
                    </li>
                    <li className="ryt_li">
                      <span className="nav-ryt_span">
                        <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                      Projects
                      </Link>
                   </span>
                    </li>
                    <li className="ryt_li">
                      <span className="nav-ryt_span">
                        <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                      Skills
                      </Link>
                   </span>
                    </li>
                    <li className="ryt_li">
                      <span className="nav-ryt_span">
                        <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                      Contact
                      </Link>
                   </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
