import React, { useState } from 'react'

import {
    Box,
    Paper,
    InputBase,
    createTheme
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { emitSocketIO, onSocketIO, socket } from '../../../../socketIO/socketIO';
import SearchResults from "./SearchResults";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchResults } from '../../../../store/slices/searchResults.slice';

const Search = () => {

    const theme = createTheme();
    const dispatch = useDispatch();
    const {results} = useSelector(state => state.searchResults);

    const searchUser = (e) => {

        e.preventDefault()

        emitSocketIO(socket, "SEARCH_USER", e.target.value)
        // onSocketIO(socket ,"SEARCHED_USER")
        socket.on("SEARCHED_USER", data => {
            console.log(data)
            dispatch(setSearchResults({
                results: data
            }))
        })
    }

    console.log("Results", results)

    return (
        <Box sx={{width: "100%"}}>
            <Paper
                component="form"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: "fit-content",
                    width: '100%',
                    maxWidth: 400,
                    position: "relative",
                    [theme.breakpoints.down("md")]: {
                        display: "none"
                    }
                }}
            >
                <InputBase
                    onChange={e => {
                        searchUser(e)
                    }}
                    sx={{ pl: 5, width: "100%" }}
                />
                <SearchIcon sx={{ position: "absolute", left: 5 }} />
            </Paper>
        </Box>
    )
}

export default Search