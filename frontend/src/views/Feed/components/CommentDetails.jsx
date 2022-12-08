import React, { useEffect, useState } from 'react'
import { Stack, Box, Divider, CardMedia, Typography, Button, IconButton, TextField, Badge, Avatar } from '@mui/material'
import axios from 'axios'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import Reply from './Reply';
import SendIcon from '@mui/icons-material/Send';
import getConfig from '../../../config';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const CommentDetails = ({ comment, getComments }) => {

    const URL_BASE = import.meta.env.VITE_REACT_APP_API_URI

    const [commentDetails, setCommentDetails] = useState()
    const [replyShow, setReplyShow] = useState(false)
    const [repliesCount, setRepliesCount] = useState(0)
    const [likesCount, setLikesCount] = useState(0)

    const navigate = useNavigate()
    const hour = new Date(commentDetails?.comment.createdAt)
       
    const getCommentDetails = () => {
        axios.get(`${URL_BASE}/comment/get_comment/${comment}`, getConfig())
            .then(res => {
                setCommentDetails(res.data)
                setRepliesCount(res.data.comment.replies.length)
                setLikesCount(res.data.comment.likes.length)
            })
            .catch(err => console.log(err))
    }

    const postReply = e => {
        e.preventDefault()

        const text = e.target.reply.value.trim().toString()

        const body = {
            commentId: commentDetails.comment._id,
            postId: commentDetails.comment.postId,
            text
        }
        if (commentDetails) {
            axios.put(`${URL_BASE}/comment/reply`, body, getConfig())
                .then(res => {
                    getComments(commentDetails.comment.postId)
                    getCommentDetails()
                    e.target.reply.value = ''
                })
                .catch(err => console.log(err))
        }

    }

    const putLike = userId => {

        const body = {
            userId
        }
        axios.put(`${URL_BASE}/comment/like/${userId}`, body, getConfig())
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`${URL_BASE}/comment/get_comment/${comment}`, getConfig())
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
                <Avatar
                                sx={{width: 40, height: 40 }}
                                alt={<AccountCircleIcon/>}
                                src={commentDetails.comment.userId.profileImage}
                            />
             
                </Box>
                <Box ml='0.5em' sx={{ flex: 1 }}>
                    <Box onClick={()=> navigate(`/profile/${commentDetails.comment.userId._id}`)} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" color="initial"><strong>{commentDetails.comment.userId.name} {commentDetails.comment.userId.lastName}</strong></Typography>
                        <Typography variant="body2" color="gray">{hour.toLocaleString()}</Typography>
                    </Box>
                    <Box my='0.3em' p='0.8em' sx={{ width: '100%', height: 'auto', minHeight: '1em', borderRadius: '0.3em', backgroundColor: '#ffffff98', boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)' }}>
                        {commentDetails.comment.text}
                    </Box>
                    <Box sx={{ display: 'flex', gap: '0.5em' }}>
                        <IconButton size="small" onClick={() => putLike(commentDetails.comment.userId._id)}>
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

                            {commentDetails?.comment.replies[0] && commentDetails?.comment.replies.map(reply => <Reply key={reply._id} reply={reply} getCommentDetails={getCommentDetails} />)}

                            <Box component='form' onSubmit={postReply} sx={{ display: 'flex', my: '0.3em' }}>
                                <TextField size='small' fullWidth name="reply" label="Deja aqui tu comentario   ..." variant="outlined" />
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