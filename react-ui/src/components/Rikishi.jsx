import React, {useState, useEffect} from 'react';
import { useQuery } from '@apollo/react-components' 
import { rikishiState } from '../store';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useAxios } from 'use-axios-client';
import axios from 'axios';


export default function Rikishi() {
    //import a state from the store and use anywhere with useRecoilValue and the atom name
    const [rikishi, setRikishi] = useRecoilState(rikishiState); 

    const id = Number(rikishi.id);
    const { data , loading, error } = useAxios({
        url: `/rikishi?id=${id}`
    });

    if (loading || !data) return "loading...";
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
