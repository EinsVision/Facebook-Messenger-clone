import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // useState = variable in REACT
  // useEffect = run code on a condition in REACT
  
  useEffect(()=> {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map( doc => ({ id: doc.id, message: doc.data()}) ))
    })
  }, [] )

  useEffect(() => {
    // run code here... 
    // if its blank inside [], this code runs ONCE when the app component loads 
    setUsername(prompt('please enter your name'));
  }, [] );

  const sendMessage = (event) => {
    // all the logic to send a message goes
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessages([...messages, {username: username, text: input}]);
    setInput('');
  }
  return (
    <div className="App">
      <img src='https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=399&h=399' alt='' />
      <h1>Facebook messenger clone 🚀✨</h1>
      <h2>Welcome {username}</h2>
      <form className='app__form'>
        <FormControl className='app__formControl'>
          <Input className='app_input' placeholder='Enter a message...' value={input} onChange={ event => setInput(event.target.value) }/>
          <IconButton className='app__iconButton' disabled={!input} variant="contained" color='primary' type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      
      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message}/>
          ))
        }
      </FlipMove>
      
    </div>
  );
}

export default App;
