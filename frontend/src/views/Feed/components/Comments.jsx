import { Stack, Box, Divider, CardMedia, Typography } from '@mui/material'
import React from 'react'
import CommentDetails from './CommentDetails'

const Comments = ({comments}) => {

    return (
        <Stack m='1em'>
            <Divider />
            {comments.map( comment => <CommentDetails key={comment} comment={comment}/> )}
            
        </Stack>
    )
}

export default Comments