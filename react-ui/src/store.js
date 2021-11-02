import { atom, selectorFamily } from 'recoil';
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
    get : id => async () => {
        const response = await axios.get(`/rikishi?id=${id}`)
        return response.data;
    },
});