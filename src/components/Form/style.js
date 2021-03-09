import styled from "styled-components";

export const FormStyle = styled.div`
  width: 100%;
  input {
    background: #235582;
    color: #ffffff;
    border: none;
    border-bottom: 1px solid #ffffff;
    width: 100%;
    font-size: 16px;
    line-height: 137.49%;
    outline: none;
    padding-bottom: 15px;
    padding-top: 35px;
    caret-color: #ffffff;
  }
  .break-input input {
    width: 43%;
  }
  #right {
    margin-right: 5%;
  }
  #left {
    margin-left: 5%;
  }
  input::placeholder {
    color: #ffffff;
    opacity: 1;
  }
  input:focus {
    color: #ffffff;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #ffffff;
  }
`;
