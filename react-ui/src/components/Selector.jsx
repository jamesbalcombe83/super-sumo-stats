import React from 'react';
import { rikishiListState, rikishiState } from '../store';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function Selector(props) {
    //import a state from the store and use anywhere with useRecoilValue and the atom name
    const rikishis = useRecoilValue(rikishiListState); 
    const [rikishi, setRikishi] = useRecoilState(rikishiState);

    //ensure the rikishi array is updated appropriately based on the selector chosen
    const handleChooseRikishi = (e) => {
        let currentRikishi = [...rikishi];
        if (props.id === 'selector1') {
            currentRikishi[0] =  {id : e.target.value} 
        } else {
            currentRikishi[1] =  {id : e.target.value} 
        }
        setRikishi(currentRikishi);
    }

    return (
        <span>
           { <select onChange={handleChooseRikishi}>
                    <option value="Choose a Rikishi (wrestler)">Choose a Rikishi (wrestler)</option>
                     {rikishis.map((rikishi, index) => {
                        return (
                            <option key={index} value={rikishi.id}>
                                {rikishi.ringName.trim().split(" ")[0]}
                            </option>
                        )
                        }
                    )}
            </select>}
        </span>
    )
}