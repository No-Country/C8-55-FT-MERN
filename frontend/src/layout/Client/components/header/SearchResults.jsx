import React, {useState, useEffect} from 'react';

import {
    Box
} from "@mui/material";

import ResultItem from './ResultItem';

const SearchResults = ({ items = [] }) => {

    let [display, setDisplay] = useState("none");

    const handleDisplay = (display) => {
        if(display === "block") {
            setDisplay("none")
        }else {
            setDisplay("block")
        }
    }

    useEffect(()=> {
        items.length > 0 && setDisplay("block")
    }, [items])

    return (
        <Box
            sx={{
                display: {display},
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                position: "relative",
                height: "88vh",
                width: "100%"
            }}
            onClick={()=> {
                console.log("hola")
                handleDisplay(display)
            }}
        >
           { <Box 
                sx={{
                    maxWidth: "500px",
                    margin: "0 auto",
                    overflow: "hidden",
                    transition: "height 5s ease-in-out"
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
                        <p style={{ border: "solid 2px green" }}>Sin resultados.</p>
                }
            </Box>}
        </Box>
    )
}

export default SearchResults