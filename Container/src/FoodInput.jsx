import style from "./FoodInput.module.css";

const FoodInput = () => {

  const handleOnChange = (event) => {
     return console.log(event.target.value);
  }

  return <input type = "text" placeholder="Enter the item" className={style.InputBox} onChange={handleOnChange}></input>
};

export default FoodInput;