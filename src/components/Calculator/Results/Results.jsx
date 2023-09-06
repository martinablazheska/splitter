import classes from "./Results.module.css";
import ResetButton from "./ResetButton/ResetButton";
import ResultsField from "./ResultsField/ResultsField";
import { useContext, useEffect, useState } from "react";
import { CalculatorContext } from "../../../store/calculator-context";

function Results() {
  const { amount, tip, persons, setAmount, setTip, setPersons } =
    useContext(CalculatorContext);

  const [results, setResults] = useState({
    tipAmount: (0).toFixed(2),
    totalAmount: (0).toFixed(2),
  });

  function resetHandler() {
    setAmount("0");
    setTip("0");
    setPersons("1");
  }

  useEffect(() => {
    if (amount >= 0 && persons > 0) {
      setResults({
        tipAmount: ((amount * (tip / 100)) / persons).toFixed(2),
        totalAmount: ((amount * (tip / 100 + 1)) / persons).toFixed(2),
      });
    } else {
      setResults({
        tipAmount: (0).toFixed(2),
        totalAmount: (0).toFixed(2),
      });
    }
  }, [amount, tip, persons]);

  return (
    <div className={classes["results-container"]}>
      <ResultsField resultTitle="Tip Amount" resultAmount={results.tipAmount} />
      <ResultsField resultTitle="Total" resultAmount={results.totalAmount} />
      <ResetButton onClick={resetHandler} />
    </div>
  );
}

export default Results;
