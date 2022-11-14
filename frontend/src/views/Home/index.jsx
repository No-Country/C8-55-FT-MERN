import { InputBase, Stack, TextField } from '@mui/material'
import React from 'react'
import PostShared from './components/PostShared'
const Home = () => {
  return (
    <Stack>
      <Stack sx={{ width: '600px', display: 'flex', gap: '1em' }}>
        <InputBase
          sx={{ border: '0.5px solid gray', borderRadius: '20px', paddingX: '1em', height: '2.5em' }}
          placeholder="Create Post..."
        />
        <Stack sx={{ display: 'flex', gap: '1em', overflow: 'scroll', maxHeight: 700, paddingBottom: '3em' }}>
          <PostShared />
          <PostShared />
          <PostShared />

        </Stack>
      </Stack>
    </Stack>
  )
}

export default Home