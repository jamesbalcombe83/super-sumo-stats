import React, { useState, useEffect } from "react";
import logo from './img/icon.png';
import './App.css';

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width="200px"/>
        <h1>{data}</h1>
        <h2>Coming Soon!</h2>
      </header>
    </div>
  );
}

export default App;
