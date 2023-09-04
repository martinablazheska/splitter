import logo from "../../assets/images/logo.svg";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
    </header>
  );
}

export default Header;
