import Heading from "./Heading";
import UserInput from "./Input";
import Task1 from "./Task1";
import Task2 from "./Task2";


function App() {
  return (
    <center className="todo-container">
    <Heading></Heading>
    <div class = "item-container">
      <UserInput></UserInput>
      <Task1 name1 = "Buy Milk" date1 = "5/10/26"></Task1>
      <Task2 name2 = "Go to college" date2 = "6/10/26"></Task2>
    </div>
   
    </center>
  );
}

export default App;
