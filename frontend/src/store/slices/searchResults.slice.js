import { createSlice } from "@reduxjs/toolkit";

const searchResults = createSlice({
    name: 'searchResults',
    initialState: {
        results: [],
        displaySearch: "none"
    },
    reducers: {
        setSearchResults: (state, action) => {
            state.results = action.payload.results
        },
        setDisplaySearch: (state, action) => {
            state.displaySearch = action.payload.displaySearch
        }
    }
})  

export const { setSearchResults } = searchResults.actions
export const { setDisplaySearch } = searchResults.actions

export default searchResults.reducer