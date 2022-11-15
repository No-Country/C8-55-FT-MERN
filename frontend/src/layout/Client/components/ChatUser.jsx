import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'

const ChatUser = () => {
    return (
        <Box>
            <Box sx={{display: 'flex', gap: '0.5em'}}>
                <Box sx={{ maxWidth: 40, borderRadius: '100%', overflow: 'hidden' }}>
                    <CardMedia
                        component="img"
                        height="40"
                        width="40"
                        image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                        alt="green iguana"
                    />
                </Box>
                <Box sx={{display: 'flex',  width: '100%', flexDirection: 'column' }}>
                    <Box sx={{display: 'flex', alignItems: 'top', justifyContent: 'space-between', alignItems: 'center',  width: '100%'}}>
                    <Typography variant="subtitle2" color="initial">Feredico Valdez</Typography>
                    <Typography variant="body2" color="gray">13:42A.M.</Typography>
                    </Box>
                    <Typography variant="body2" color="gray">Hola Deriam, crees que podrias...</Typography>
                    
                </Box>
            </Box>
        </Box>
    )
}

export default ChatUser