import React, {useState, useEffect} from 'react';
import { useQuery } from '@apollo/react-components' 
import { useGetRikishiQuery } from '../generated/graphql';
import { useRecoilValue } from 'recoil';
import { listRikishisState, rikishiSelector } from "../store";


export default function Rikishi() {
  const [rikishi, setRikishi] = useState();

  const { data, error, loading } = useGetRikishiQuery();
  if (loading) return <p>Loading</p>;
  if (error) return <p>An error occured!</p>;

  console.log(data);
  return (
   <div>
      {data.allRikishis.edges.map((edge) => {
        return (
          <p>
          {edge.node.ringName}
          </p>
        )
      })}
    </div>
  )

}
