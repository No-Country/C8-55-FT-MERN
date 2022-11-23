import React from 'react';
import { Box, Typography, createTheme, SvgIcon } from '@mui/material';
import { styled } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import FooterImage from "./FooterImage";


const styles = {
    icon: {
        color: "var(--color-gray-lofi)",
        cursor: "pointer",
        margin: "5px"
    }
}

const svgStyles = styled({
    margin: 0,
    height: "auto"
})

const Footer = () => {

    const theme = createTheme();

    return (
        <Box sx={
            {
                position: "absolute",
                bottom: 0,
                right: 0,
                height: "auto",
                [theme.breakpoints.down("lg")]: {
                    width: "100%"
                }
            }
        }>

            <Box
                sx={
                    {
                        backgroundColor: "var(--color-complement-black)",
                        display: "flex",
                        justifyContent: "space-around",
                        padding: "20px",
                        [theme.breakpoints.up("lg")]: {
                            backgroundColor: "transparent",
                            justifyContent: "space-between",
                            position: "absolute",
                            width: "80%"
                        }
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
                            [theme.breakpoints.up("lg")]: {
                                flexGrow: 0
                            }
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
                            [theme.breakpoints.up("lg")]: {
                                flexGrow: 0.5,
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
            <FooterImage />

        </Box>
    )
}

export default Footer;