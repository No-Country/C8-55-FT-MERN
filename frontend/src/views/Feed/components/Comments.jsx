import { Stack, Box, Divider, CardMedia, Typography, TextField, IconButton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import CommentDetails from './CommentDetails'
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import getConfig from '../../../config';

import { onSocketIO, socket, emitSocketIO } from "../../../socketIO/socketIO";
import { fetchNotifications, types, generateNotification } from '../../../utils/notificationsUtils';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

const Comments = ({ comments, postId }) => {
    const URL_BASE = import.meta.env.VITE_REACT_APP_API_URI


    const [commentsToGetDetails, setCommentToGetDetails] = useState(comments)

    const user = useSelector(state => state.user)

    const getComments = postId => {
        axios.get(`${URL_BASE}/post/get_post/${postId}`, getConfig())
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
            userId: user.id,
            postId,
            text: textComment
        }


        axios.post(`${URL_BASE}/comment/`, body, getConfig())
            .then(res => {

                getComments(postId)
                e.target.comment.value = ''

                if (res.status === 200) {
                    emitSocketIO(socket, types.newComment, {
                        token: localStorage.getItem("token"),
                        postId,
                        type: types.newComment
                    })

                }
            })
            .catch(err => console.log(err))
        }

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
                    label="Deja aqui tu comentario..."
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