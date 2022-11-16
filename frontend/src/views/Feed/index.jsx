import { Stack, Box, Typography, IconButton } from '@mui/material'
import React, { useState } from 'react'
import CreatePost from './components/CreatePost'
import PostShared from './components/PostShared'
import AddIcon from '@mui/icons-material/Add';
const Feed = () => {

  const [createPostVisibility, setCreatePostVisibility] = useState('none')

  const addPost = () => {
    if(createPostVisibility === 'none'){
      setCreatePostVisibility('inline')
    }else{
      setCreatePostVisibility('none')
    }
  }

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
          <PostShared />
          <PostShared />
          <PostShared />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Feed