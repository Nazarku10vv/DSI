import React from "react";
import logo from "../image/DSI.png";
import { IoHomeOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { TbArrowsShuffle2 } from "react-icons/tb";



const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <div className="header_logo">
            <img src={logo} alt="App" />
            <h6>
              DWIDASA <br />
              DWIDASA <br />
              DWIDASA
            </h6>
          </div>
          <nav>
            <a href="#">Services</a>
            <a href="#">Product</a>
            <a href="#">Technology</a>
            <select>
              <option>About</option>
            </select>
            <select>
              <option>Client</option>
            </select>
            <a href="#">Partner</a>
          </nav>

        <div className="header_a">
        <IoHomeOutline style={{fontSize:'20px',color:'rgba(31, 46, 53, 0.80)'}}/>
          <CiMail style={{fontSize:'20px',color:'rgba(31, 46, 53, 0.80)', margin:'0 1pc'}}/>
          <TbArrowsShuffle2 style={{fontSize:'20px',color:'rgba(31, 46, 53, 0.80)'}}/>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
