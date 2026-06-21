//Creating Component

// import FirstButton from "./button"
// import Dynamism from "./Dynamic";
// function App() {

//   return <div>
//     <h1>First Component</h1>
//     <FirstButton></FirstButton>
//     <Dynamism></Dynamism>
//   </div>
// }

// export default App;

let goodElements = ["Protein" , "Iron" , "Creatine" , "D3" , "B12" , "Calcium"];

function App() {

  return (
  <>
     <h1>Essential Body Elements</h1>
     <ul className="list-group">
       {goodElements.map((items) => (<li key={items} className="list-group-item">{items}</li>))};
     </ul>
  </>
  );
}

//Providing unique key for each elements ensures rendering optimization.

export default App;