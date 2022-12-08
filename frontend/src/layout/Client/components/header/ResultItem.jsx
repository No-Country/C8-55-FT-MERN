import React from 'react'
import { useNavigate } from 'react-router-dom'

import {
    Box,
    Avatar,
    Typography,
    createTheme
} from "@mui/material"

import { post, get } from '../../../../utils/apiUtils'

const ResultItem = ({ item }) => {

    const theme = createTheme()
    const navigate = useNavigate();

    const fetchUser = async (id) => {

        try {
            const response = await get(`user/userInfo/${id}`)
            console.log(response)
            if(response.status === 200) {
                navigate(`/profile/${response.data.userData._id}`)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box
            sx={{
                alignItems: "center",
                background: "var(--color-background-notifications)",
                cursor: "pointer",
                display: "flex",
                height: "100px",
                maxWidth: "600px",
                transition: "all 4s ease-in 5s",
                margin: "0 auto"
            }}
            
            onClick={()=> {
                fetchUser(item._id)
            }}
        >
            <Box
                sx={{
                    margin: "30px"
                }}
            >
                <Avatar
                    src={item.profileImage}
                    sx={{
                        height: "60px",
                        width: "60px",
                        margin: "0 auto",
                        [theme.breakpoints.down("md")] : {
                            height: "40px",
                            width: "40px",

                        }
                    }}
                />

            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "15px",
                    height: "100%",
                    width: "100%"
                }}
            >
                <Typography
                    variant="p"
                    component="h4"
                    sx={{
                        fontWeight: "normal",
                    }}
                >
                    {item.name + " " + item.lastName}
                </Typography>

            </Box>
        </Box>
    )
}

export default ResultItem