import React, {useState, useEffect} from 'react';
import { rikishiState } from '../store';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useAxios } from 'use-axios-client';
import axios from 'axios';

export default function MatchupResults(props) {
    //import a state from the store and use anywhere with useRecoilValue and the atom name
    const [rikishi, setRikishi] = useRecoilState(rikishiState); 

    let id1,id2, display;

    if (id1 && id2) {
        id1 = rikishi[0].id;
        id2 = rikishi[1].id;

        const { data , loading, error } = useAxios({
            url: `/matchup?id1=${id1}&id2=${id2}`
        });

        if (loading || !data) return "Select two Rikishi";
        if (error) return "Error";
        display = data.record
    }

    return (
        <div>{!id1 || id2 ? "Select two Rikishi" : display}</div>
    )    
}
