import React, { useState, useEffect } from 'react';

import {
    Box,
    createTheme
} from "@mui/material";

import ResultItem from './ResultItem';
import Search from "./Search";
import {useSelector, useDispatch} from "react-redux";
import { setDisplaySearch } from '../../../../store/slices/searchResults.slice';

const SearchResults = ({ items = []}) => {

    let [display, setDisplay] = useState("none");
    const theme = createTheme();
    const {displaySearch} = useSelector(state => state.searchResults)
    const dispatch = useDispatch();

    const handleDisplay = (display) => {
        if (display === "block") {
            setDisplay("none")
        } else {
            setDisplay("block")
        }
    }

    useEffect(() => {
        items.length > 0 && setDisplay("block")
    }, [items])

    return (
        <Box
            sx={{
                display: { display },
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                position: "relative",
                width: "100%",
                margin: "0 auto",
                overflow: "scroll",
                height: "87vh",
                [theme.breakpoints.down("md")]: {
                    height: "79vh",
                    display: `${displaySearch}`
                }
            }}
            onClick={() => {
                handleDisplay(display)
            }}
        >
            <Box sx={{
                [theme.breakpoints.up("md")]: {
                    display: "none"
                }
            }}>
                <Search />

            </Box>
            {<Box
                sx={{
                    width: "auto",
                    margin: "0 auto",
                    transition: "height 5s ease-in-out"
                }}

                onClick={() => {
                    dispatch(setDisplaySearch({
                        displaySearch: "none"
                    }))
                }}
            >
                {
                    items && items?.length > 0
                        ?
                        items?.map((item, id) => (
                            <ResultItem
                                key={id}
                                item={item}
                            />

                        ))
                        :
                        <p
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                background: "var(--color-background-notifications)",
                                cursor: "pointer",
                                display: "flex",
                                height: "100px",
                                maxWidth: "600px",
                                transition: "all 4s ease-in 5s",
                                margin: "0 auto"
                            }}

                            onClick={() => {
                                dispatch(setDisplaySearch({
                                    displaySearch: "none"
                                }))
                            }}
                        >
                            Sin resultados.
                        </p>
                }
            </Box>}
        </Box>
    )
}

export default SearchResults