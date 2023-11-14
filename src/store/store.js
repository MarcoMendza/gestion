import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import {questionSlice} from "./questions/";
import {memorySlice} from "./memory/";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    questions: questionSlice.reducer,
    memory: memorySlice.reducer,
  },
})