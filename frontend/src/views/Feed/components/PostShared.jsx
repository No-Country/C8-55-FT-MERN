import { Box, CardMedia, Stack, Typography, IconButton, Divider, BottomNavigation, BottomNavigationAction, Paper, Button } from '@mui/material'
import React, { useState } from 'react'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import Comments from './Comments';
import axios from 'axios'

const style = {
    postSharedStyle: {

        padding: '0.8em',

    }
}

const PostShared = ({ post }) => {
    console.log(post)

    const [commentShow, setCommentShow] = useState(false)

    const commentView = () => {
        setCommentShow(!commentShow)
    }

    return (
        <Stack sx={{ borderRadius: '0.5em', backgroundColor: '#edf2f4', paddingBottom: '1em' }}>
            <Stack sx={style.postSharedStyle}>
                <Box sx={{ display: 'flex', gap: '0.5em', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1em' }}>
                    <Box sx={{ display: 'flex', gap: '0.5em', alignItems: 'center' }}>
                        <Box sx={{ maxWidth: 60, borderRadius: '100%', overflow: 'hidden' }}>
                            <CardMedia
                                component="img"
                                height="60"
                                width="60"
                                image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                                alt="green iguana"
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="body" color="initial"><strong>Deriam Suarez</strong></Typography>
                            <Typography variant="body2" color="initial">Frontend Developer</Typography>
                        </Box>
                    </Box>
                    <Button variant='outlined' color='success'>
                        Follow
                    </Button>
                </Box>
                <Box sx={{ marginX: '1em' }}>
                    {post.text}
                </Box>
                <Divider sx={{ marginTop: '1em' }} />

            </Stack>
            <BottomNavigation
                showLabels
                sx={{ backgroundColor: 'transparent' }}
            >
                <BottomNavigationAction label={`Likes (${post.likes.length})`} icon={<ThumbUpOffAltOutlinedIcon />} />
                <BottomNavigationAction onClick={commentView} label={`Comments (${post.comments.length})`} icon={<InsertCommentOutlinedIcon />} />
                <BottomNavigationAction label="Save" icon={<BookmarkBorderOutlinedIcon />} />
            </BottomNavigation>
           {commentShow && <Comments comments={post.comments} postId={post._id} />}
        </Stack>
    )
}

export default PostShared