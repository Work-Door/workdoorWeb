import React from "react";
import style from "./Inputs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputMask from 'react-input-mask';

const InputField = ({ type, placeholder, value, onChange, options, icon, mask }) => {
  return (
    <div className={`${style["inputs"]} ${style["custom-input"]}`}>
      {type === "select" ? (
        <select value={value} onChange={onChange}>
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <>
          {mask ? (
            <InputMask
              mask={mask}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          ) : (
            <input
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          )}
          {icon && <FontAwesomeIcon icon={icon} className={style.icon} />}
        </>
      )}
    </div>
  );
};

export default InputField;
