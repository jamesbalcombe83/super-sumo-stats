import { atom, selectorFamily, selector } from 'recoil';
const axios = require('axios');

export const rikishiListState = atom({
    key: 'rikishiList',
    default: [],
});

export const rikishiState = atom({
    key: 'rikishi',
    default: [{},{}],
});

export const rikishiSelector = selectorFamily ({
    key: "rikishiSelector",
    get : id => ({ get }) => {
        const result = get(rikishiListState).filter(item => item.id === Number(id));
        return result[0];
    }
});

export const matchSelector = selector({
    key: "matchSelector",
    get: async ({ get }) => {
        const rikishis = get(rikishiState);
        if (rikishis[0].id && rikishis[1].id) {
            const result = await axios.get(`/matchup?id1=${rikishis[0].id}&id2=${rikishis[1].id}`);
            return result.data ? result.data.record : "Awaiting results";
        }
    }
})