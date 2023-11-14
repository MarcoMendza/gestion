import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import {questionSlice} from "./questions/questionSlice.js";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    questions: questionSlice.reducer,
  },
})