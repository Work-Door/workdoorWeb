import React from "react";
import style from "./RetornHome.module.css";
import { Link } from "react-router-dom";

const RetornHome = () => {
  return (
    <>
      <div className={style["container"]}>
        <Link to="/">
          <h2>Retorne a página principal</h2>
        </Link>
      </div>
    </>
  );
};
export default RetornHome;
