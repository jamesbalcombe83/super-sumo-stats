import { atom, selector } from "recoil";
import { useGetRikishiQuery } from '../generated/graphql';

export const listRikishisState = atom({
  key: "rikishis",
  default: 'there is something here',
});

export const rikishiSelector = selector({
    key : 'rikishiSelection',
    get: ({ get }) => {
        const rikishi = get(listRikishisState)
        return `${rikishi}`
    }
})