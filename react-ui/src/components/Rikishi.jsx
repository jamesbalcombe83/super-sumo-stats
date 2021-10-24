import React, {useState, useEffect} from 'react';
import { rikishiState } from '../store';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useAxios } from 'use-axios-client';
import axios from 'axios';


export default function Rikishi(props) {
    //import a state from the store and use anywhere with useRecoilValue and the atom name
    const [rikishi, setRikishi] = useRecoilState(rikishiState); 

    let id;
    //select the correct id based on the rikishi component displaying the data
    if (props.id ==='riki1') {
        id = Number(rikishi[0].id);
    } else {
        id = Number(rikishi[1].id);
    }
    const { data , loading, error } = useAxios({
        url: `/rikishi?id=${id}`
    });

    if (loading || !data) return "Select a Rikishi";
    if (error) return "Error";

    return (
        <div>
          <p>Shikona: {data.ringName}</p>
          <p>Birth place: {data.birthPlace}</p>
          <p>Heya: {data.heya}</p>
          <p>Highest Rank: {data.highestRank}</p>
          <p>Weight: {data.weight} kg</p>
          <p>Height: {data.height} m</p> 
        </div>
    )
}
