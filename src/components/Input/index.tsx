//==============================================================[ HEADER ]
import React, { InputHTMLAttributes } from "react";
//---------------------------------------------------------------[ style ]
import "./styles.css";
//---------------------------------------------------------------[ types ]
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}
//================================================================[ BODY ]
const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  );
};

export default Input;
