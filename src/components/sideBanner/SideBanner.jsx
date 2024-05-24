import React from "react";
import style from "./SideBanner.module.css";
import sideBanner from "../../utils/assets/sideBanner.svg";
import logo from "../../utils/assets/logoBranca.svg";
import { Link } from "react-router-dom";

const SideBanner = () => {
  return (
    <div className={style["container"]}>
      <img
        className={style["side-banner"]}
        src={sideBanner}
        alt="side banner"
      />
      <div className={style["img2-logo"]}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default SideBanner;
