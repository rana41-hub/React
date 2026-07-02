import styles from "../FoodInput.module.css";

const FoodInput = ({handleOnKeyDown}) => {

  return <input type = "text" placeholder="Enter the item" className={styles.InputBox} onKeyDown={handleOnKeyDown}></input>

}

export default FoodInput;