import React from "react";
import { WhitePartitionStyle } from "./style";
import logo from "../../images/uk-hub.png";
import GreyImage from "../GreyImage";
import Footer from "../Footer";


const WhitePartition = () => {
    return (
      <WhitePartitionStyle>
        <div className="content">
          <img src={logo} alt="uk-hub-logo" />

          <h1>THE UK-NG TECH HUB IMPACT REPORT 2021</h1>
          <p>
            The UK-Nigeria Tech Hub, is an initiative of the UK Government’s
            Department of Culture, Media and Sport aimed at supporting the
            Nigeria tech-ecosystem and building partnerships between the Nigeria
            tech-ecosystem and the UK. Our efforts work to stimulate local
            digital economies, build high-end digital skills, and forge
            innovation partnerships between local tech sectors and international
            businesses.
          </p>
        </div>
        <GreyImage />
        <div className="footer">
          <Footer />
        </div>
      </WhitePartitionStyle>
    );
}

export default WhitePartition;