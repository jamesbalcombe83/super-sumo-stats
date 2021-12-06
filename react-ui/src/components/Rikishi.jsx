import React from 'react';
import { rikishiSelector } from '../store';
import { useRecoilState } from 'recoil';

export default function Rikishi(props) {
    const data = useRecoilState(rikishiSelector(props.id));

    return (
        <div>
          <p>Shikona: {data[0].ringName}</p>
          <p>Birth place: {data[0].birthPlace}</p>
          <p>Heya: {data[0].heya}</p>
          <p>Highest Rank: {data[0].highestRank}</p>
          <p>Weight: {data[0].weight} kg</p>
          <p>Height: {data[0].height} m</p> 
        </div>
    )
}
