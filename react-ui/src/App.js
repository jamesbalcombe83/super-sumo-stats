import React, { useEffect, Suspense} from 'react';
import logo from './img/icon.png';
import './App.css';
import Rikishi from './components/Rikishi.jsx';
import Selector from './components/Selector.jsx';
import MatchupResults from './components/MatchupResults.jsx';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { rikishiListState, rikishiState } from './store';
const axios = require('axios');

function App() {

  const setRikishis = useSetRecoilState(rikishiListState);
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
            <Suspense fallback = "Select a rikishi">
              {rikishi[0].id ? <Rikishi id={rikishi[0].id}/> : "Select first Rikishi"}
              {rikishi[1].id ? <Rikishi id={rikishi[1].id}/> : "Select second Rikishi"}
            </Suspense>
            <Suspense fallback="Loading matchup" >
              <MatchupResults />
            </Suspense>
          </div>
      </div>
   </div>
  );

}

export default App;
