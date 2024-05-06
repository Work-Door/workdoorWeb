import React from "react";
import style from "./Inputs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputField = ({ type, placeholder, options, icon }) => {
  return (
    <div className={`${style["inputs"]} ${style["custom-input"]}`}>
      {type === "select" ? (
        <select>
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <>
          <input type={type} placeholder={placeholder} />
          {icon && <FontAwesomeIcon icon={icon} className={style.icon}/>}
        </>
      )}
    </div>
  );
};

export default InputField;