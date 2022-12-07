import React from 'react'
import {
    Box,
    Typography
} from "@mui/material";

const CloudMessage = ({ margin, style }) => {

    return (
        <Box
            sx={style}
        >
            <Typography
                sx={{
                    color: "var(--color-gray-lofi)",
                }}
            >
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Odit nostrum aspernatur
                consectetur tempore! Cumque quo ipsa sed
                doloribus enim inventore, laudantium sunt
                eligendi odio similique maiores distinctio
                rem, magni praesentium.
            </Typography>
        </Box >
    )
}

export default CloudMessage