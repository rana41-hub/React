import styles from "../Buttons.module.css";

const Buttons = ({buttonNames , handleOnClick}) => {

  return(
        <div className = {styles.buttons}>
        {buttonNames.map((buttons) => <button key = {buttons} className = {styles.button} onClick={() => {handleOnClick(buttons)}}>{buttons}</button>)}
        </div>
  );
}

export default Buttons;