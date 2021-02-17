import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState(1);
  return (
    <div className="app">
      <h1>Facebook messenger clone 🚀✨</h1>
      <input value={input} onChange={ event => setInput(event.target.value) }/>
      <button>Send message</button>

      {/* input field */}
      {/* button */}
      {/* message themselves */}
    </div>
  );
}

export default App;
