import { Stack, Box, Drawer } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Chat from './components/Chat'
import Header from './components/Header'
import SideBar from './components/SideBar'

const ClientLayout = () => {
  return (
    <Stack pt='5em' sx={{ width: '100%', height: '100vh', display: 'flex', position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ position: 'fixed', top: 0, right: 0, left: 0, zIndex: 1 }}>
        <Header />
      </Box>
      <Box sx={{ display: 'flex', height: '100%', position: 'relative' }}>
        <Box sx={{ position: 'sticky', right: 0 }}>
          <SideBar />
        </Box>
        <Stack p='1em'>
          <Outlet />
        </Stack>
      </Box>
       {/* //! <Chat/> */}

    </Stack>
  )
}

export default ClientLayout