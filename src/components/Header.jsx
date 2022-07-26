import styles from "./Header.module.css";
import Rocket from "../../public/rocket.svg";

export function Header() {
  return (
    <div className={styles.header}>
      <img src={Rocket} alt="todo-logo" />
      <h1>to</h1>
      <h1>do</h1>
    </div>
  );
}
