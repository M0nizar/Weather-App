import DropDownUnits from "../DropDownUnits/DropDownUnits";
import styles from "./NavBar.module.css";

function Navbar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>
        <img src="/images/Logo.svg" alt="logo image" />
      </div>
      <DropDownUnits />
    </div>
  );
}

export default Navbar;
