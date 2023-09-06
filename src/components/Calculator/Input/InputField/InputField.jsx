import classes from "./InputFIeld.module.css";
import Error from "./Error/Error";

function InputField(props) {
  function onChange(event) {
    props.onChange(event.target.value);
  }

  return (
    <div className={classes["input-field"]}>
      <div className={classes["label-container"]}>
        <label htmlFor={props.id}>{props.label}</label>
        {props.isInvalid && <Error>{props.errorMessage}</Error>}
      </div>

      <input
        type={props.type}
        className={classes[`${props.inputClass}`]}
        id={props.id}
        step={props.step}
        min={props.min}
        placeholder={props.placeholder}
        value={props.value}
        onChange={onChange}
      />
    </div>
  );
}
export default InputField;
