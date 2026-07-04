import styles from "../Display.module.css";

const Display = ({displayValue}) => {

  return <input type ="text" className = {styles.input_box} readOnly value={displayValue}></input>
};

export default Display;