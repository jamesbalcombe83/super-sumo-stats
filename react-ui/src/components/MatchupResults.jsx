import React, { useEffect, useState } from 'react';
import { matchSelector, rikishiState, rikishiListState } from '../store';
import { useRecoilValue } from 'recoil';


export default function MatchupResults() {
    const match = useRecoilValue(matchSelector);
    const rikishisID = useRecoilValue(rikishiState);
    const rikishis = useRecoilValue(rikishiListState);
    const [rikiNames, setRikiNames] = useState([]);

    useEffect(() => {
        let riki1name = rikishis.filter(riki => Number(riki.id) === Number(rikishisID[0].id))[0].ringName.trim().split(" ")[0]
        let riki2name = rikishis.filter(riki => Number(riki.id) === Number(rikishisID[1].id))[0].ringName.trim().split(" ")[0]
        setRikiNames([riki1name, riki2name]);
    }, [match])
    
    return (
        <div className="results">
            <h2>
                Match Results
            </h2>
            <h3>
                {rikiNames[0]} {match} {rikiNames[1]}
            </h3>
        </div>
    )    
}