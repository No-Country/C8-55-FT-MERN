import { Box, CardMedia, Stack, Typography, IconButton, Divider, BottomNavigation, BottomNavigationAction, Paper, Button, Avatar } from '@mui/material'
import React, { useState } from 'react'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Comments from './Comments';
import axios from 'axios'
import getConfig from '../../../config';

import { emitSocketIO, socket } from "../../../socketIO/socketIO";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const style = {
    postSharedStyle: {
        padding: '0.8em',
        minWidth: 600
    }
}

const PostShared = ({ post }) => {
    const URL_BASE = import.meta.env.VITE_REACT_APP_API_URI

    const [commentShow, setCommentShow] = useState(false)
    const navigate = useNavigate()

    const user = useSelector(state => state.user)
console.log(post)
    const commentView = () => {
        setCommentShow(!commentShow)
    }

    const putLike = () => {

        const body = {
            userId: user.id
        }
        axios.put(`${URL_BASE}/post/like/${post._id}`, body, getConfig())
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        //emitSocketIO(socket, "likePost", {postID: post._id})
    }

    const followUser = id => {

        axios.post(`${URL_BASE}/user/addfollowing/${id}`, id, getConfig())
            .then(res => console.log(res.data))
            .catch(err => console.log(err, `aqui hay algo raro`))
    }

    return (
        <Stack sx={{ borderRadius: '0.5em', backgroundColor: '#edf2f4', paddingBottom: '1em' }}>
            <Stack sx={style.postSharedStyle}>
                <Box sx={{ display: 'flex', gap: '0.5em', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1em' }}>
                    <Box sx={{ display: 'flex', gap: '0.5em', alignItems: 'center' }}>
            
                            <Avatar
                                sx={{width: 50, height: 50 }}
                                alt={<AccountCircleIcon/>}
                                src={post.userId.profileImage}
                            />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{cursor: 'pointer'}} onClick={() => navigate(`/profile/${post.userId._id}`)} variant="body" color="initial"><strong>{post.userId.name} {post.userId.lastName}</strong></Typography>
                                <IconButton onClick={() => followUser(post.userId._id)} >
                                    <PersonAddAltIcon fontSize="small" />
                                </IconButton>
                            </Box>
                            <Typography variant="body2" color="initial">Frontend Developer</Typography>
                        </Box>
                    </Box>
                    <IconButton  >
                        <DragIndicatorIcon />
                    </IconButton>
                </Box>
                <Box sx={{ marginX: '1em' }}>
                    <div dangerouslySetInnerHTML={{ __html: post.text }}  ></div>
                </Box>
                <Divider sx={{ marginTop: '1em' }} />

            </Stack>
            <BottomNavigation
                showLabels
                sx={{ backgroundColor: 'transparent' }}
            >
                <BottomNavigationAction onClick={() => putLike(post.userId._id)} label={`Likes (${post.likes.length})`} icon={<ThumbUpOffAltOutlinedIcon />} />
                <BottomNavigationAction onClick={commentView} label={`Comments (${post.comments.length})`} icon={<InsertCommentOutlinedIcon />} />
                <BottomNavigationAction label="Save" icon={<BookmarkBorderOutlinedIcon />} />
            </BottomNavigation>
            {commentShow && <Comments comments={post.comments} postId={post._id} />}
        </Stack>
    )
}

export default PostShared