import React from "react";
import { BluePartitionStyle } from "./style";
import Form from "../Form";

const BluePartition = () => {
    return (
      <BluePartitionStyle>
        <div className="content">
          <h1>DOWNLOAD REPORT</h1>
          <p>
            Learn how our initiatives and programmes are supporting the growth
            of the digital ecosystem in Nigeria.
          </p>
          <Form />
          <p className="disclaimer">
            We will not share your personal information and you can unnsubscribe
            at anytime.
          </p>
        </div>
      </BluePartitionStyle>
    );   
};

export default BluePartition;
