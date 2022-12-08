import React, { useEffect, useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';
import axios from 'axios';
import getConfig from '../../../config';


const CreatePost = ({createPostVisibility, getAllPosts}) => {
    const URL_BASE = import.meta.env.VITE_REACT_APP_API_URI

    const [postValue, setPostValue] = useState()

    const createPost = () => {

        const body = {
            text: postValue.toString()
        }
            axios.post(`${URL_BASE}/post/create`, body, getConfig())
            .then(res => {createPostVisibility('none')}
 )
                .catch(err => console.log(err.data))
            }
    
    return (
        <Stack  sx={{ width: '100%', minHeight:20, maxHeight: 300, display: createPostVisibility}}>
            <TextField onChange={event => {
                setPostValue(event.target.value)
        }}
            fullWidth
            label='Create post'
            size='small'
            id='post'
            required />
            <Button onClick={createPost} variant='text'>Crear post</Button>
        </Stack>
    )
}

export default CreatePost