import styles from '../Container.module.css'

const Item = ({itemName , handleBuyButton}) => {

  return <>
     <li className="list-group-item">{itemName}
        <button className={`${styles.Buy} btn btn-info`} onClick={() => handleBuyButton(itemName)}>Buy</button>
          </li>
  </>
}

export default Item;