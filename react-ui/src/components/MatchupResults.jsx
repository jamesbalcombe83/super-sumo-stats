import React from 'react';
import { matchSelector } from '../store';
import { useRecoilValue } from 'recoil';


export default function MatchupResults() {
    const match = useRecoilValue(matchSelector);
    
    return (
        <div>{match}</div>
    )    
}