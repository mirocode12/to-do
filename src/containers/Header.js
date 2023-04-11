import React from "react";
import styles from "../css/Header.module.css";
import ActionButton from "./ActionButton";

const Header = () => {
  return (
    <div className={styles["main-container"]}>
        <h3>To Do</h3>
        <ActionButton></ActionButton>
    </div>
  );
}

export default Header;
