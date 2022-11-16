import { Stack, Box, Typography, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CreatePost from './components/CreatePost'
import PostShared from './components/PostShared'
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios'

const Feed = () => {

  const [createPostVisibility, setCreatePostVisibility] = useState('none')
  const [posts, setPosts] = useState()

  const addPost = () => {
    if(createPostVisibility === 'none'){
      setCreatePostVisibility('inline')
    }else{
      setCreatePostVisibility('none')
    }
  }

  const getAllPosts = () => {
   
  } 

  useEffect(() => {
    axios.get('http://localhost:3000/post/all_posts')
    .then(res => {
      console.log(res.data.posts)
      setPosts(res.data.posts)
    })
    .catch(err => console.log(err))
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

        <Stack sx={{ display: 'flex', gap: '1em', overflow: 'scroll', maxHeight: 700, paddingBottom: '8em' }}>
        {posts && posts.map( post =>  <PostShared key={post._id} post={post} /> )}
         
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Feed