import classes from "./TipButton.module.css";

function TipButton(props) {
  function clickHandler(event) {
    props.onChange(event.target.value);
  }

  return (
    <div className={classes["tip-button"]}>
      <input
        type="radio"
        name="tip"
        id={props.label}
        value={props.value}
        onChange={clickHandler}
        checked={props.checked}
      />
      <label htmlFor={props.label}>{props.value}%</label>
    </div>
  );
}

export default TipButton;
