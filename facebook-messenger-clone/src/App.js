import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([ 
    {username:'Boyoung', text: 'Nice to meet you.'}, 
    {username:'Chagndae', text: 'whats up'} 
  ]);
  const [username, setUsername] = useState('');

  // useState = variable in REACT
  // useEffect = run code on a condition in REACT
  
  useEffect(() => {
    // run code here... 
    // if its blank inside [], this code runs ONCE when the app component loads 
    setUsername(prompt('please enter your name'));
  }, [] );

  console.log(input);
  console.log(messages);


  const sendMessage = (event) => {
    // all the logic to send a message goes
    event.preventDefault();
    setMessages([...messages, {username: username, text: input}]);
    setInput('');
  }
  return (
    <div className="app">
      <h1>Facebook messenger clone 🚀✨</h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={ event => setInput(event.target.value) }/>
          <Button disabled={!input} variant="contained" color='primary' type='submit' onClick={sendMessage}>Send message</Button>
        </FormControl>
      </form>
            
      {
        messages.map(message => (
          <Message username={username} message={message}/>
        ))
      }
    </div>
  );
}

export default App;
