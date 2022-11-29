import { Stack, Box, Divider, CardMedia, Typography, TextField, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CommentDetails from './CommentDetails'
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import getConfig from '../../../config';

import {onSocketIO, socket, emitSocketIO} from "../../../socketIO/socketIO";

const Comments = ({ comments, postId }) => {

    const [commentsToGetDetails, setCommentToGetDetails] = useState(comments)



    const getComments = postId => {
        axios.get(`http://localhost:3000/post/get_post/${postId}`, getConfig())
            .then(res => setCommentToGetDetails(res.data.post.comments))
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
                console.log(res.data)
                getComments(postId)
                e.target.comment.value = ''

                if(res.data.created === "successfully") {
                    emitSocketIO(socket, "NEW_COMMENT", {
                        token: localStorage.getItem("token"),
                        postId
                    })
                }
            })
            .then(err => console.log(err))

    }




    return (
        <Stack m='1em'>
            <Divider />
            {commentsToGetDetails && commentsToGetDetails.map(comment => <CommentDetails key={comment._id} comment={comment._id} getComments={getComments} />)}
            <Divider sx={{ mb: '1em' }} />
            <Box onSubmit={postComment} component='form' sx={{ display: 'flex' }}>
                <TextField fullWidth name="comment" label="Deja aqui tu veneno..." variant="outlined" />
                <IconButton color='success' type='submit'>
                    <SendIcon />
                </IconButton>
            </Box>
        </Stack>
    )
}

export default Comments