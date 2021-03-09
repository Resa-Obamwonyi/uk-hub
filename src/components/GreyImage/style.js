import styled from "styled-components";

export const GreyImageStyle = styled.div`
  margin-top: 100px;
  height: 366px;
  width: 100%;
  background-image: linear-gradient(
      0deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
 
`;
