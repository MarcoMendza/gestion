import { createSlice } from '@reduxjs/toolkit';

export const questionSlice = createSlice({
    name: 'questions',
    initialState: {
        isSaving: false,
        questions: [],
        userAnswers: [],
        message: '',
    },
    reducers: {
        setSaving: (state) => {
            state.isSaving = true;
            state.message = 'Resultados guardados'
        },
        setQuestions:(state, action) => {
            state.questions = action.payload;
        },
        setUserAnswers: (state, action) => {
            state.userAnswers.push(...action.payload);
            state.isSaving = false;
        },
        savedResults:(state) => {
            state.userAnswers = []
            state.isSaving = false;
            state.message = ''
        }
    }
});

export const {
    setQuestions,
    setSaving,
    savedResults,
} = questionSlice.actions;
