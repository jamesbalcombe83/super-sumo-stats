import React, { useState, useEffect } from "react";
import logo from './img/icon.png';
import './App.css';
import Rikishi from './components/Rikishi';

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
        <img src={logo} alt="sumo logo" width="200px"/>
        <h1>{data}</h1>
        <h2>Coming Soon!</h2>
        <Rikishi />
      </header>
    </div>
  );
}

export default App;