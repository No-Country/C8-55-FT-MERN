import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import FrontView from './components/FrontView'

const Home = () => {
  return (
    <Stack>
      <Box sx={{ border: '2px dashed white', height: 'calc(100vh - 5em)', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <FrontView />
      </Box>
    </Stack>
  )
}

export default Home