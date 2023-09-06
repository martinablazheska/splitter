import classes from "./TipPicker.module.css";
import TipButton from "./TipButton/TipButton";
import { useContext } from "react";
import { CalculatorContext } from "../../../../store/calculator-context";

function TipPicker() {
  const tips = [5, 10, 25, 50];
  const { tip, setTip } = useContext(CalculatorContext);

  function tipHandler(value) {
    setTip(value);
  }

  function customTipHandler(event) {
    if (event.target.value >= 0) {
      setTip(event.target.value);
    } else {
      setTip("0");
    }
  }

  return (
    <>
      <h2>Select Tip%</h2>
      <div className={classes["tip-picker"]}>
        {tips.map((tipValue) => {
          return (
            <TipButton
              name="tipButton"
              key={tipValue}
              label={tipValue}
              value={tipValue}
              checked={tipValue === +tip}
              onChange={tipHandler}
            />
          );
        })}
        <input
          className={classes["custom-input"]}
          type="number"
          min="0"
          step="1"
          placeholder="Custom"
          onChange={customTipHandler}
        />
      </div>
    </>
  );
}

export default TipPicker;
