import styles from './App.module.css';
import Buttons from './Buttons';
import Display from './Display';

function App() {

  return (
    <div className ={styles.container}>
      <Display></Display>
      <Buttons></Buttons>
    </div>
  )
}

export default App;
