import styles from "../Container.module.css";
import Item from "./Item";

const FoodItems = ({itemName , handleBuyButton}) => {

  return (
      <ul className="list-group">
        {itemName.map ((item) =>
        
         <Item key = {item} 
         itemName = {item} 
         handleBuyButton = {handleBuyButton}>

         </Item>
        )}
      </ul>
  )    
        
}

export default FoodItems;
