import { useState } from 'react';
import styles from './App.module.css';
import Buttons from './components/Buttons';
import Display from './components/Display';

function App() {

  const buttonNames = ["C" , "1" , "2" , "+" , "3" , "4" , "-" , "5" , "6" , "*" , "7" , "8" , "/" , "=" , "9" , "." , "0"];

  const [CalVal , setCalVal] = useState("");

  const handleOnClick = (buttons) =>{

    if(buttons === 'C') {

      setCalVal("");
    }

    else if(buttons === '=') {

      try {

        setCalVal(String((eval(CalVal))));
      } 

      catch (error) {

        setCalVal("Error");
      }
    }

    else {
      
      setCalVal((previousValue) => previousValue + buttons);
    }
    
  }

  return (
    <div className ={styles.container}>
      <Display displayValue = {CalVal}></Display>
      <Buttons buttonNames = {buttonNames} handleOnClick = {handleOnClick}></Buttons>
    </div>
  )
}

export default App;
