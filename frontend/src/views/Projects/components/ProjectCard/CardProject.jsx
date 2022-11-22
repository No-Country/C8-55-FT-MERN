import React, { useRef } from 'react'
import { Grid, Box, Button, Typography, CardMedia, createTheme, Avatar } from '@mui/material'

//MUI Icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import LoupeIcon from '@mui/icons-material/Loupe';

//Utils
import { HandleMouseEnter, HandleMouseLeave, styles } from "../../../../utils/cardProjectUtils";
import useScreenSize from "../../../../hooks/useScreenSize";

const CardProject = () => {

    const theme = createTheme();
    const descriptionRef = useRef();
    const resize = useScreenSize();

    return (
        <Box
            height="auto"
            m={2}
            width="320px"
            sx={styles.article}
        >
            <Grid container spacing={0} >

                <Grid item lg={4} >
                    <Box sx={styles.frontCard}>

                        <CardMedia
                            sx={styles.imgFront}
                            component="img"
                            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            alt="green iguana"
                            onMouseEnter={() => HandleMouseEnter(descriptionRef, resize.widthResize)}
                        />

                        {/* Project Info Mobile */}
                        <Box sx={styles.proyectData} >
                            <Typography
                                variant="h5"
                                sx={{ color: "var(--color-gray-lofi)" }}
                            >
                                Re:Clothes
                            </Typography>

                            <Button
                                sx={styles.btnTechnology}
                                size="medium"
                                disableElevation
                            >
                                technology
                            </Button>
                        </Box>

                        {/* Description Mobile */}
                        <Typography
                            onMouseLeave={() => HandleMouseLeave(descriptionRef)}
                            sx={styles.hoverDescription}
                            ref={descriptionRef}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} lg={8} >
                    <Box
                        width="100%"
                        height="100%"
                        padding="10px"
                    >
                        <Grid container spacing={0} >

                            <Grid item lg={12} >
                                <Box width="100%" >
                                    <Grid container >

                                        <Grid item lg={8} >
                                            <Box
                                                sx={
                                                    {
                                                        [theme.breakpoints.down("lg")]: { display: "none" }
                                                    }
                                                }
                                            >
                                                <Grid container >

                                                    {/* Proyect Info md */}
                                                    <Grid item lg={12} >
                                                        <Box
                                                            sx={
                                                                {
                                                                    display: "flex",
                                                                    padding: "20px"
                                                                }
                                                            }
                                                        >
                                                            <Typography
                                                                variant="h5"
                                                                sx={
                                                                    {
                                                                        color: "var(--color-gray-lofi)",
                                                                        marginRight: "15px"
                                                                    }
                                                                }
                                                            >
                                                                Re:Clothes
                                                            </Typography>
                                                            <Button
                                                                sx={styles.btnTechnology}
                                                                size="medium"
                                                                disableElevation
                                                            >
                                                                technology
                                                            </Button>
                                                        </Box>
                                                    </Grid>

                                                    {/* Description md */}
                                                    <Grid item lg={12} >
                                                        <Typography
                                                            sx={
                                                                {
                                                                    color: "var(--color-gray-lofi)",
                                                                    marginLeft: "20px"
                                                                }
                                                            }
                                                            variant="small"
                                                        >
                                                            Esta es la descripción del proyecto.
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>

                                        {/* View Button */}
                                        <Grid
                                            item
                                            lg={4}
                                        >
                                            <Box
                                                sx={
                                                    {
                                                        alignItems: "center",
                                                        display: "flex",
                                                        margin: "auto",
                                                        height: "100%"
                                                    }
                                                }
                                            >
                                                <Button
                                                    variant="contained"
                                                    sx={
                                                        {
                                                            backgroundColor: "var(--color-black-lofi)",
                                                            margin: "auto",
                                                            padding: "auto 10px",
                                                            "&:hover": {
                                                                backgroundColor: "var(--color-orange-base)"
                                                            },
                                                            [theme.breakpoints.down("lg")]: {
                                                                display: "none"
                                                            }
                                                        }
                                                    }
                                                >
                                                    <LoupeIcon />
                                                    <Typography
                                                        variant="small"
                                                        sx={
                                                            {
                                                                fontFamily: "var(--font-secondary)",
                                                                marginLeft: "4px"
                                                            }
                                                        }
                                                    >
                                                        View
                                                    </Typography>
                                                </Button>

                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            {/* Bottom architecture */}
                            <Grid item xs={12} lg={12}>
                                <Box
                                    sx={
                                        {
                                            [theme.breakpoints.up("lg")]: { marginTop: "40px" }
                                        }
                                    }
                                >
                                    <Grid container spacing={0} >

                                        {/* Profile Data */}
                                        <Grid item xs={6} lg={8} >
                                            <Box
                                                sx={
                                                    {
                                                        display: "flex",
                                                        alignItems: "flex-end",
                                                        [theme.breakpoints.up("lg")]: { marginLeft: "20px" }
                                                    }
                                                }
                                            >
                                                < Avatar
                                                    alt="avatar"
                                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                                                />
                                                <Typography
                                                    variant="small"
                                                    marginLeft="5px"
                                                    sx={
                                                        {
                                                            [theme.breakpoints.up("lg")]: { color: "var(--color-gray-lofi)" }
                                                        }
                                                    }
                                                >
                                                    name user
                                                </Typography>
                                            </Box>
                                        </Grid>

                                        {/* Likes */}
                                        <Grid item xs={3} lg={2} >
                                            <Box sx={
                                                {
                                                    display: "flex",
                                                    width: "100%"
                                                }
                                            }
                                            >
                                                < ThumbUpIcon
                                                    sx={styles.icon}
                                                />
                                                <Typography
                                                    sx={styles.descriptionIcon}
                                                >
                                                    4k
                                                </Typography>
                                            </Box>
                                        </Grid>

                                        {/* Comments */}
                                        <Grid item xs={3} lg={2}>
                                            <Box
                                                sx={
                                                    {
                                                        display: "flex"
                                                    }
                                                }
                                            >
                                                < ModeCommentIcon
                                                    sx={styles.icon}
                                                />
                                                <Typography
                                                    sx={styles.descriptionIcon}
                                                >
                                                    4k
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                        </Grid>

                    </Box>

                </Grid>
            </Grid>
        </Box>
    )
}

export default CardProject;