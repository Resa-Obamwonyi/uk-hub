import styled from "styled-components";

export const WhitePartitionStyle = styled.div`
  background-color: #ffffff;
  color: #000000;
  flex-basis: 65%;
  padding-top: 50px;
  
  @media (max-width: 1080px) {
    flex-basis: 100%;
  }

  .content {
    width: 70%;
    margin: auto 15%;
    @media (max-width: 1080px) {
      width: 90%;
      margin: auto 5%;
    }
  }

  h1 {
    color: #235582;
    font-size: 50px;
    font-weight: bold;
    padding-top: 50px;
  }

  p {
    font-size: 25px;
    line-height: 142.3%;
  }

  @media (max-width: 1080px) {
    .footer {
      display: none;
    }
  }
`;