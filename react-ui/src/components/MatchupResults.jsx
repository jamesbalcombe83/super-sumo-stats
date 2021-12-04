import React from 'react';
import { rikishiState } from '../store';
import { useRecoilState,  } from 'recoil';
import { useAxios } from 'use-axios-client';


export default function MatchupResults(props) {
    //import a state from the store and use anywhere with useRecoilValue and the atom name
    const [rikishi, setRikishi] = useRecoilState(rikishiState); 

    const id1 = rikishi[0].id;
    const id2 = rikishi[1].id;

    const { data , loading, error } = useAxios({
        url: `/matchup?id1=${id1}&id2=${id2}`
    });

    if (loading || !data) return "Select two Rikishi";
    if (error) return "Error";
    
    return (
        <div>{data.record}</div>
    )    
}
