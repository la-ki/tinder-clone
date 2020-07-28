import React, { useState } from 'react';
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';

function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Ellen',
      image: 'https://images.unsplash.com/photo-1572348805897-a0ca00b77e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      message: 'Whats up 💘'
    },
    {
      name: 'Ellen',
      image: 'https://images.unsplash.com/photo-1572348805897-a0ca00b77e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      message: 'How it going!'
    },
    {
      message: 'Hows it going!'
    }
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  }


  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 25/08/2020</p>
      {messages.map(message => (
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
            <div className="chatScreen__message">
              <p className="chatScreen__textUser">{message.message}</p>
            </div>
          )

      ))}
      <div className="chatScreen__input">
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} className="chatScreen__inputField" />
          <button
            onClick={handleSend}
            className="chatScreen__inputButton">SEND</button>
        </form>
      </div>
    </div>
  )
}

export default ChatScreen
