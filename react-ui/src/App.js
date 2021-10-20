import React, { useCallback, useEffect, useState } from 'react';
import logo from './img/icon.png';
import './App.css';
import Rikishi from './components/Rikishi.jsx';
import Selector from './components/Selector.jsx';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useGetAllRikishiQuery, useGetARikishiLazyQuery } from './generated/graphql';
import { rikishiListState, rikishiState } from './store';

function App() {
    //create the state using the rikishiListState atom
    const [rikishis, setRikishis] = useRecoilState(rikishiListState);
    const rikishi = useRecoilValue(rikishiState);
    const { data, error, loading } = useGetAllRikishiQuery();

    useEffect(() => {
        if (data) {
            if (data && data.allRikishis && data.allRikishis.edges) {
                //set its value as usual
                setRikishis(data.allRikishis.edges);
            }
        }
        if (loading) console.log("loading");
        if (error) console.log(error);
    }, [data,loading,error]);

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
