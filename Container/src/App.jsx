import Container from './Container';
import style from "./Container.module.css"
import './App.css'
import FoodInput from './FoodInput';


function App() {

  let goodElements = ["Protein" , "Iron" , "Creatine" , "D3" , "B12"]

  const handleBuybutton = (item) => {
    return console.log(`Bought ${item}`);
  }

  return(
  <>
  <Container>
    <h2 style = {{textAlign : 'center'}}>Good Food Elements</h2> 
    <ul className="list-group">
      {goodElements.map ((item) => (<li key = {item} className="list-group-item">{item}
         <button className={`${style.Buy} btn btn-info`} onClick={() => handleBuybutton(item)}>Buy</button>
         </li>))}
    </ul>
    <FoodInput></FoodInput>
    </Container>

  <Container>This is the List of good food elements for health.</Container>
  </>
  );
}

export default App;
