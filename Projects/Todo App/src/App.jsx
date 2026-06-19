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
      <Task1></Task1>
      <Task2></Task2>
    </div>
   
    </center>
  );
}

export default App;
