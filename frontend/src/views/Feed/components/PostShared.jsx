import { Box, CardMedia, Stack, Typography, IconButton, Divider, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import React, { useState } from 'react'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';

const style = {
    postSharedStyle: {

        padding: '0.8em',

    }
}

const PostShared = () => {

    const [value, setValue] = useState(0);


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
                    <IconButton>
                        <FileUploadOutlinedIcon />
                    </IconButton>
                </Box>
                <Box sx={{ marginX: '1em' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officia accusamus, possimus suscipit tempora dolor repudiandae laboriosam quia nam repellat numquam quam expedita impedit dolore mollitia itaque veritatis maiores totam.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officia accusamus, possimus suscipit tempora dolor repudiandae laboriosam quia nam repellat numquam quam expedita impedit dolore mollitia itaque veritatis maiores totam.

                </Box>
                <Divider sx={{ marginTop: '1em' }} />

            </Stack>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{ backgroundColor: 'transparent' }}
            >
                <BottomNavigationAction label="Like" icon={<ThumbUpOffAltOutlinedIcon />} />
                <BottomNavigationAction label="Comments" icon={<InsertCommentOutlinedIcon />} />
                <BottomNavigationAction label="Donate" icon={<LocalCafeOutlinedIcon />} />
                <BottomNavigationAction label="Add Talent" icon={<PersonAddOutlinedIcon />} />
                <BottomNavigationAction label="Save" icon={<BookmarkBorderOutlinedIcon />} />
            </BottomNavigation>
        </Stack>
    )
}

export default PostShared