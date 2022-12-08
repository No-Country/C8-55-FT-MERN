import React, { useState, useRef, useEffect } from 'react'
import {
    Stack,
    Box,
    Typography,
    IconButton,
    Paper,
    Divider,
    InputBase
} from "@mui/material";

import SendIcon from '@mui/icons-material/Send';

import CloudMessage from "./CloudMessage";
import { socket, typesSocket } from '../../../../socketIO/socketIO';
import { post, get } from '../../../../utils/apiUtils';

const ChatWindow = () => {

    const [displayChat, setDisplayChat] = useState('none')
    const [currentMsg, setCurrentMsg] = useState("");
    const [historyMsg, setHistoryMsg] = useState();

    const displayShow = () => {
        if (displayChat === 'none') {
            setDisplayChat('inline')
        } else {
            setDisplayChat('none')
        }
    }

    const handleCurrentMsg = (e) => {
        
        setCurrentMsg(e.target.value)
    }

    const postMsg = () => {
        console.log("se esta enviando el mensaje")
        let data = {
            token: localStorage.getItem("token"),
            intId: "6387f05fbcc725a93ac1a443",
            text: currentMsg
        }
        socket.emit(typesSocket.newMessage, {data})
    }

    const receiveHistoryChat = async () => {

        const response1 = await get(`chat/get/6387f05fbcc725a93ac1a443`);
        const response2 = await get(`chat/get/637cf3d82bdc49cf28bdc3f2`);

        if(response1.status === 200 && response2.status === 200) {
            
        }

    }

    /* const fetchUser = async () => {
        const response = await post("/user/userInfo", "6387f05fbcc725a93ac1a443")
        console.log(response)
    }
 */
    /* useEffect(()=> {
        fetchUser()
    }, []) */

    return (
        <Stack
            sx={{
                borderTopLeftRadius: '0.8em',
                borderTopRightRadius: '0.8em',
                width: 400,
                border: ' 0.3px solid gray',
                overflow: 'hidden',
                display: 'flex'
            }}
        >
            <Stack
                sx={{
                    backgroundColor: 'var(--color-complement-black)',
                    padding: "16px"
                }}
                onClick={displayShow}
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

                </Box>
            </Stack>

            <Stack
                sx={{
                    display: displayChat
                }}
            >
                <Box
                    sx={{
                        p: '1em',
                        maxHeight: 400,
                        overflow: 'scroll',
                        backgroundColor: "white"
                    }}
                >
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, id) => {

                            if (value % 2 !== 0) {
                                return <CloudMessage
                                            style={{
                                                backgroundColor: "var(--color-complement-black)",
                                                borderRadius: "10px",
                                                margin: "20px auto 20px 10px",
                                                padding: "15px",
                                                width: "70%"
                                            }}
                                            key={id}
                                        />
                            } else {
                                return <CloudMessage
                                            style={{
                                                backgroundColor: "var(--color-complement-black)",
                                                borderRadius: "10px",
                                                margin: "20px 10px 20px auto",
                                                padding: "15px",
                                                width: "70%"
                                            }}
                                            key={id} 
                                        />

                            }
                        })
                    }
                </Box>

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
                            /* ref={msgRef} */
                            onChange= {(e) => handleCurrentMsg(e)}
                        />
                        <IconButton
                            type="button"
                            sx={{
                                p: '10px'
                            }}
                            aria-label="search"
                            onClick={postMsg}
                        >
                            <SendIcon
                                sx={{
                                    color: "var(--color-complement-black)"
                                }}
                            />
                        </IconButton>
                    </Paper>
                </Box>
            </Stack>
        </Stack>
    )
}

export default ChatWindow