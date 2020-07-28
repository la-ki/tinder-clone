import React from 'react';
import Chat from './Chat';
import './Chats.css';

function Chats() {
  return (
    <div className="chats">
      <Chat 
        name="Sarah"
        message="Yo whats up!"
        timestamp="35 minutes ago"
        profilePic="https://images.unsplash.com/photo-1582041148887-67274b989ae3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      />
      <Chat 
        name="Ellen"
        message="Whats up 💘!"
        timestamp="35 minutes ago"
        profilePic="https://images.unsplash.com/photo-1572348805897-a0ca00b77e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      />
      <Chat 
        name="Sandra"
        message="Ola 💘!"
        timestamp="3 days ago"
        profilePic="https://images.unsplash.com/photo-1513370324745-ac9f7346206f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      />
    </div>
  )
}

export default Chats
