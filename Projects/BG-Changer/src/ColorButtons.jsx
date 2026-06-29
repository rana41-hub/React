import { useState } from "react";
import style from './ColorButtons.module.css';

const ColorButtons = () => {

  let [color , setColor] = useState("white");

  return (

    <>
    <div className="parentbar" style={{backgroundColor : color , display : "flex" ,  justifyContent : "center" , alignItems : "center" , height : "100vh"}}>

      <div className="childbar" style = {{backgroundColor : "purple" , width : "60%" , height : "50px" , border : "1px solid black" , borderRadius : "5px" , padding : "10px"}}>

        <button className={style.red} onClick={() => setColor("red")}>Red</button>
        <button className={style.green} onClick={() => setColor("green")}>Green</button>
        <button className={style.blue} onClick={() => setColor("blue")}>Blue</button>
        <button className={style.pink} onClick={() => setColor("pink")}>Pink</button>
        <button className={style.yellow} onClick={() => setColor("yellow")}>Yellow</button>
        <button className={style.orange} onClick={() => setColor("orange")}>Orange</button>
        <button className={style.cadetblue} onClick={() => setColor("#5F9EA0")}>Cadet Blue</button>
        <button className={style.slategray}onClick={() => setColor("#2F4F4F")}>Slate Gray</button>
      </div>
      
    </div>
    </>
  )
}

export default ColorButtons;