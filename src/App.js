import { useState } from 'react';
import './App.css';
import React from 'react'
import QRCodeCanvas from './QRCodeCanvas';

function App() {

  const [text, setText] = useState("Digite Aqui!!")

  return (
  <div className="App">
    <input onChange={(element)=>{setText(element.target.value)}}/>
    <QRCodeCanvas text={text}></QRCodeCanvas>
  </div>
  )
}

export default App;
