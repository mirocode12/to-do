import React from "react";
import styles from "../css/Cover.module.css";
const Cover = () => {
  const closeCover = () => {
    document.getElementById("cover").classList = "";
  };
  return <div id="cover" onClick={closeCover} className={styles["cover"]}></div>;
};

export default Cover;
