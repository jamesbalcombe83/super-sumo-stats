import React, { useEffect } from 'react';
import logo from './img/icon.png';
import './App.css';
import Rikishi from './components/Rikishi.jsx';
import Selector from './components/Selector.jsx';
import MatchupResults from './components/MatchupResults.jsx';
import { useRecoilState, useRecoilValue } from 'recoil';
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
    <div className="container">
      <div className="sidebar"></div>
        <div className="main">
            <Selector id='selector1' /><Selector id='selector2'/>
            {rikishi[0] ? <Rikishi id="riki1"/> : ""}
            {rikishi[1] ? <Rikishi id="riki2"/> : ""}
            <MatchupResults />
          </div>
      </div>
   </div>
  );

}

export default App;
