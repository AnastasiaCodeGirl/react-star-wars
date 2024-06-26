import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list__container}>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/people" exact>People</NavLink></li>
        <li><NavLink to="/not-found">Not Found</NavLink></li>
      </ul>
    </div>
  );
};


export default Header;
