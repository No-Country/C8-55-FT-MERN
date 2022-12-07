import React, { useState, useEffect } from 'react'
import { Box, Skeleton, Stack, SwipeableDrawer, Typography, IconButton, Button, Paper, InputBase, Divider } from '@mui/material'
import MinimizeIcon from '@mui/icons-material/Minimize';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import SearchIcon from '@mui/icons-material/Search';
import ChatUser from './ChatUser';

import { get } from '../../../../utils/apiUtils';

const Chat = () => {

    const [displayChat, setDisplayChat] = useState('none')

    const displayShow = () => {
        if (displayChat === 'none') {
            setDisplayChat('inline')
        } else {
            setDisplayChat('none')
        }
    }

    const url = "/chats/get_chats";
    const fetchChats = async (url) => {

        const response = await get(url);

        console.log(response)
    }

    useEffect( () => {
        fetchChats(url)
    }, [])

    return (
        <Stack
            sx={{
                borderTopLeftRadius: '0.8em',
                borderTopRightRadius: '0.8em',
                width: 300,
                border: ' 0.3px solid gray',
                overflow: 'hidden',
                display: 'flex'
            }}
        >
            <Stack
                py='0.5em'
                pl='1em'
                sx={{
                    backgroundColor: '#23222F'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography
                        variant="subtitle2"
                        color="white"
                    >
                        Messages
                    </Typography>
                    <IconButton
                        sx={{
                            color: "var(--color-orange-base)"
                        }}
                        onClick={displayShow}
                    >
                        <IndeterminateCheckBoxIcon />
                    </IconButton>
                </Box>
            </Stack>

            <Stack
                sx={{
                    display: displayChat
                }}
            >
                <Box>
                    <Paper
                        component="form"
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            p: '2px',
                            width: '100%'
                        }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Message"
                        />
                        <IconButton
                            type="button"
                            sx={{
                                p: '10px'
                            }}
                            aria-label="search"
                        >
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Box>
                <Box
                    sx={{
                        p: '1em',
                        maxHeight: 400,
                        overflow: 'scroll',
                        backgroundColor: "white"
                    }}
                >
                    <ChatUser />
                    <Divider sx={{ my: '0.5em' }} />
                    <ChatUser />
                    <Divider sx={{ my: '0.5em' }} />
                    <ChatUser />
                    <Divider sx={{ my: '0.5em' }} />
                    <ChatUser />
                    <Divider sx={{ my: '0.5em' }} />
                    <ChatUser />
                    <Divider sx={{ my: '0.5em' }} />
                    <ChatUser />
                    <Divider sx={{ my: '0.5em' }} />
                    <ChatUser />
                    <Divider sx={{ my: '0.5em' }} />
                    <ChatUser />
                    <Divider sx={{ my: '0.5em' }} />
                    <ChatUser />
                    <Divider sx={{ my: '0.5em' }} />
                    <ChatUser />
                    <Divider sx={{ my: '0.5em' }} />
                    <ChatUser />
                    <Divider sx={{ my: '0.5em' }} />
                    <ChatUser />
                    <Divider sx={{ my: '0.5em' }} />
                    <ChatUser />
                    <Divider sx={{ my: '0.5em' }} />
                    <ChatUser />
                    <Divider sx={{ my: '0.5em' }} />
                </Box>
            </Stack>
        </Stack>
    )
}

export default Chat