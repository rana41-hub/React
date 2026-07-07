import { createContext, useState } from 'react'
import './App.css'
import Child1 from './components/Child1'
import Child2 from './components/Child2'
import Child3 from './components/Child3'

//step 1 : Create context using createContext 
const UserContext = createContext();

//step 2 : Wrap all children inside a provider

//step 3 : Pass value

//step 4 : Use the value inside consumer child component using useContext

//Don't forget to export the created Context

function App() {
  
  const [userName , setUserName] = useState("Rana");

  return (
    <UserContext.Provider value = {userName}>

      <Child1></Child1>

    </UserContext.Provider>
  )
}

export default App;

export {UserContext};
