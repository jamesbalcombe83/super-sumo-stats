import React, {useState, useEffect} from 'react';
import { useGetRikishiQuery } from '../generated/graphql';

export default function Rikishi() {
    const {data, error, loading} = useGetRikishiQuery();
    
    if (loading)  return ('Loading...');
    if (error)  return (`Error! ${error.message}`);
    
    return (
      <div>
        {data.allRikishis.nodes.map((node) => {
          return (
            <div>
            {node.ringName}
            <br></br>
            Highest Rank: {node.highestRank}
            Date of Birth: {node.dateOfBirth}
            Birth plac: {node.birthPlace}
            </div>
          )
        })}
      </div>
    )
  }