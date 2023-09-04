import classes from "./ResultsField.module.css";

function ResultsField(props) {
  return (
    <div className={classes["result-field"]}>
      <div>
        <div className={classes["result-field__title"]}>
          {props.resultTitle}
        </div>
        <div className={classes["result-field__subtitle"]}>/per person</div>
      </div>
      <div className={classes["result-field__amount"]}>
        {props.resultAmount}
      </div>
    </div>
  );
}

export default ResultsField;
