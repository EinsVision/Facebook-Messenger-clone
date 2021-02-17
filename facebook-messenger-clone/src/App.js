import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    // all the logic to send a message goes
    setMessages([...messages, input]);
    setInput('');
  }
  return (
    <div className="app">
      <h1>Facebook messenger clone 🚀✨</h1>
      <input value={input} onChange={ event => setInput(event.target.value) }/>
      <button onClick={sendMessage}>Send message</button>

      {/* input field */}
      {/* button */}
      {/* message themselves */}
    </div>
  );
}

export default App;
