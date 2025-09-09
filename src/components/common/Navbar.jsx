import DropDownUnits from "./DropDownUnits";
import styles from "./NavBar.module.css";

function Navbar() {
  return (
    <div className={styles.navBar}>
      <div>
        <img src="/images/Logo.svg" alt="logo image" />
      </div>
      <DropDownUnits />
    </div>
  );
}

export default Navbar;
