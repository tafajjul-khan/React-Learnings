import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);

  // let counter = 5
  const addValue = () => {
    console.log("value added", Math.random(), setCounter);
    // counter = counter + 1;
    setCounter(counter + 1)
    if(counter !== 100){
      setCounter(counter + 1)
    }else{
      setCounter(counter)
    }
  };
  const removedValue = () => {
    console.log("value removed", Math.random(), setCounter);
    // counter = counter + 1;
    setCounter(counter - 1)
    if(counter !== 0){
      setCounter(counter - 1)
    }else{
      setCounter(counter)
    }
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removedValue}>remove value {counter}</button>
    </>
  );
}

export default App;
