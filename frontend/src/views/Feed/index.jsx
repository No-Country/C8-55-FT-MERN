import { InputBase, Stack, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import CreatePost from './components/CreatePost'
import PostShared from './components/PostShared'
import axios from 'axios'
const Home = () => {

  return (
    <Stack>
      <Stack sx={{ width: '600px', display: 'flex', gap: '1em' }}>
          <CreatePost />
        <Stack sx={{ display: 'flex', gap: '1em', overflow: 'scroll', maxHeight: 700, paddingBottom: '8em' }}>
          <PostShared />
          <PostShared />
          <PostShared />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Home