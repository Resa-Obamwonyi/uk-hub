import styled from "styled-components";

export const BluePartitionStyle = styled.div`
  height: inherit;
  background-color: #235582;
  color: #ffffff;
  flex-basis: 35%;
  padding-top: 150px;
  padding-bottom: 50px;

  @media (max-width: 1080px) {
    flex-basis: 100%;
    padding-top: 100px;
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
    font-size: 30px;
    font-weight: bold;
  }

  p {
    font-size: 18px;
    line-height: 142.3%;
    width: 90%;
  }

  .disclaimer {
    font-size: 15px;
    text-align: center;
    color: #ffffff;
    opacity: 0.5;
  }
`;
