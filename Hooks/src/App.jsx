import { useState } from 'react'
import './App.css'

function App() {

  let [counter , setCounter] = useState(15);
  
  const addValue = () => {

    if(counter >= 20){
      counter = 20;
    }
    else {
      setCounter(counter + 1);
    console.log("clicked",counter);
    }
  }

  const removeValue = () => {

    if(counter <= 0){
      counter =  0;
    }
    else {
      setCounter(counter - 1);
    console.log("clicked" , counter);
    }
    
  }
  return (
    <>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App;
