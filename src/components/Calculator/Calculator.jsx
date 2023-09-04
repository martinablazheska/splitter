import Input from "./Input/Input";
import Results from "./Results/Results";
import classes from "./Calculator.module.css";

function Calculator() {
  return (
    <div className={classes.calculator}>
      <Input />
      <Results />
    </div>
  );
}

export default Calculator;
