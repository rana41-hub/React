import styles from './App.module.css'
import { useRef } from "react";

function App() {

  let btnRef = useRef();

  const handleOnClick = () =>{

    btnRef.current.style.backgroundColor = "orange";
  }

  const handleOnRestore = () => {

    btnRef.current.style.backgroundColor = "white"
  }
  
  return (

    <div className = {styles.parent}>
        <h1>Button Color Changer</h1>
        {/*<ColorButton ref = {btnRef}></ColorButton>*/}  {/*This would not work due to reason given on note below*/}
        <button className={styles.Button} ref={btnRef}>I Change</button>
        <button className={styles.Changer} onClick={handleOnClick}>Click me!</button>
        <button className={styles.restore} onClick={handleOnRestore}>Restore</button>
    </div>
  )
}

export default App;


//Note -> Custom components in React do not expose their underlying DOM properties to Refs.
