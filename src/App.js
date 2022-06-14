import { useState } from "react";
import "./App.css";

function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <h2 data-testid="counter-value">{count}</h2>
      <button data-testid="counter-decrement-button"
      disabled={count==0}
        onClick={() => count>0 && setCount(count - 1)}>Decrement</button>
      <button data-testid="counter-increment-button" onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  );
}

export default App;
