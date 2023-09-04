import Calculator from "../Calculator/Calculator";
import classes from "./Main.module.css";
import CalculatorContextProvider from "../../store/calculator-context";

function Main() {
  return (
    <CalculatorContextProvider>
      <main className={classes.main}>
        <Calculator />
      </main>
    </CalculatorContextProvider>
  );
}

export default Main;
