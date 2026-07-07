import { useContext } from "react";
import { UserContext } from "../App";

const Child3 = () => {

  const name = useContext(UserContext);

  return <>

  <h1>{name}</h1>
  
  </>

}

export default Child3;