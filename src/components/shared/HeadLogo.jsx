import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/headlogo.css";
import logo from "../../images/logo.png";

const HeadLogo = () => {
  return (
    <>
      <div className="sidebar">
        <div className="links__logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="links">
          <div className="item__links">
            <a
              href="https://www.linkedin.com/in/%F0%9D%91%B1%F0%9D%92%82%F0%9D%92%8E%F0%9D%92%82%F0%9D%92%93-%F0%9D%91%B6%F0%9D%92%85%F0%9D%92%82%F0%9D%92%8D%F0%9D%92%8A%F0%9D%92%94-%F0%9D%91%B4%F0%9D%92%82%F0%9D%92%94%F0%9D%92%8A%F0%9D%92%82%F0%9D%92%94-%F0%9D%91%AF%F0%9D%92%96%F0%9D%92%93%F0%9D%92%95%F0%9D%92%82%F0%9D%92%85%F0%9D%92%90-26b430254/"
              target="_blank"
            >
              <i className="bx bxl-linkedin io"></i>
            </a>
            
          </div>
          <div className="item__links">
            <a href="https://github.com/jammar24" target="_blank">
              <i className="bx bxl-github io"></i>
            </a>
         
          </div>
          <div className="item__links">
            <a href="https://www.instagram.com/jamarmasias/" target="_blank">
              <i className='bx bxl-instagram io'></i>
            </a>
          </div>

          <div className="item__links">
            <a href="/images/JamarMasiasCV.pdf" target="_blank">
              <i className='bx bx-cloud-download io'></i>
            </a>
            <h5>CV</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadLogo;
