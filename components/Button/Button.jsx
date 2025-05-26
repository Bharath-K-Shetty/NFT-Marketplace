"use client";
import React from "react";

//INTERNAL IMPORT
import Style from "./Button.module.css";

const Button = ({ btnName, handleButtonClick }) => {
  return (
    <div className={Style.box}>
      <button
        className={`${Style.button} `}
        onClick={() => handleButtonClick()}
      >
        {btnName}
      </button>
    </div>
  );
};

export default Button;
