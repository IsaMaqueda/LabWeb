import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChatBot from "../react-simple-chatbot";


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    <ChatBot steps={[
        {
          id: '1',
          message: 'You can add custom components',
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger: '3',
        },
        {
         id: '3',
         component: (
           <div> {previousValue} </div>
          ),
         end: true,
         },
        ]}
        /> 
  );
}