import React, { useState } from 'react'
import { Stack, Box, Divider, CardMedia, Typography, Button, IconButton, TextField, Avatar } from '@mui/material'
import axios from 'axios'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const Reply = ({ reply, getCommentDetails }) => {

    const hour = new Date(reply?.createdAt)

    

    return (
        <Box p='0.5em' px='0' sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ maxWidth: 40, borderRadius: '100%', overflow: 'hidden' }}>
            <Avatar
                                sx={{width: 40, height: 40 }}
                                alt={<AccountCircleIcon/>}
                                src={reply.userId.profileImage}
                            />
            </Box>
            <Box ml='0.5em' sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="initial"><strong>{reply.userId.name} {reply.userId.lastName}</strong></Typography>
                    <Typography variant="body2" color="gray">{hour.toLocaleString()}</Typography>
                </Box>
                <Box my='0.3em' p='0.8em' sx={{ width: '100%', height: 'auto', minHeight: '1em', borderRadius: '0.3em', backgroundColor: '#ffffff98', boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)' }}>
                    {reply.text}
                </Box>
            </Box>
        </Box>
    )
}

export default Reply