import React from "react";
import { FormStyle } from "./style";
import Button from "../Button";


const Form = () => {
  return (
    <FormStyle>
      <form>
        <div className="break-input">
          <input type="firstname" name="firstname" placeholder="First name" id="right" />
          <input type="lastname" name="lastname" placeholder="Last name" id="left"/>
        </div>
        <input
          type="organization"
          name="organization"
          placeholder="Organization"
        />
        <input
          type="position"
          name="position"
          placeholder="Position e.g Founder"
        />

        <input type="email" name="email" placeholder="Email address" />

        <Button />
      </form>
    </FormStyle>
  );
};

export default Form;
