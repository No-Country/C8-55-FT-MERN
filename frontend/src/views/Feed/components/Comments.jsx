import { Stack, Box, Divider, CardMedia, Typography, TextField, IconButton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import CommentDetails from './CommentDetails'
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import getConfig from '../../../config';

import { onSocketIO, socket, emitSocketIO } from "../../../socketIO/socketIO";
import { fetchNotifications, types, generateNotification } from '../../../utils/notificationsUtils';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

const Comments = ({ comments, postId }) => {

    const [commentsToGetDetails, setCommentToGetDetails] = useState(comments)

    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const handleClickVariant = (msg = "", variant = "") => () => {

        enqueueSnackbar(msg, { variant });
        //localStorage.removeItem("socket");
    };

    const getComments = postId => {
        axios.get(`http://localhost:3000/post/get_post/${postId}`, getConfig())
            .then(res => {
                setCommentToGetDetails(res.data.post.comments)
                fetchNotifications(dispatch)
            })
            .catch(err => console.log(err))
    }

    const postComment = e => {
        e.preventDefault()
        const textComment = e.target.comment.value
        const body = {
            userId: '63743f57d8c106bb72a1c066',
            postId,
            text: textComment
        }

        axios.post('http://localhost:3000/comment/', body, getConfig())
            .then(res => {

                getComments(postId)
                e.target.comment.value = ''

                if (res.status === 200) {
                    console.log("Creando socket")
                    emitSocketIO(socket, types.newComment, {
                        
                        token: localStorage.getItem("token"),
                        postId,
                        type: types.newComment
                    })

                }

                //onSocketIO(socket, types.newComment, handleClickVariant, "success")
                socket.on("NEW_COMMENT", data => {
                    console.log("Recibiendo NEW_COMMENT en el front. Estoy en Comments.")
                    handleClickVariant(generateNotification(data.senderName, types.newComment), "success")()
                    //fetchNotifications(dispatch)
                })
                socket.on("GET_NOTIFICATION", data => {
                    console.log("Recibiendo GET_NOTIFICATION en el front. Estoy en Comments.")
                    handleClickVariant(generateNotification(data.senderName, types.newComment), "success")()
                    //fetchNotifications(dispatch)
                })
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        socket.on("GET_NOTIFICATION", data => {
            console.log("Recibiendo la notificacion desde el back. Estoy en Comments.")
            return handleClickVariant(generateNotification(data.senderName, types.newComment), "success")()
            //fetchNotifications(dispatch)
        })
        return () => {
            socket.off("GET_NOTIFICATION", data => {
                console.log("Recibiendo la notificacion desde el back. Estoy en Comments. OFF!!!")
                return handleClickVariant(generateNotification(data.senderName, types.newComment), "success")()

            })

        }
    }, [socket])

    return (
        <Stack m='1em'>
            <Box
                onSubmit={e => {
                    postComment(e)
                }}
                component='form'
                sx={{ display: 'flex' }}
            >
                <TextField
                    fullWidth
                    name="comment"
                    label="Deja aqui tu veneno..."
                    variant="outlined"
                    size="small"
                />
                <IconButton sx={{ color: "var(--color-complement-black)" }} type='submit'>
                    <SendIcon />
                </IconButton>
            </Box>
            {/* <Divider sx={{ mb: '1em' }} /> */}
            {commentsToGetDetails && commentsToGetDetails.map(comment => (
                <Box key={comment._id}>
                    <CommentDetails comment={comment._id} getComments={getComments} />
                    <Divider />

                </Box>
            ))}

        </Stack>
    )
}

export default Comments