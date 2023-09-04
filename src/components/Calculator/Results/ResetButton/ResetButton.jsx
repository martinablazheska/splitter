import classes from "./ResetButton.module.css";

function ResetButton(props) {
  return (
    <button className={classes["reset-button"]} onClick={props.onClick}>
      RESET
    </button>
  );
}

export default ResetButton;
