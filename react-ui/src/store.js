import { atom, selector } from 'recoil';

export const rikishiListState = atom({
    key: 'rikishiList',
    default: [],
});

export const rikishiState = atom({
    key: 'rikishi',
    default: [{},{}],
});

/* export const rikishiSelector = selector ({
    key: "rikishiSelector",
    get : ({ get }) => {
        
        const { data, error, loading } = useGetARikishiLazyQuery({
            variables : { id: get(rikishiState)}
        });
        if (loading) return "Loading";
        if (error) return "An error occured!";
        if (data) return data;
    },
}); */