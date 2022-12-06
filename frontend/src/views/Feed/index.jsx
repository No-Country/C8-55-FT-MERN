import { Stack, Box, Typography, IconButton, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CreatePost from './components/CreatePost'
import PostShared from './components/PostShared'
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios'
import getConfig from '../../config';
import { CloudinaryContext, Image } from 'cloudinary-react'

import {emitSocketIO, socket, onSocketIO} from "../../socketIO/socketIO";

const Feed = () => {
  
  const [createPostVisibility, setCreatePostVisibility] = useState('none')
  const [posts, setPosts] = useState()
  
  const addPost = () => {
    if (createPostVisibility === 'none') {
      setCreatePostVisibility('inline')
    } else {
      setCreatePostVisibility('none')
    }
  }
  
  
  useEffect(() => {
    axios.get('http://localhost:3000/post/all_posts', getConfig())
    .then(res => {
      setPosts(res.data.posts)
    })
    .catch(err => console.log(err))
  }, [])
  
  useEffect(()=> {
      emitSocketIO(socket, "USERNAME", {token: localStorage.getItem("token")})
      onSocketIO(socket, "GET_NOTIFICATION")
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

        <CreatePost createPostVisibility={createPostVisibility} />

        <Stack sx={{ display: 'flex', gap: '1em', overflow: 'scroll', maxHeight: 500, paddingBottom: '3em' }}>
          {posts && posts.reverse().map(post => <PostShared key={post._id} post={post} />)}

        </Stack>
      </Stack>
    </Stack>
  )
}

export default Feed