import { createSlice } from '@reduxjs/toolkit';

export const memorySlice = createSlice({
    name: 'memory',
    initialState: {
        isSaving: false,
        pairs: [],
        selectedCards: [],
        matchedPairs: [],
        isFlipping: false,
        score: 0,
        message: '',
    },
    reducers: {
        startGame:( state ) => {

        },
        flipCard: (state) => {

        },
        checkMatch: ( state ) => {

        },
        endTurn: ( state ) =>{

        }
    }
});

export const {
    startGame,
    flipCard,
    checkMatch,
    endTurn
} = memorySlice.actions;