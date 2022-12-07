import { Stack, Box, Typography, IconButton, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CreatePost from './components/CreatePost'
import PostShared from './components/PostShared'
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios'
import getConfig from '../../config';
import { CloudinaryContext, Image } from 'cloudinary-react'

import {emitSocketIO, socket, onSocketIO} from "../../socketIO/socketIO";
import { useSnackbar } from 'notistack';
import { fetchNotifications, types, generateNotification } from '../../utils/notificationsUtils';
import { useDispatch } from 'react-redux';


const Feed = () => {

  const URL_BASE = import.meta.env.VITE_REACT_APP_API_URI

  const [createPostVisibility, setCreatePostVisibility] = useState('none')
  const [posts, setPosts] = useState()
  
  const addPost = () => {
    if (createPostVisibility === 'none') {
      setCreatePostVisibility('inline')
    } else {
      setCreatePostVisibility('none')
    }
  }

  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  
  const handleClickVariant = (msg = "", variant = "") => () => {
        
    enqueueSnackbar(msg, {variant});
};

  const getAllPosts = () => {
    axios.get(`${URL_BASE}/post/all_posts`, getConfig())
    .then(res => {
      setPosts(res.data.posts)
    })
    .catch(err => console.log(err))
  }
  
  useEffect(() => {
    getAllPosts()
  }, [])
  
  useEffect(()=> {
        emitSocketIO(socket, "USERNAME", {token: localStorage.getItem("token")})

        socket.on("GET_NOTIFICATION", (data)=> {
            handleClickVariant(generateNotification(data.senderName, types.newComment), "success")()
            fetchNotifications(dispatch)
        })

        /* return () => {
           socket.off("GET_NOTIFICATION", (data)=> {
             console.log(data)
          })
        } */
  }, [])
 

  return (
    <Stack>
      <Stack sx={{ width: '600px', display: 'flex', gap: '1em' }}>

        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <Typography variant="h6" color="initial">Create post</Typography>
          <IconButton color='success' onClick={addPost}>
            <AddIcon />
          </IconButton>
        </Box>

        <CreatePost createPostVisibility={createPostVisibility} getAllPosts={getAllPosts} />

        <Stack sx={{ display: 'flex', gap: '1em', overflow: 'scroll', maxHeight: 500, paddingBottom: '3em' }}>
          {posts && posts.map(post => <PostShared key={post._id} post={post} />).reverse()}

        </Stack>
      </Stack>
    </Stack>
  )
}

export default Feed