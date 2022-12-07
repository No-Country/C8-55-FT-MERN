import { createSlice } from "@reduxjs/toolkit";

const searchResults = createSlice({
    name: 'searchResults',
    initialState: {
        results: []
    },
    reducers: {
        setSearchResults: (state, action) => {
            state.results = action.payload.results
        }
    }
})  

export const { setSearchResults } = searchResults.actions

export default searchResults.reducer