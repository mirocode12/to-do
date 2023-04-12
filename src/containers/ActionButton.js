import styles from "../css/ActionButton.module.css";
import coverStyle from "../css/Cover.module.css";
import add from "../icons/btn/add.png";
import filter from "../icons/btn/filter.png";

 const ActionButton = () => {
 const addNewTask = () => {
  document.getElementById("cover").classList = coverStyle['cover'];
 }
  return (
    <div className={styles["btns"]}>
      <button>
        <img src={filter} alt="filter"></img>
      </button>
      <button onClick={addNewTask}>
        <img src={add} alt="add"></img>
      </button>
    </div>
  );
}

export default ActionButton;