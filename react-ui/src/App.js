import React, { useEffect, Suspense} from 'react';
import logo from './img/logo.svg';
import './App.css';
import Rikishi from './components/Rikishi.jsx';
import Selector from './components/Selector.jsx';
import MatchupResults from './components/MatchupResults.jsx';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { rikishiListState, rikishiState, matchSelector } from './store';
const axios = require('axios');

function App() {

  const setRikishis = useSetRecoilState(rikishiListState);
  const rikishi = useRecoilValue(rikishiState);
  const matchResults = useRecoilValue(matchSelector);

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
      <p>Super Sumo Stats</p>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <div className="outer">
      <div className="container">
          <div className="rikishi">
            <Selector id='selector1' />
            <Suspense fallback = "Select a rikishi">
              {rikishi[0].id ? <Rikishi id={rikishi[0].id}/> : "Select first Rikishi"}
            </Suspense>
          </div>
          <div className="rikishi">
            <Selector id='selector2'/>
            <Suspense fallback = "Select a rikishi">
              {rikishi[1].id ? <Rikishi id={rikishi[1].id}/> : "Select second Rikishi"}
            </Suspense>
          </div>
        </div>
        <div className="matches">
          <Suspense fallback="Loading matchup" >
            {matchResults ? <MatchupResults /> : "Choose two Rikishi"}
          </Suspense>
        </div>
   </div>
      <h6 className="about">Copyright © 2021 James Balcombe - built with React.js</h6>

    </div>
  );

}

export default App;
