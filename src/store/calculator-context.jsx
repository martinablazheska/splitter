import { createContext, useState } from "react";

export const CalculatorContext = createContext({
  amount: "",
  setAmount: () => {},
  tip: "",
  setTip: () => {},
  persons: "",
  setPersons: () => {},
});

function CalculatorContextProvider(props) {
  const [amount, setAmount] = useState("0");
  const [tip, setTip] = useState("0");
  const [persons, setPersons] = useState("1");

  const calculatorData = {
    amount: amount,
    setAmount: setAmount,
    tip: tip,
    setTip: setTip,
    persons: persons,
    setPersons: setPersons,
  };
  return (
    <CalculatorContext.Provider value={calculatorData}>
      {props.children}
    </CalculatorContext.Provider>
  );
}

export default CalculatorContextProvider;
