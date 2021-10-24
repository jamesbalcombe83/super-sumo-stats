import React, { useCallback, useEffect, useState } from 'react';
import logo from './img/icon.png';
import './App.css';
import Rikishi from './components/Rikishi.jsx';
import Selector from './components/Selector.jsx';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { rikishiListState, rikishiState } from './store';
const axios = require('axios');

function App() {

  const [rikishis, setRikishis] = useRecoilState(rikishiListState);
  const rikishi = useRecoilValue(rikishiState);

  useEffect(() => {
    async function getRikishis() {
      try {
        const data = await axios.get('/all-rikishi');
        setRikishis(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getRikishis();
  },[])

return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
      <div><Selector /></div>
      <div><Rikishi/></div>
   </div>
  );

}

export default App;
