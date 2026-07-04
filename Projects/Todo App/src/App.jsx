import { useState } from "react";
import Heading from "./components/Heading";
import UserInput from "./components/UserInput";
import Task from "./components/Task";


function App() {

  const [taskName , setTask] = useState("");
  const [taskDate , setDate] = useState("");

  const [todoItems , setTodoItems] = useState([]);

  const handleOnChange = (event) => {

    setTask(event.target.value);
  }

  const handleOnDateChange = (event) => {

    setDate(event.target.value);
  }

  const onAddButtonClick = () => {
    
    const newTodo = {

      task : taskName,
      date : taskDate
    }

    setTodoItems([...todoItems , newTodo]);
    setTask("");
    setDate("");
  }

  const onDeleteButtonClick = (index) => {

    const newTodoItems = todoItems.filter((item , currentIndex) => {
      return currentIndex !== index;
    })

    setTodoItems(newTodoItems);
  }


  return (
    <center className="todo-container">
    <Heading></Heading>
    <div className = "item-container">
      <UserInput handleOnChange = {handleOnChange} onAddButtonClick = {onAddButtonClick} handleOnDateChange={handleOnDateChange} taskName = {taskName} taskDate = {taskDate}></UserInput>
      {todoItems.map((item , index) => (
    <Task
     key = {item.task} taskName={item.task} taskDate={item.date} index = {index} onDeleteButtonClick = {onDeleteButtonClick}
    />
))}
    </div>
   
    </center>
  );
}

export default App;
