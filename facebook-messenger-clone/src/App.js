import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  console.log(input);
  console.log(messages);


  const sendMessage = (event) => {
    // all the logic to send a message goes
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }
  return (
    <div className="app">
      <h1>Facebook messenger clone 🚀✨</h1>

      <form>
        <input value={input} onChange={ event => setInput(event.target.value) }/>
        <Button disabled={!input} variant="contained" color='primary' type='submit' onClick={sendMessage}>Send message</Button>
      </form>
            
      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }
    </div>
  );
}

export default App;
