import React, {useState, useEffect} from 'react';
import { useQuery } from '@apollo/react-components' 
import { rikishiListState, rikishiState } from '../store';
import { useRecoilState, useRecoilValue } from 'recoil';
//import { listRikishisState, rikishiSelector } from "../store";



export default function Selector() {
    //import a state from the store and use anywhere with useRecoilValue and the atom name
    const rikishis = useRecoilValue(rikishiListState); 
    const [rikishi, setRikishi] = useRecoilState(rikishiState);

    const handleChooseRikishi = (e) => {
        setRikishi({id : e.target.value});
    }

    return (
        <div>
            <select onChange={handleChooseRikishi}>
                    <option value="Choose a Rikishi (wrestler)">Choose a Rikishi (wrestler)</option>
                     {rikishis.map((rikishi, index) => {
                        return (
                            <option key={index} value={rikishi.node.id}>
                                {rikishi.node.ringName.split(" ")[0]}
                            </option>
                        )
                        }
                    )}
            </select>
        </div>
    )
}