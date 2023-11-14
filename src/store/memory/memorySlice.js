import {createSlice} from '@reduxjs/toolkit';

export const memorySlice = createSlice({
    name: 'memory',
    initialState: {
        pairs: [],
        selectedCards: [],
        matchedPairs: [],
        isFlipping: false,
        startTime: null,
        endTime: null,
    },
    reducers: {
        setPairs: (state, action) => {
            state.pairs = action.payload;
        },
        selectCard: (state, action) => {
            if (state.selectedCards.length < 2) {
                state.selectedCards.push(action.payload);
            }
        },
        resetSelection: (state) => {
            state.selectedCards = [];
        },
        addMatchedPair: (state, action) => {
            state.matchedPairs.push(action.payload);
        },
        setStartTime: (state) => {
            state.startTime = new Date().getTime();
        },
        setEndTime: (state) => {
            state.endTime = new Date().getTime();
        },
        flipCard: (state, action) => {
            const index = action.payload;
            state.pairs[index].isFlipped = !state.pairs[index].isFlipped;
        },
    }
});

export const {
    setPairs,
    selectCard,
    resetSelection,
    addMatchedPair,
    setStartTime,
    setEndTime,
    flipCard
} = memorySlice.actions;