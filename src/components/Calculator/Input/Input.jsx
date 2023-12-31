import classes from "./Input.module.css";
import InputField from "./InputField/InputField";
import TipPicker from "./TIpPicker/TipPicker";
import { useContext } from "react";
import { CalculatorContext } from "../../../store/calculator-context";

function Input() {
  const { amount, persons, setAmount, setPersons } =
    useContext(CalculatorContext);

  function amountHandler(value) {
    setAmount(value);
  }

  function personsHandler(value) {
    setPersons(value);
  }

  return (
    <div className={classes.input}>
      <InputField
        label="Bill"
        id="bill"
        type="number"
        step="0.01"
        min="0"
        inputClass="amount"
        placeholder="0"
        value={amount}
        onChange={amountHandler}
        isInvalid={amount < 0}
        errorMessage={`Can't be negative`}
      />
      <TipPicker />

      <InputField
        label="Persons"
        id="persons"
        type="number"
        step="1"
        min="0"
        value={persons}
        inputClass="persons"
        placeholder="1"
        onChange={personsHandler}
        isInvalid={persons < 1}
        errorMessage={`Can't be zero`}
      />
    </div>
  );
}

export default Input;
