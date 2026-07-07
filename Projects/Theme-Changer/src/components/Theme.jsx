import { useContext } from 'react';
import styles from '../Theme.module.css'
import { themeContext } from '../App';

const Theme = () => {

const {theme , setTheme} = useContext(themeContext);

const handleOnClick = () =>{

  if(theme === 'light'){
    setTheme("dark");
  }
  else {
    setTheme("light");
  }

}

 return (
  <>
  <button onClick={handleOnClick} className={styles.ThemeButton}>
    Change Theme
  </button>
    </>
 )
}

export default Theme;