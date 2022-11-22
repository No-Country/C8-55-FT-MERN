import React from 'react'
import { Box, Typography, createTheme } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const styles = {
    icon: {
        margin: "5px",
        color: "var(--color-gray-lofi)"
    }
}

const Footer = () => {

    const theme = createTheme();

    return (
        <Box sx={
            {
                border: "solid 2px violet"
            }
        }>

            <Box
                sx={
                    {
                        border: "solid 2px lightgreen",
                        backgroundColor: "var(--color-complement-black)",
                        bottom: 0,
                        display: "flex",
                        justifyContent: "space-around",
                        left: 0,
                        /* position: "absolute", */
                        padding: "20px",
                        right: 0,
                        zIndex: 100
                    }
                }
            >
                <Typography
                    sx={
                        {
                            alignItems: "center",
                            color: "var(--color-gray-lofi)",
                            display: "flex",
                            fontFamily: "var(--font-secondary)",
                            fontSize: "10px",
                            [theme.breakpoints.up("sm")]: {
                                flexGrow: 1,
                                fontSize: "12px",
                                justifyContent: "center"
                            },
                            [theme.breakpoints.up("md")]: {
                                flexGrow: 1,
                                fontSize: "15px",
                                justifyContent: "center"
                            },
                        }
                    }
                >
                    @ProyectRocketCup2022
                </Typography>
                <Box
                    sx={
                        {
                            display: "flex",
                            justifyContent: "space-between",
                            [theme.breakpoints.up("sm")]: {
                                flexGrow: 1,
                                justifyContent: "space-evenly"
                            },
                            [theme.breakpoints.up("md")]: {
                                flexGrow: 1,
                                justifyContent: "space-evenly"
                            },
                        }
                    }
                >
                    <InstagramIcon sx={styles.icon} />
                    <FacebookIcon sx={styles.icon} />
                    <TwitterIcon sx={styles.icon} />
                </Box>

            </Box>

            <Box sx={
                {
                    border: "solid 2px red",
                }
            }>
            </Box>

        </Box>
    )
}

export default Footer