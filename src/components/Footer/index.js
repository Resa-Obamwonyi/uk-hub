import React from "react";
import { FooterStyle } from "./style";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
      <FooterStyle>
        <div className="socials">
          <a href="https://twitter.com/ukngtechhub">
            <FaTwitter className="social-link" />
          </a>
          <a href="https://www.instagram.com/ukngtechhub">
            <FiInstagram className="social-link" />
          </a>
          <a href="https://www.linkedin.com/company/uk-nigeria-tech-hub">
            <FaLinkedinIn className="social-link" />
          </a>
        </div>
        <div className="foot-note">
          © UK-Nigeria Tech Hub Impact Report 2021
        </div>
      </FooterStyle>
    );};

export default Footer;
