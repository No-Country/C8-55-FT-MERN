import React, { useEffect, useState } from 'react'
import { Stack, Box, Divider, CardMedia, Typography, Button, IconButton, TextField, Badge } from '@mui/material'
import axios from 'axios'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import Reply from './Reply';
import SendIcon from '@mui/icons-material/Send';
import getConfig from '../../../config';


const CommentDetails = ({ comment, getComments }) => {


    const [commentDetails, setCommentDetails] = useState()
    const [reply, setReply] = useState()



    const [replyShow, setReplyShow] = useState(false)
    const [repliesCount, setRepliesCount] = useState(0)
    const [likesCount, setLikesCount] = useState(0)

    const hour = new Date(commentDetails?.comment.createdAt)




    const postReply = e => {
        e.preventDefault()

        const text = e.target.reply.value.trim().toString()

        const body = {
            commentId: commentDetails.comment._id,
            userId: commentDetails.comment.userId._id,
            postId: commentDetails.comment.postId,
            text
        }
        if (commentDetails) {
            axios.put('http://localhost:3000/comment/reply', body, getConfig())
                .then(res => {
                    console.log(res.data)
                    getComments(commentDetails.comment.postId)
                    e.target.reply.value = ''
                })
                .catch(err => console.log(err))
        }

    }

    useEffect(() => {
        axios.get(`http://localhost:3000/comment/get_comment/${comment}`, getConfig())
            .then(res => {
                setCommentDetails(res.data)
                setRepliesCount(res.data.comment.replies.length)
                setLikesCount(res.data.comment.likes.length)
            })
            .catch(err => console.log(err))
    }, [])

    if (commentDetails) {
        return (

            <Box p='1em' pr='0' sx={{ display: 'flex', alignItems: 'start' }}>

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
                        <Typography variant="body2" color="initial"><strong>{commentDetails.comment.userId.name} {commentDetails.comment.userId.lastName}</strong></Typography>
                        <Typography variant="body2" color="gray">{hour.toLocaleString()}</Typography>
                    </Box>
                    <Box my='0.3em' p='0.8em' sx={{ width: '100%', height: 'auto', minHeight: '1em', borderRadius: '0.3em', backgroundColor: '#ffffff98', boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)' }}>
                        {commentDetails.comment.text}
                    </Box>
                    <Box sx={{display: 'flex', gap: '0.5em'}}>
                        <IconButton size="small">
                            <Badge
                                color='primary'
                                badgeContent={likesCount}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}

                            >
                                <ThumbUpIcon fontSize="small" />
                            </Badge>

                        </IconButton>
                        <IconButton onClick={() => setReplyShow(!replyShow)} size="small">
                            <Badge
                                color='primary'
                                badgeContent={repliesCount}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}

                            >

                                <CommentIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                    </Box>

                    {
                        replyShow &&
                        <Box>

                            {commentDetails?.comment.replies[0] && commentDetails?.comment.replies.map(reply => <Reply key={reply._id} reply={reply} />)}

                            <Box component='form' onSubmit={postReply} sx={{ display: 'flex', my: '0.3em' }}>
                                <TextField size='small' fullWidth name="reply" label="Deja aqui tu veneno..." variant="outlined" />
                                <IconButton color='success' type='submit' >
                                    <SendIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    }

                </Box>
            </Box>
        )
    }

}

export default CommentDetails