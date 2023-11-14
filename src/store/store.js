import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import {questionSlice} from "./questions/questionSlice.js";
import {memorySlice} from "./memory/memorySlice.js";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    questions: questionSlice.reducer,
    memory: memorySlice.reducer,
  },
})