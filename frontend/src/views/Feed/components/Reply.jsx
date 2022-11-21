import React, { useState } from 'react'
import { Stack, Box, Divider, CardMedia, Typography, Button, IconButton, TextField } from '@mui/material'
import axios from 'axios'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';


const Reply = ({ reply, getCommentDetails }) => {

    const hour = new Date(reply?.createdAt)

    const [replyDetails, setReplyDetails] = useState(reply)
console.log(reply)
    return (
        <Box p='0.5em' px='0' sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ maxWidth: 40, borderRadius: '100%', overflow: 'hidden' }}>
                <CardMedia
                    component="img"
                    height="40"
                    width="40"
                    image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="green iguana"
                />
            </Box>
            <Box ml='0.5em' sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="initial"><strong>Francisco Garcia</strong></Typography>
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