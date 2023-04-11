import React from "react";
import styles from "../css/ActionButton.module.css";
import add from "../icons/btn/add.png";
import filter from "../icons/btn/filter.png";

export default function ActionButton() {
  return (
    <div className={styles["btns"]}>
      <button>
        <img src={filter} alt="filter"></img>
      </button>
      <button>
        <img src={add} alt="add"></img>
      </button>
    </div>
  );
}
