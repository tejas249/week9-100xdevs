import { useEffect, useState } from "react";

function App() {  
  return (
    <div>
        <h1>This is counter apps to understand the useState hook</h1>
        <Counter/>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0)

  useEffect(function(){
    setInterval(function(){
      setCount(count+1);
      
    }, 1000),
  },[]);
 function increasecounter(){
  setCount(count+1)
 }
  return <div>
    <h1 id="text">{count}</h1>
    <button onClick={increasecounter}>increase</button>

  </div>
}

export default App;
