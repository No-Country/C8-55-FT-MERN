import React, { useRef } from 'react'
import { Grid, Box, Button, Typography, CardMedia, createTheme, Avatar } from '@mui/material'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

//MUI Icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import LoupeIcon from '@mui/icons-material/Loupe';

//Utils
import { HandleMouseEnter, HandleMouseLeave } from "../../../../utils/cardProjectUtils";
import useScreenSize from "../../../../hooks/useScreenSize";
import { AtmOutlined } from '@mui/icons-material';

const CardProject = ({ project }) => {
    console.log(project)
    const theme = createTheme();
    const descriptionRef = useRef();
    const resize = useScreenSize();

    return (
        <Box
            height="auto"
            m={2}
            width="320px"
            sx={
                {
                    cursor: "pointer",
                    [theme.breakpoints.up("lg")]: {
                        backgroundColor: "var(--color-complement-black)",
                        borderRadius: "5px",
                        height: "200px",
                        width: "900px"
                    }
                }
            }
        >
            <Grid container spacing={0} >

                <Grid item lg={4} >
                    <Box sx={
                        {
                            position: "relative"
                        }
                    }
                    >

                        <CardMedia
                            sx={{
                                height: "100%",
                                width: "100%",
                                [theme.breakpoints.up("lg")]: {
                                    borderRadius: "4px",
                                    height: "80%",
                                    margin: "20px",
                                    width: "80%"
                                }
                            }
                            }
                            component="img"
                            image={`${project.projectImg}`}
                            alt="green iguana"
                            onMouseEnter={() => HandleMouseEnter(descriptionRef, resize.widthResize)}
                        />

                        {/* Project Info Mobile */}
                        <Box
                            sx={
                                {
                                    alignItems: "center",
                                    backgroundColor: "var(--color-black-lofi)",
                                    bottom: "0",
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    opacity: "0.8",
                                    padding: "10px",
                                    position: "absolute",
                                    width: "100%",
                                    [theme.breakpoints.up("lg")]: {
                                        display: "none"
                                    }
                                }
                            }
                        >
                            <Typography
                                variant="h5"
                                sx={{ color: "var(--color-gray-lofi)" }}
                            >
                                {project.title}
                            </Typography>

                            <Button
                                sx={
                                    {
                                        border: "solid 1px var(--color-orange-base)",
                                        borderRadius: "20px",
                                        color: "var(--color-orange-base)",
                                        fontSize: "12px",
                                        padding: "4px 8px"
                                    }
                                }
                                size="medium"
                                disableElevation
                            >
                                technology
                            </Button>
                        </Box>

                        {/* Description Mobile */}
                        <Typography
                            onMouseLeave={() => HandleMouseLeave(descriptionRef)}
                            sx={
                                {
                                    alignItems: "center",
                                    backgroundColor: "var(--color-black-lofi)",
                                    bottom: 0,
                                    color: "white",
                                    display: "none",
                                    fontSize: "20px",
                                    height: "100%",
                                    left: 0,
                                    opacity: "0.7",
                                    padding: "10px",
                                    position: "absolute",
                                    right: 0,
                                    textAlign: "center",
                                    top: 0,
                                    transition: "all 5s",
                                    width: "100%",
                                    [theme.breakpoints.up("lg")]: {
                                        display: "none"
                                    }
                                }
                            }
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
                                                                {project.title}
                                                            </Typography>
                                                            <Button
                                                                sx={
                                                                    {
                                                                        border: "solid 1px var(--color-orange-base)",
                                                                        borderRadius: "20px",
                                                                        color: "var(--color-orange-base)",
                                                                        fontSize: "12px",
                                                                        padding: "4px 8px"
                                                                    }
                                                                }
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
                                                            <div dangerouslySetInnerHTML={{ __html: project.description }} />
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
                                                    sx={
                                                        {
                                                            color: "var(--color-complement-black)",
                                                            fontSize: "30px",
                                                            [theme.breakpoints.up("lg")]: {
                                                                color: "var(--color-gray-lofi)"
                                                            }
                                                        }
                                                    }
                                                />
                                                <Typography
                                                    sx={
                                                        {
                                                            color: "var(--color-orange-base)",
                                                            fontFamily: "var(--font-secondary)",
                                                            padding: "4px"
                                                        }
                                                    }
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
                                                < AttachMoneyOutlinedIcon
                                                    sx={
                                                        {
                                                            color: "var(--color-complement-black)",
                                                            fontSize: "30px",
                                                            [theme.breakpoints.up("lg")]: {
                                                                color: "var(--color-gray-lofi)"
                                                            }
                                                        }
                                                    }
                                                />
                                                <Typography
                                                    sx={
                                                        {
                                                            color: "var(--color-orange-base)",
                                                            fontFamily: "var(--font-secondary)",
                                                            padding: "4px"
                                                        }
                                                    }
                                                >
                                                    {project.amount}
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