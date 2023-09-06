import classes from "./Error.module.css";

function Error(props) {
  return <span className={classes.error}>{props.children}</span>;
}

export default Error;
