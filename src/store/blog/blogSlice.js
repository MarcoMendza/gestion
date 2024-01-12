import { createSlice } from '@reduxjs/toolkit';

export const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        isLoading: false,
        blogs: [],
        message: '',
    },
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        setBlogs: (state, action) => {
            state.blogs = action.payload;
            state.isLoading = false;
        },
        setError: (state, action) => {
            state.isLoading = false;
            state.message = action.payload;
        },
        setCurrentBlog: (state, action) => {
            state.currentBlog = action.payload;
        },
    }
});

export const {
    startLoading,
    setBlogs,
    setCurrentBlog,
    setError
} = blogSlice.actions;