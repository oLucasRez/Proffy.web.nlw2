//==============================================================[ HEADER ]
import React, { TextareaHTMLAttributes } from "react";
//---------------------------------------------------------------[ style ]
import "./styles.css";
//---------------------------------------------------------------[ types ]
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}
//================================================================[ BODY ]
const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  );
};

export default Textarea;
