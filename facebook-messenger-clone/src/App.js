import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState(1);
  const increment = () => setInput(input + 1);
  const decrement = () => setInput(input - 1);

  return (
    <div className="app">
      {/* Review React Hook */}
      <h1> useState : {input}</h1>

      <input />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      {/* input field */}
      {/* button */}
      {/* messeges themselves */}
    </div>
  );
}

export default App;
