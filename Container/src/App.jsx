import Container from './components/Container';
import styles from "./Container.module.css"
import './App.css'
import FoodInput from './components/FoodInput';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import { useState } from 'react';


function App() {

  let [goodElements , setGoodElements] = useState([]);

  const handleBuyButton = (itemName) => {
     console.log(`Bought ${itemName}`);
  }

   const handleOnKeyDown = (event) => {
      
    if(event.key === 'Enter'){

      let newItem = event.target.value;
      event.target.value = ""
      let newGoodElements = [...goodElements , newItem];
      setGoodElements(newGoodElements);

    }
  
    }

  return(
  <>
  <Container>
    <h2 style = {{textAlign : 'center', backgroundColor : 'darkseagreen' , borderRadius : "5px"}}>Good Food Elements</h2> 

    <FoodInput handleOnKeyDown = {handleOnKeyDown}></FoodInput>
    <ErrorMessage itemName = {goodElements}></ErrorMessage>
    <FoodItems itemName = {goodElements} handleBuyButton = {handleBuyButton}></FoodItems>

    </Container>

  <Container>This is the List of good food elements for health.</Container>
  </>
  );
}

export default App;


//Note -> We use const instead of let while declaring the array for useState because React rule book says , 'state variable can not be changed normally using (=) operator like TextValue = "Banana" '. Using let it is possible . Also React doesnot alter the fixed value of const declaration , instead it rebuilds the whole component again to show tha change instead of altering the const array . 

//Note -> JavaScript looks inside the input box, sees the text , and makes a completely independent copy of that text. It hands that copy to the newItem variable. newItem doesn't care about the input box anymore; it just cares about the copy stored in it.