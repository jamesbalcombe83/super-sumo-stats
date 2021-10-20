import React, {useState, useEffect} from 'react';
import { useQuery } from '@apollo/react-components' 
import { rikishiState } from '../store';
import { useRecoilState, useRecoilValue } from 'recoil';
//import { listRikishisState, rikishiSelector } from "../store";
import { useGetAllRikishiQuery, useGetARikishiLazyQuery, useGetARikishiQuery } from '../generated/graphql';


export default function Rikishi() {
    //import a state from the store and use anywhere with useRecoilValue and the atom name
    const [rikishi, setRikishi] = useRecoilState(rikishiState); 

    const { data , loading, error } = useGetARikishiQuery(
        { 
            variables: {
                id : Number(rikishi.id),
            } 
        }
    );
    if (data) {
        if (data && data.rikishiById && data.rikishiById.id) {
            //set its value as usual
            setRikishi(data.rikishiById);
        }
    }
    if (loading) console.log("loading");
    if (error) console.log(error);
   
    return (
        <div>
          {rikishi.ringName}<br></br>
          {rikishi.birthPlace}<br></br>
          {rikishi.heya}<br></br>
          {rikishi.highestRank}<br></br>

          {rikishi.weight}<br></br>

          
          {rikishi.height}<br></br>

        </div>
    )
}
