import { createContext, useState } from "react";
import Theme from "./components/Theme"
import styles from './Theme.module.css'

const themeContext = createContext();

function App() {

  
  const [theme , setTheme] = useState("light");

   return (

  <themeContext.Provider value = {{theme , setTheme}}>
      
  <div className={styles.box}>
    <h1>Theme Changer</h1>
    <div className = {styles.container} style={{backgroundColor : theme ==="light" ? "beige" : "darkgreen"}}>
      <Theme></Theme>
    </div>
  </div>
  </themeContext.Provider>
   )
}

export default App;
export {themeContext};
