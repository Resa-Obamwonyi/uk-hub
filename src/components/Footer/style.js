import styled from "styled-components";

export const FooterStyle = styled.div`
  display: flex;
  width: 70%;
  margin: 50px 15%;
  align-items: center;

  .socials {
    flex-basis: 45%;
  }

  .social-link {
    background: #b9b9b9;
    color: #ffffff;
    padding: 15px;
    border-radius: 50px;
    font-size: 18px;
    margin-left: 10px;
  }

  .foot-note {
    flex-basis: 55%;
    text-align: center;
    color: #000000;
    opacity: 0.5;
    font-size: 15px;
  }
  @media (max-width: 1080px) {
    width: 90%;
    margin: 50px 5%;
    flex-direction: column;

    .socials {
      flex-basis: 100%;
      text-align: center;
    }

    .social-link {
      margin-left: 10px;
    }

    .foot-note {
      flex-basis: 100%;
      text-align: center;
      padding: 15px 10px;
    }
  }
`;
