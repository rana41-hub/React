import styles from "./Buttons.module.css";

const Buttons = () => {

  const buttonNames = ["C" , "1" , "2" , "+" , "3" , "4" , "-" , "5" , "6" , "*" , "7" , "8" , "/" , "=" , "9" , "." , "0"];

  return(
        <div className = {styles.buttons}>
        {buttonNames.map((buttons) => <button key = "btn" className = {styles.button}>{buttons}</button>)}
        </div>
  );
}

export default Buttons;