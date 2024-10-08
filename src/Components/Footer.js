import React from "react";
import Logo from "../Assets/logo.PNG";
import { FaInstagram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <FaInstagram />
          <SiLinkedin />
          <FaWhatsapp />
          <FaPhoneAlt/>
        </div>
      </div>
      <div className="footer-section-two">
{/* 
<div className="footer-section-columns">
  <span>Doe</span>
  <span>Ajude</span>
  <span>Sobre</span>
</div> 
*/}
        <div className="footer-section-columns">
          <span>00-0000-0000</span>
          <span>projetoceiasolidaria@gmail.com</span>
          <span>sandypiropo@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
