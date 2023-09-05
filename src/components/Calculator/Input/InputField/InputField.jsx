import classes from "./InputFIeld.module.css";

function InputField(props) {
  function onChange(event) {
    props.onChange(event.target.value);
  }

  return (
    <div className={classes["input-field"]}>
      <label htmlFor={props.id}>{props.label}</label>

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
