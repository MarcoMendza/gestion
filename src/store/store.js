import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import {questionSlice} from "./questions/";
import {memorySlice} from "./memory/";
import {blogSlice} from "./blog/blogSlice.js";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    questions: questionSlice.reducer,
    memory: memorySlice.reducer,
    blogs: blogSlice.reducer
  },
})